import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
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
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full text-center text-17xl font-body-regular-body-3 transition-colors duration-200 ${
        theme === "dark" ? "bg-neutral-900 text-neutral-100" : "bg-neutral-100 text-neutral-900"
      } ${className}`}
    >
      <div className="w-[1152px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
              Our Clients
            </h1>
            <div className={`self-stretch relative text-base leading-[24px] ${
              theme === "dark" ? "text-neutral-400" : "text-neutral-600"
            }`}>
              We have been working with some Fortune 500+ clients
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between py-[25px] px-0 gap-[20px] mq825:flex-wrap mq825:justify-center">
          <img
            className={`h-12 w-12 relative rounded-lg min-h-[48px] ${
              theme === "dark" ? "filter invert" : ""
            }`}
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
          <img
            className={`h-12 w-12 relative rounded-lg min-h-[48px] ${
              theme === "dark" ? "filter invert" : ""
            }`}
            alt=""
            src="/logo-1.svg"
          />
          <img
            className={`h-12 w-12 relative rounded-lg min-h-[48px] ${
              theme === "dark" ? "filter invert" : ""
            }`}
            alt=""
            src="/logo-2.svg"
          />
          <img
            className={`h-12 w-12 relative rounded-lg min-h-[48px] ${
              theme === "dark" ? "filter invert" : ""
            }`}
            alt=""
            src="/logo-3.svg"
          />
          <img
            className={`h-12 w-12 relative rounded-lg min-h-[48px] ${
              theme === "dark" ? "filter invert" : ""
            }`}
            alt=""
            src="/logo-4.svg"
          />
          <img
            className={`h-12 w-12 relative rounded-lg min-h-[48px] ${
              theme === "dark" ? "filter invert" : ""
            }`}
            alt=""
            src="/logo-5.svg"
          />
          <img
            className={`h-12 w-12 relative rounded-lg min-h-[48px] ${
              theme === "dark" ? "filter invert" : ""
            }`}
            alt=""
            src="/logo-2.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;