import type { NextPage } from "next";

export type CompanyInfoType = {
  className?: string;
};

const CompanyInfo: NextPage<CompanyInfoType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[350px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[40px] min-w-[350px] max-w-full text-left text-sm text-neutral-silver font-body-regular-body-3 mq825:min-w-full mq450:gap-[20px] mq1400:flex-1 ${className}`}
    >
      <div className="w-[191px] flex flex-row items-start justify-start gap-[9.9px]">
        <img
          className="self-stretch w-[43.3px] relative max-h-full min-h-[30px] shrink-0"
          alt=""
          src="/icon-8.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[2.1px] px-0 pb-0">
          <img
            className="self-stretch h-[25.5px] relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/nexcent-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative leading-[20px]">
          Copyright © 2020 Nexcent ltd.
        </div>
        <div className="self-stretch relative leading-[20px]">
          All rights reserved
        </div>
      </div>
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[16px]">
        <img
          className="h-8 w-8 relative min-h-[32px]"
          loading="lazy"
          alt=""
          src="/social-icons.svg"
        />
        <img
          className="h-8 w-8 relative min-h-[32px]"
          alt=""
          src="/social-icons-1.svg"
        />
        <img
          className="h-8 w-8 relative min-h-[32px]"
          alt=""
          src="/social-icons-2.svg"
        />
        <img
          className="h-8 w-8 relative min-h-[32px]"
          alt=""
          src="/social-icons-3.svg"
        />
      </div>
    </div>
  );
};

export default CompanyInfo;
