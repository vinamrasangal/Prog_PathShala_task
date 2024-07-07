import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type FirstRowType = {
  className?: string;
  icon?: string;
  number?: string;
  label?: string;
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

const FirstRow: NextPage<FirstRowType> = ({
  className = "",
  icon,
  number,
  label,
}) => {
  const { resolvedTheme, mounted } = useThemeAndMounting();

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`flex-1 flex flex-row items-center justify-start gap-[16px] min-w-[166px] text-left text-9xl font-body-regular-body-3 ${className} 
      ${resolvedTheme === "dark" ? "text-neutral-100" : "text-neutral-d-grey"}
      transition-colors duration-200`}
    >
      <img
        className={`h-12 w-12 relative overflow-hidden shrink-0 
        ${resolvedTheme === "dark" ? "filter invert" : ""}
        transition-filter duration-200`}
        alt=""
        src={icon}
      />
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start">
        <b className="self-stretch relative leading-[36px] mq450:text-3xl mq450:leading-[29px]">
          {number}
        </b>
        <div className={`self-stretch relative text-base leading-[24px] 
        ${resolvedTheme === "dark" ? "text-neutral-400" : "text-neutral-grey"}
        transition-colors duration-200`}>
          {label}
        </div>
      </div>
    </div>
  );
};

export default FirstRow;