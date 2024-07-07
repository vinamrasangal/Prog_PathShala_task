import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import FirstRow from "./first-row";

const FrameComponent1 = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [membersCount, setMembersCount] = useState(0);
  const [clubsCount, setClubsCount] = useState(0);
  const [eventBookingsCount, setEventBookingsCount] = useState(0);
  const [paymentsCount, setPaymentsCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    const animateCountUp = (targetValue: number, setterFunction: React.Dispatch<React.SetStateAction<number>>) => {
      let currentValue = 0;
      const increment = 1;
      const delay = 1000;

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(interval);
        }
        setterFunction(currentValue);
      }, delay);
    };

    animateCountUp(2245341, setMembersCount);
    animateCountUp(46328, setClubsCount);
    animateCountUp(828867, setEventBookingsCount);
    animateCountUp(1926436, setPaymentsCount);

    return () => {
    
    };
  }, []);

  if (!mounted) return null;

  return (
    <section className={`self-stretch flex flex-row items-start justify-start pt-0 pb-12 pr-0 pl-px box-border max-w-full text-left text-17xl font-body-regular-body-3 transition-colors duration-200 ${
      theme === "dark" ? "text-neutral-100" : "text-neutral-d-grey"
    }`}>
      <div className={`flex-1 flex flex-row items-center justify-between py-16 px-36 box-border max-w-full gap-[20px] ${
        theme === "dark" ? "bg-neutral-800" : "bg-neutral-silver"
      }`}>
        <div className="w-[540px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px] max-w-full">
          <div className="w-[408px] overflow-hidden flex flex-col items-start justify-start max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit">
              <span>{`Helping a local `}</span>
              <span className="text-brand-primary">
                business reinvent itself
              </span>
            </h1>
          </div>
          <div className={`self-stretch relative text-base leading-[24px] ${
            theme === "dark" ? "text-neutral-300" : "text-text-gray-900"
          }`}>
            We reached here with our hard work and dedication
          </div>
        </div>
        <div className="w-[540px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[40px] max-w-full text-9xl">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[30px]">
            <FirstRow icon="/icon-4.svg" number={membersCount.toLocaleString()} label="Members" />
            <FirstRow icon="/icon-5.svg" number={clubsCount.toLocaleString()} label="Clubs" />
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[30px]">
            <FirstRow icon="/icon-6.svg" number={eventBookingsCount.toLocaleString()} label="Event Bookings" />
            <FirstRow icon="/icon-7.svg" number={paymentsCount.toLocaleString()} label="Payments" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;