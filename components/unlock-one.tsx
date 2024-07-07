import type { NextPage } from "next";
import { useTheme } from "next-themes";

export type UnlockOneType = {
  className?: string;
};

const UnlockOne: NextPage<UnlockOneType> = ({ className = "" }) => {
  const { theme } = useTheme();

  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 pb-12 pr-0 pl-px box-border max-w-full text-left text-17xl font-body-regular-body-3 ${
        theme === "dark" ? "text-neutral-white bg-neutral-d-grey" : "text-neutral-d-grey bg-neutral-white"
      } ${className}`}
    >
      <div className="overflow-x-auto flex flex-row items-start justify-start max-w-full">
        <div className={`w-[1440px] shrink-0 flex flex-row items-center justify-between py-0 px-36 box-border max-w-full gap-[20px] mq825:pl-9 mq825:pr-9 mq825:box-border mq1400:flex-wrap mq1400:pl-[72px] mq1400:pr-[72px] mq1400:box-border ${
          theme === "dark" ? "bg-neutral-d-grey" : "bg-neutral-white"
        }`}>
          <img
            className="w-[442px] relative max-h-full max-w-full mq1400:flex-1"
            loading="lazy"
            alt=""
            src="/frame-35.svg"
          />
          <div className="w-[661px] flex flex-col items-start justify-start py-5 pr-[60px] pl-0 box-border gap-[32px] min-w-[661px] max-w-full lg:min-w-full mq825:gap-[16px] mq1400:flex-1 mq1400:pr-0 mq1400:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
                The unseen of spending three years at Pixelgrade
              </h1>
              <div className={`self-stretch relative text-sm leading-[20px] ${
                theme === "dark" ? "text-neutral-silver" : "text-neutral-grey"
              }`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-3.5 px-8 bg-brand-primary rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-forestgreen-100">
              <div className="relative text-base leading-[24px] font-medium font-body-regular-body-3 text-neutral-white text-center inline-block min-w-[87px]">
                Learn More
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockOne;