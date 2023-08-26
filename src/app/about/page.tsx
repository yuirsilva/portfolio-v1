import { display } from "@/font/font";
import { Metadata } from "next";
import { FC } from "react";

interface pageProps {}

export const metadata: Metadata = {
  title: "Yuri Silva — About",
  description: "Some words about me.",
};

const page: FC<pageProps> = ({}) => {
  return (
    <div className="container pb-12 pt-28">
      <article className="prose prose-base prose-neutral ml-auto mr-auto flex max-w-5xl flex-col gap-10 pb-14 dark:prose-invert md:prose-xl prose-headings:text-xl prose-headings:font-medium prose-p:m-0 prose-a:decoration-1 prose-a:underline-offset-4 md:pb-12 lg:pb-1">
        <h1 className={display.className}>Yuri Silva</h1>
        <div className="flex flex-col gap-2">
          <p>
            Front end dev. Enjoying the satisfaction of seeing my websites come
            to life. Currently in high school.
          </p>
          <p>
            I&#8217;m currently building <a href="CHANGE_THIS">Sihat</a>, an
            artificial intelligence platform for helping radiologists.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            What captivates me most in life is art: the expression of emotions,
            ideas, and vivid interpretations of the boundless realm of human
            imagination.
          </p>
          <p className="supports-[hanging-punctuation:first]:first -indent-3 italic">
            “The feeling of your fingers hovering over the keyboard, wondering
            how to start your message.”
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Please don&rsquo;t hesitate to reach out to me, whether it&rsquo;s
            through{" "}
            <a target="_blank" href="https://twitter.com/yidxte">
              Twitter
            </a>{" "}
            or <a href="mailto:yuxipersonal@gmail.com">email</a>.{" "}
          </p>
          <p>
            You can check my{" "}
            <a target="_blank" href="https://github.com/yuirsilva">
              GitHub
            </a>{" "}
            too.
          </p>
        </div>
      </article>
    </div>
  );
};

export default page;
