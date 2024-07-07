import type { NextPage } from "next";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import UnlockOne from "../components/unlock-one";
import FrameComponent1 from "../components/frame-component1";
import UnlockTwo from "../components/unlock-two";
import FrameComponent from "../components/frame-component";
import Community from "../components/community";
import CompanyInfo from "../components/company-info";
import Links from "../components/links";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-neutral-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[8px] max-w-full text-center text-17xl text-neutral-d-grey font-body-regular-body-3">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 w-[542px] relative text-inherit leading-[44px] font-semibold font-inherit inline-block shrink-0 max-w-full mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
            Manage your entire community in a single system
          </h1>
        </div>
        <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
          Who is Nextcent suitable for?
        </div>
      </section>
      <FrameComponent2 />
      <UnlockOne />
      <FrameComponent1 />
      <UnlockTwo />
      <FrameComponent />
      <Community />
      <section className="self-stretch bg-neutral-silver flex flex-col items-center justify-start py-8 px-5 box-border gap-[32px] max-w-full text-center text-45xl text-neutral-black font-body-regular-body-3 mq450:gap-[16px]">
        <h1 className="m-0 w-[887px] relative text-inherit leading-[76px] font-semibold font-inherit inline-block max-w-full mq825:text-32xl mq825:leading-[61px] mq450:text-19xl mq450:leading-[46px]">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <div className="w-[888px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
          <button className="cursor-pointer [border:none] py-3.5 px-8 bg-brand-primary rounded flex flex-row items-start justify-start gap-[8px]">
            <div className="relative text-base leading-[24px] font-medium font-body-regular-body-3 text-neutral-white text-center inline-block min-w-[90px]">
              Get a Demo
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-4 h-4 relative object-contain"
                alt=""
                src="/16arrows--directionsright@2x.png"
              />
            </div>
          </button>
        </div>
      </section>
      <footer className="self-stretch bg-neutral-black flex flex-row items-start justify-between py-16 px-[165px] box-border max-w-full gap-[20px] z-[1] mq825:pl-[82px] mq825:pr-[82px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1400:flex-wrap">
        <CompanyInfo />
        <Links />
      </footer>
    </div>
  );
};

export default LandingPage;
