import LearnMoreBtn from "@/shared/ui/LearnMoreBtn";

export default function TransformSection() {
  return (
    <section
      id="transform"
      aria-describedby="transform-heading"
      className="flex flex-col lg:grid lg:grid-cols-2 lg:place-items-center w-full max-w-360 items-center justify-center scroll-mt-22 md:scroll-mt-28 lg:scroll-mt-24"
      data-header-theme="yellow"
    >
      <div className="w-full lg:order-last">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="/img/desktop/image-transform.jpg"
          />

          <img
            src="/img/mobile/image-transform.jpg"
            alt="An egg on the yellow background."
            className="w-full object-cover"
            fetchPriority="high"
          />
        </picture>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 justify-center items-center px-6 md:[158.5px] py-[67.5px] md:max-w-125">
        <h2
          id="transform-heading"
          className="font-fraunces text-[32px] font-black leading-[125%] text-grey-950 text-center md:max-w-70"
        >
          Transform your brand
        </h2>
        <p className="text-[18px] font-semibold leading-[165%] text-center lg:text-start lg:max-w-110">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>

        <LearnMoreBtn className="lg:self-start" />
      </div>
    </section>
  );
}
