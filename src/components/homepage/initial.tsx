"use client";

import phrases from "@/components/homepage/initialText";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { FC, useEffect, useRef, useState } from "react";
gsap.registerPlugin(CustomEase);
CustomEase.create("bezier", "0.8, 0, 0, 1");

interface InitialProps {}

const Initial: FC<InitialProps> = ({}) => {
  const time = new Date().getHours();
  const app = useRef<HTMLDivElement>(null);
  const [render, isRendered] = useState<boolean>(false);
  const timeline = useRef<gsap.core.Timeline>();

  // get array of phrases accordingly with current hour
  const currentHourPhrases =
    time >= 0 && time < 12
      ? phrases.morning
      : time >= 12 && time < 18
      ? phrases.afternoon
      : phrases.evening;

  const randomPhrase =
    currentHourPhrases[(currentHourPhrases.length * Math.random()) | 0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current = gsap
        .timeline()
        .to(".letter", {
          top: "0rem",
          rotate: 0,
          stagger: 0.05,
          ease: "bezier",
          duration: 0.6,
        })
        .to(app.current, {
          top: "-100%",
          ease: "bezier",
          duration: 2.2,
          delay: 0.3,
        });
    }, app);

    return () => ctx.revert();
  }, [render]);

  useEffect(() => {
    isRendered(true);
  }, []);

  return (
    <div
      ref={app}
      className="absolute left-0 top-0 z-[999] flex h-full w-full select-none items-center justify-center bg-[#F3DFC1] px-3 text-center md:px-5"
    >
      <div className="whitespace-pre-wrap">
        {render &&
          randomPhrase.split(/(\s+)/).map((word, i) => (
            <div
              key={i}
              className="inline-block overflow-hidden align-bottom text-lg font-medium leading-7 text-stone-950 md:text-2xl"
            >
              <span className="letter relative top-9 rotate-[15deg]">
                {word}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Initial;
