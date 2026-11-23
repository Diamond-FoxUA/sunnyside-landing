import { ComponentProps } from "react";

type LearnMoreBtnProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

export default function LearnMoreBtn({
  variant = "primary",
  ...props
}: LearnMoreBtnProps) {
  return (
    <button
      {...props}
      type="button"
      className={`relative isolate font-fraunces text-[15px] font-black leading-[165%] tracking-[0.07em] text-grey-950 uppercase px-[9.5px] cursor-pointer after:content-[''] after:absolute after:-z-10 after:bottom-0 after:left-0 after:w-full after:h-2.5 after:rounded-[28px] ${variant === "primary" ? "after:bg-yellow-500" : "after:bg-red-400"} after:opacity-25 hover:after:opacity-100 active:after:opacity-50 after:transition-opacity after:duration-300`}
    >
      Learn More
    </button>
  );
}
