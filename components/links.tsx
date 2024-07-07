import type { NextPage } from "next";

export type LinksType = {
  className?: string;
};

const Links: NextPage<LinksType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[635px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[30px] min-w-[635px] max-w-full text-left text-xl text-neutral-white font-body-regular-body-3 lg:min-w-full mq825:flex-wrap mq1400:flex-1 ${className}`}
    >
      <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
          Company
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-silver">
          <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
            About us
          </a>
          <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
            Blog
          </a>
          <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
            Contact us
          </a>
          <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
            Pricing
          </a>
          <div className="self-stretch relative leading-[20px]">
            Testimonials
          </div>
        </div>
      </div>
      <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
          Support
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-silver">
          <div className="self-stretch relative leading-[20px]">
            Help center
          </div>
          <div className="self-stretch relative leading-[20px]">
            Terms of service
          </div>
          <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
            Legal
          </a>
          <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
            Privacy policy
          </a>
          <div className="self-stretch relative leading-[20px]">Status</div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px] min-w-[166px]">
        <div className="w-40 relative leading-[28px] font-semibold inline-block mq450:text-base mq450:leading-[22px]">
          Stay up to date
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-[9px] px-3 pb-[11px] relative gap-[20px]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-gray" />
          <input
            className="w-[126px] [border:none] [outline:none] font-body-regular-body-3 text-sm bg-[transparent] h-5 relative leading-[20px] text-text-gray-300 text-left inline-block p-0 z-[1]"
            placeholder="Your email address"
            type="text"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/essential-icons--send.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
