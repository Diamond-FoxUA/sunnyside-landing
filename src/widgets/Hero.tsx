import Icon from "@/shared/ui/Icon";

export default function Hero() {
  return (
    <section
      id="hero-section"
      aria-describedby="hero-heading"
      data-header-theme="blue"
      className="w-full max-w-360 flex justify-center items-center px-6 md:px-10 pt-34 md:pt-38.25 lg:pt-46 pb-35 md:pb-81.5 bg-[url('/img/mobile/image-header.jpg')] md:bg-[url('/img/desktop/image-header.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="flex flex-col justify-center items-center gap-12 md:gap-18 lg:gap-24 max-w-103.5 lg:max-w-auto lg:text-nowrap">
        <h1
          id="hero-heading"
          className="font-fraunces text-[42px] md:text-[56px] font-black leading-[125%] tracking-[0.14em] md:tracking-[0.16em] text-center uppercase text-white"
        >
          We are creatives
        </h1>
        <a
          href="#transform"
          className="hover:opacity-50 px-5 active:opacity-25 transition-opacity duration-300"
        >
          <Icon
            iconName="icon-arrow-down"
            width={30}
            height={107.48}
            className="fill-transparent stroke-white"
          />
        </a>
      </div>
    </section>
  );
}
