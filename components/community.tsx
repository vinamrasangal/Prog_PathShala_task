import type { NextPage } from "next";
import UpdateItems from "./update-items";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type CommunityType = {
  className?: string;
};

// Custom hook for theme and mounting
const useThemeAndMounting = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { theme: mounted ? theme : undefined, resolvedTheme, mounted };
};

const Community: NextPage<CommunityType> = ({ className = "" }) => {
  const { resolvedTheme, mounted } = useThemeAndMounting();

  if (!mounted) {
    return null;
  }

  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 pb-[94.6px] pr-0 pl-px box-border max-w-full text-center text-17xl font-body-regular-body-3 mq825:pb-[61px] mq825:box-border ${className} 
      ${resolvedTheme === "dark" ? "bg-neutral-900 text-neutral-100" : "bg-neutral-white text-neutral-d-grey"} transition-colors duration-200`}
    >
      <div className="flex flex-col items-center justify-start gap-[16px] max-w-full">
        <div className="w-[1150px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[8px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
            Caring is the new marketing
          </h1>
          <div className={`w-[628px] relative text-base leading-[24px] inline-block max-w-full
          ${resolvedTheme === "dark" ? "text-neutral-300" : "text-neutral-grey"} transition-colors duration-200`}>
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </div>
        </div>
        <div className={`w-[1440px] h-[366px] overflow-x-auto shrink-0 flex flex-row items-center justify-between py-0 px-36 box-border gap-[20px] max-w-full text-xl 
        ${resolvedTheme === "dark" ? "text-neutral-300" : "text-neutral-grey"} transition-colors duration-200
        mq825:pl-9 mq825:pr-9 mq825:box-border mq1400:pl-[72px] mq1400:pr-[72px] mq1400:box-border`}>
          <UpdateItems
            image18="/image-18@2x.png"
            creatingStreamlinedSafegu="Creating Streamlined Safeguarding Processes with OneRen"
          />
          <UpdateItems
            image18="/image-19@2x.png"
            creatingStreamlinedSafegu="What are your safeguarding responsibilities and how can you manage them?"
          />
          <UpdateItems
            image18="/image-20@2x.png"
            creatingStreamlinedSafegu="Revamping the Membership Model with Triathlon Australia"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;