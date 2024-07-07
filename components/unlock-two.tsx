import type { NextPage } from "next";
import { useTheme } from "next-themes";

export type UnlockTwoType = {
  className?: string;
};

const UnlockTwo: NextPage<UnlockTwoType> = ({ className = "" }) => {
  const { theme } = useTheme();

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-12 pr-0 pl-px box-border max-w-full text-left text-4xs-1 font-montserrat mq825:pb-[31px] mq825:box-border ${
        theme === "dark" ? "text-neutral-white bg-neutral-d-grey" : "text-gainsboro-100 bg-neutral-white"
      } ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-36 box-border gap-[49.5px] max-w-full mq825:gap-[25px] mq825:pl-9 mq825:pr-9 mq825:box-border mq1400:flex-wrap mq1400:pl-[72px] mq1400:pr-[72px] mq1400:box-border">
        <div className="h-[433.4px] w-[441.5px] relative min-w-[441.5px] max-w-full mq825:min-w-full mq1400:flex-1">
          <img
            className="absolute top-[432.9px] left-[55.8px] w-[320.6px] h-[0.5px]"
            alt=""
            src="/floor.svg"
          />
          <div className="absolute top-[0px] left-[0px] w-full h-[380.6px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full"
              alt=""
              src="/backgroundcomplete.svg"
            />
            <img
              className="absolute top-[196.5px] left-[287.4px] w-[85.9px] h-[147.8px] z-[2]"
              loading="lazy"
              alt=""
              src="/plant.svg"
            />
            <img
              className="absolute top-[4.8px] left-[282.4px] w-[86.1px] h-[103px] z-[2]"
              loading="lazy"
              alt=""
              src="/padlock.svg"
            />
            <div className="absolute top-[50.5px] left-[163px] w-[149.3px] h-[304.3px]">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                alt=""
                src="/vector.svg"
              />
              <div className="absolute w-[calc(100%_-_13.8px)] top-[9px] right-[7px] left-[6.8px] h-[284.5px]">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[4]"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className="absolute top-[226.6px] left-[28px] w-[121.4px] h-[109.4px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[79.6px] h-[24.2px] z-[5]"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div className="absolute top-[6px] left-[22.2px] inline-block w-[99.2px] h-[103.4px] z-[6]">
                    SING UP
                  </div>
                </div>
                <img
                  className="absolute top-[74.5px] left-[18.1px] w-[26.6px] h-[5px] object-contain z-[5]"
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className="absolute top-[74.5px] left-[18.1px] w-[26.6px] h-[5px] object-contain z-[6]"
                  alt=""
                  src="/vector-4.svg"
                />
                <div className="absolute top-[86.4px] left-[17.8px] w-[106.7px] h-[18.2px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[5]"
                    alt=""
                    src="/vector-5.svg"
                  />
                  <div className="absolute top-[5.8px] left-[8.3px] bg-brand-primary w-[48.6px] h-[4.6px] z-[6]">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full hidden"
                      alt=""
                      src="/vector1.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full z-[7]"
                      alt=""
                      src="/vector-6.svg"
                    />
                  </div>
                </div>
                <div className="absolute top-[131px] left-[17.6px] w-[106.7px] h-[18.2px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[5]"
                    alt=""
                    src="/vector-7.svg"
                  />
                  <img
                    className="absolute top-[6.8px] left-[7.5px] w-[48.6px] h-[4.8px] object-contain z-[6]"
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className="absolute top-[6.8px] left-[7.5px] w-[48.6px] h-[4.8px] object-contain z-[7]"
                    alt=""
                    src="/vector-9.svg"
                  />
                </div>
                <div className="absolute top-[177.3px] left-[17.4px] w-[106.7px] h-[18.2px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[5]"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <div className="absolute top-[7.5px] left-[7.8px] w-[57px] h-[4.8px]">
                    <img
                      className="absolute top-[0.2px] left-[39.6px] w-[4.3px] h-[4.6px] z-[6]"
                      alt=""
                      src="/vector-11.svg"
                    />
                    <img
                      className="absolute top-[0.2px] left-[46.1px] w-[4.3px] h-[4.3px] z-[6]"
                      alt=""
                      src="/vector-12.svg"
                    />
                    <img
                      className="absolute top-[0.3px] left-[52.7px] w-[4.3px] h-[4.3px] z-[6]"
                      alt=""
                      src="/vector-13.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-[56.9px] h-[4.7px]"
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                </div>
                <div className="absolute top-[30.5px] left-[64.6px] w-[13.7px] h-[14.9px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[5]"
                    alt=""
                    src="/vector-14.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[6]"
                    alt=""
                    src="/vector-15.svg"
                  />
                </div>
                <img
                  className="absolute top-[49.2px] left-[46.3px] w-[48.8px] h-[6.1px] object-contain z-[5]"
                  alt=""
                  src="/vector-16.svg"
                />
                <img
                  className="absolute top-[49.2px] left-[46.3px] w-[48.8px] h-[6.1px] object-contain z-[6]"
                  alt=""
                  src="/vector-17.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[87.7px] left-[48.1px] w-[320.3px] h-[298.4px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full"
              alt=""
              src="/backgroundsimple.svg"
            />
            <img
              className="absolute top-[51.4px] left-[10.9px] w-[53.3px] h-[60.5px] z-[2]"
              alt=""
              src="/speechbubble.svg"
            />
          </div>
          <div className="absolute top-[145.3px] left-[85.6px] w-[148px] h-[287.7px]">
            <img
              className="absolute top-[33.2px] left-[102.1px] w-[26.6px] h-[5px] object-contain z-[5]"
              alt=""
              src="/vector-18.svg"
            />
            <img
              className="absolute top-[33.2px] left-[102.1px] w-[26.6px] h-[5px] object-contain z-[6]"
              alt=""
              src="/vector-19.svg"
            />
            <img
              className="absolute top-[79.7px] left-[101.9px] w-[26.6px] h-[5px] object-contain z-[5]"
              alt=""
              src="/vector-20.svg"
            />
            <img
              className="absolute top-[79.7px] left-[101.9px] w-[26.6px] h-[5px] object-contain z-[6]"
              alt=""
              src="/vector-21.svg"
            />
            <img
              className="absolute top-[99px] left-[109.4px] w-[4.3px] h-[4.3px] z-[6]"
              alt=""
              src="/vector-22.svg"
            />
            <img
              className="absolute top-[99px] left-[116px] w-[4.3px] h-[4.6px] z-[6]"
              alt=""
              src="/vector-23.svg"
            />
            <img
              className="absolute top-[99.1px] left-[122.6px] w-[4.3px] h-[4.3px] z-[6]"
              alt=""
              src="/vector-24.svg"
            />
            <img
              className="absolute top-[99.1px] left-[129.2px] w-[4.3px] h-[4.3px] z-[6]"
              alt=""
              src="/vector-25.svg"
            />
            <img
              className="absolute top-[99.1px] left-[135.8px] w-[4.3px] h-[4.3px] z-[6]"
              alt=""
              src="/vector-26.svg"
            />
            <img
              className="absolute top-[99.2px] left-[142.4px] w-[4.3px] h-[4.3px] z-[6]"
              alt=""
              src="/vector-27.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full"
              alt=""
              src="/character.svg"
            />
          </div>
        </div>
        <div className="w-[601px] flex flex-col items-start justify-start pt-[62.7px] px-0 pb-0 box-border min-w-[601px] max-w-full text-17xl font-body-regular-body-3 lg:min-w-full mq450:pt-[41px] mq450:box-border mq1400:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq825:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[136px] gap-[16px] mq450:pb-[88px] mq450:box-border">
              <h1 className={`m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px] ${
                theme === "dark" ? "text-neutral-white" : "text-neutral-d-grey"
              }`}>
                How to design your site footer like we did
              </h1>
              <div className={`self-stretch relative text-sm leading-[20px] ${
                theme === "dark" ? "text-neutral-silver" : "text-neutral-grey"
              }`}>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-3.5 px-8 bg-brand-primary rounded flex flex-row items-start justify-start whitespace-nowrap hover:bg-forestgreen-100">
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

export default UnlockTwo;