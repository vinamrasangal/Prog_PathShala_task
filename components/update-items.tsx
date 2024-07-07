import type { NextPage } from "next";

export type UpdateItemsType = {
  className?: string;
  image18?: string;
  creatingStreamlinedSafegu?: string;
};

const UpdateItems: NextPage<UpdateItemsType> = ({
  className = "",
  image18,
  creatingStreamlinedSafegu,
}) => {
  return (
    <div
      className={`self-stretch w-[368px] shrink-0 flex flex-col items-center justify-start max-w-full text-center text-xl text-neutral-grey font-body-regular-body-3 ${className}`}
    >
      <img
        className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={image18}
      />
      <div className="w-[317px] shadow-[0px_8px_16px_rgba(171,_190,_209,_0.4)] rounded-lg bg-neutral-silver flex flex-col items-center justify-start p-4 box-border gap-[16px] z-[1] mt-[-96px]">
        <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
          {creatingStreamlinedSafegu}
        </div>
        <div className="flex flex-row items-center justify-center py-2 px-[77px] gap-[8px] text-left text-brand-primary mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="relative leading-[28px] font-semibold inline-block min-w-[99px] mq450:text-base mq450:leading-[22px]">
            Readmore
          </div>
          <img
            className="h-6 w-6 relative object-contain"
            alt=""
            src="/24arrows--directionsright-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateItems;
