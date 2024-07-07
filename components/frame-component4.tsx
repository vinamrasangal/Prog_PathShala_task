import type { NextPage } from "next";
import Carousel from "./Carousel";
import { useTheme } from "next-themes";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  const { theme } = useTheme();

  const slides = [
    {
      title: "Lessons and insights from 8 years",
      description: "Where to grow your business as a photographer: site or social media?",
      image: "/illustration.svg",
    },
    {
      title: "Mastering the Art of Digital Marketing",
      description: "Discover the secrets to effective online promotion and customer engagement.",
      image: "https://i.ibb.co/ncrXc2V/1.png",
    },
    {
      title: "Building a Sustainable Business Model",
      description: "Learn how to create a long-lasting and profitable business structure.",
      image: "https://i.ibb.co/B3s7v4h/2.png",
    },
  ];

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-left text-45xl font-body-regular-body-3 ${
        theme === "dark" ? "text-neutral-white bg-neutral-d-grey" : "text-neutral-d-grey bg-neutral-white"
      } ${className}`}
    >
      <Carousel slides={slides} />
    </section>
  );
};

export default FrameComponent4;