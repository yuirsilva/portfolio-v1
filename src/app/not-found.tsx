import { display } from "@/font/font";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
  return (
    <div className="container pt-28">
      <h1
        className={cn(
          display.className,
          "scroll-m-20 text-center text-5xl font-medium tracking-tight lg:text-8xl",
        )}
      >
        404
      </h1>
    </div>
  );
};

export default NotFound;
