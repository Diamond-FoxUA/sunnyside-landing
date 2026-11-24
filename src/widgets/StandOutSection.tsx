import LearnMoreBtn from "@/shared/ui/LearnMoreBtn";

export default function StandOutSection() {
  return (
    <section
      id="stand-out"
      aria-describedby="stand-out-heading"
      className="flex flex-col lg:grid lg:grid-cols-2 lg:place-items-center w-full max-w-360 items-center justify-center scroll-mt-24"
    >
      <div className="w-full">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="/img/desktop/image-stand-out.jpg"
          />

          <img
            src="/img/mobile/image-stand-out.jpg"
            alt="Red vineglass on the red background."
            className="w-full object-cover"
            fetchPriority="high"
          />
        </picture>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 justify-center items-center px-6 py-[67.5px] md:max-w-125">
        <h2
          id="stand-out-heading"
          className="font-fraunces text-[32px] font-black leading-[125%] text-grey-950 text-center md:max-w-70"
        >
          Stand out to the right audience
        </h2>
        <p className="text-[18px] font-semibold leading-[165%] text-center lg:text-start lg:max-w-110">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>

        <LearnMoreBtn variant="secondary" className="lg:self-start" />
      </div>
    </section>
  );
}
