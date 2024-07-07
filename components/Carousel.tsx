import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useTheme } from "next-themes";

interface SlideContent {
  title: string;
  description: string;
  image: string;
}

interface CarouselProps {
  slides: SlideContent[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState<number>(0);
  const { theme } = useTheme();

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  if (!slides || slides.length === 0) {
    return null; 
  }

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full flex-none flex flex-row items-center justify-between py-24 px-36 box-border relative gap-[104px] max-w-full lg:flex-wrap mq825:gap-[52px] mq825:py-[62px] mq825:px-[72px] mq825:box-border mq450:gap-[26px] mq450:pl-5 mq450:pr-5 mq450:box-border ${
              theme === "dark" ? "bg-neutral-d-grey" : "bg-neutral-silver"
            }`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[427px] max-w-full mq825:gap-[16px] mq825:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[76px] font-semibold font-inherit mq825:text-32xl mq825:leading-[61px] mq450:text-19xl mq450:leading-[46px]">
                  <span>{slide.title.split(' ').slice(0, -2).join(' ') + ' '}</span>
                  <span className="text-brand-primary">{slide.title.split(' ').slice(-2).join(' ')}</span>
                </h1>
                <div
                  className={`self-stretch relative text-base leading-[24px] ${
                    theme === "dark" ? "text-neutral-silver" : "text-neutral-grey"
                  }`}
                >
                  {slide.description}
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-3.5 px-8 bg-brand-primary rounded flex flex-row items-center justify-center hover:bg-forestgreen-100">
                <div className="relative text-base leading-[24px] font-medium font-body-regular-body-3 text-neutral-white text-center inline-block min-w-[64px]">
                  Register
                </div>
              </button>
            </div>
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="max-w-[50%] h-auto object-contain"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-purple-600 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-purple-600 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-black rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;