"use client";

import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import phrases from "./initialText";
import gsap from "gsap";

interface InitialProps {}

const Initial: FC<InitialProps> = ({}) => {
  const time = new Date().getHours();
  const app = useRef<HTMLDivElement>(null);
  const [render, isRendered] = useState<boolean>(false);

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
    let ctx = gsap.context(() => {
      gsap.from(".letter", {
        top: "10rem",
        stagger: 0.03,
        ease: "back.out(1.1)",
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
      className="absolute left-0 top-0 z-[999] flex h-full w-full items-center justify-center bg-[#F3DFC1]"
    >
      {render && (
        <p className="overflow-hidden text-lg font-medium text-stone-950">
          {randomPhrase.split("").map((letter, i) => (
            <span className="letter relative" key={i}>
              {letter}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default Initial;
