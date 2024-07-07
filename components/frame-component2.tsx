import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Use useEffect to handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component hasn't mounted yet, return null to prevent rendering mismatch
  if (!mounted) return null;

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[42px] box-border max-w-full text-center text-9xl font-body-regular-body-3 transition-colors duration-200 ${
        theme === "dark" ? "bg-neutral-900 text-neutral-100" : "bg-neutral-100 text-neutral-d-grey"
      } ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between py-0 px-36 box-border max-w-full gap-[20px] mq825:pl-[72px] mq825:pr-[72px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1400:flex-wrap">
        <div className="w-[299px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
          <div className={`self-stretch shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] rounded-lg flex flex-col items-start justify-start py-6 px-4 gap-[16px] ${
            theme === "dark" ? "bg-neutral-800" : "bg-neutral-white"
          }`}>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="w-[65px] flex flex-row items-start justify-start">
                <div className="h-14 flex-1 relative">
                  <div className="absolute top-[56px] left-[65px] rounded-tl-lg rounded-tr-8xs rounded-br-3xs rounded-bl-8xs bg-honeydew w-[50px] h-[49px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
                  <img
                    className={`absolute top-[0px] left-[0px] w-12 h-12 z-[1] ${
                      theme === "dark" ? "filter invert" : ""
                    }`}
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                Membership Organisations
              </h2>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-2 text-sm">
                <div className={`flex-1 relative leading-[20px] ${
                  theme === "dark" ? "text-neutral-400" : "text-neutral-grey"
                }`}>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-[299px] shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] rounded-lg flex flex-col items-start justify-start py-6 px-4 box-border gap-[16px] ${
          theme === "dark" ? "bg-neutral-800" : "bg-neutral-white"
        }`}>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <img className={`h-14 w-[65px] relative ${
              theme === "dark" ? "filter invert" : ""
            }`} alt="" src="/icon-2.svg" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
              National Associations
            </h2>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[13px] text-sm">
              <div className={`flex-1 relative leading-[20px] ${
                theme === "dark" ? "text-neutral-400" : "text-neutral-grey"
              }`}>
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
        </div>
        <div className="w-[299px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
          <div className={`self-stretch shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] rounded-lg flex flex-col items-start justify-start p-6 gap-[16px] ${
            theme === "dark" ? "bg-neutral-800" : "bg-neutral-white"
          }`}>
            <div className="self-stretch flex flex-row items-start justify-center">
              <img
                className={`h-14 w-[65px] relative ${
                  theme === "dark" ? "filter invert" : ""
                }`}
                alt=""
                src="/icon-3.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5">
                <h2 className="m-0 flex-1 relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                  Clubs And Groups
                </h2>
              </div>
              <div className={`self-stretch relative text-sm leading-[20px] ${
                theme === "dark" ? "text-neutral-400" : "text-neutral-grey"
              }`}>
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;