import Initial from "@/components/homepage/initial";
import World from "@/components/homepage/world";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <Initial />
      <div className="absolute left-0 top-0 h-full w-full">
        <World />
      </div>
    </div>
  );
};

export default page;
