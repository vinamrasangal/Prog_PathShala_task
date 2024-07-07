import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type FrameComponentType = {
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

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const { resolvedTheme, mounted } = useThemeAndMounting();

  if (!mounted) {
    return null;
  }

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-12 pr-0 pl-px box-border max-w-full text-left text-base font-body-regular-body-3 mq450:pb-[31px] mq450:box-border ${className}
      ${resolvedTheme === "dark" ? "text-neutral-300 bg-neutral-900" : "text-neutral-grey bg-neutral-white"} transition-colors duration-200`}
    >
      <div className={`flex-1 flex flex-row items-center justify-start py-8 px-36 box-border gap-[78px] max-w-full lg:flex-wrap mq825:gap-[39px] mq825:pl-[72px] mq825:pr-[72px] mq825:box-border mq450:gap-[19px] mq450:py-[21px] mq450:px-5 mq450:box-border
      ${resolvedTheme === "dark" ? "bg-neutral-800" : "bg-neutral-silver"} transition-colors duration-200`}>
        <div className="h-[326px] w-[326px] relative rounded-lg min-h-[326px] max-w-full flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[8px] [transform:scale(1.098)] lg:flex-1"
            loading="lazy"
            alt=""
            src="/image-9@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[486px] max-w-full mq825:gap-[16px] mq825:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch relative leading-[24px] font-medium">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl text-brand-primary">
              <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                Tim Smith
              </div>
              <div className={`self-stretch relative text-base leading-[24px] ${
                resolvedTheme === "dark" ? "text-neutral-400" : "text-neutral-l-grey"
              } transition-colors duration-200`}>
                British Dragon Boat Racing Association
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[32px] max-w-full text-xl text-brand-primary mq825:flex-wrap mq825:gap-[16px]">
            <div className="w-[493px] flex flex-row items-center justify-between max-w-full gap-[20px] mq825:flex-wrap mq825:justify-center">
              <img
                className="h-12 w-12 relative rounded-lg min-h-[48px]"
                alt=""
                src="/logo-7.svg"
              />
              <img
                className="h-12 w-12 relative rounded-lg min-h-[48px]"
                alt=""
                src="/logo-8.svg"
              />
              <img
                className="h-12 w-12 relative rounded-lg min-h-[48px]"
                alt=""
                src="/logo-9.svg"
              />
              <img
                className="h-12 w-12 relative rounded-lg min-h-[48px]"
                alt=""
                src="/logo-10.svg"
              />
              <img
                className="h-12 w-12 relative rounded-lg min-h-[48px]"
                alt=""
                src="/logo-11.svg"
              />
              <img
                className="h-12 w-12 relative rounded-lg min-h-[48px]"
                alt=""
                src="/logo-12.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-center justify-start py-2 pr-0 pl-2 box-border gap-[8px] min-w-[145px]">
              <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                Meet all customers
              </div>
              <img
                className="h-6 w-6 relative object-contain"
                alt=""
                src="/24arrows--directionsright@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;