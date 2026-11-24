const PHOTOGRAPHY_SECTION_DATA = [
  {
    id: "design-section",
    label: "design",
    heading: "Graphic Design",
    paragraph:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    imgURLMob: "/img/mobile/image-graphic-design.jpg",
    imgURLDesk: "/img/desktop/image-graphic-design.jpg",
    alt: "A cherry on the mint background.",
  },
  {
    id: "photography-section",
    label: "photography",
    heading: "Photography",
    paragraph:
      "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    imgURLMob: "/img/mobile/image-photography.jpg",
    imgURLDesk: "/img/desktop/image-photography.jpg",
    alt: "An orange on the blue background.",
  },
];

export default function PhotographySection() {
  return (
    <div className="w-full max-w-360 flex flex-col lg:grid lg:grid-cols-2">
      {PHOTOGRAPHY_SECTION_DATA.map((data) => (
        <section
          data-header-theme={data.label === "design" ? "green" : null}
          key={data.id}
          id={data.id}
          aria-describedby={`${data.label}-heading`}
          className={`w-full flex flex-col items-center justify-end gap-8 min-h-150 px-4.5 md:px-6 pb-14 ${data.label === "design" ? "bg-[url('/img/mobile/image-graphic-design.jpg')] md:bg-[url('/img/desktop/image-graphic-design.jpg')]" : "bg-[url('/img/mobile/image-photography.jpg')] md:bg-[url('/img/desktop/image-photography.jpg')]"} bg-center bg-cover`}
        >
          <h2
            id={`${data.label}-heading`}
            className={`max-w-90 font-fraunces text-[28px] ${data.label === "design" ? "text-green-800" : "text-blue-950 opacity-75"} text-center font-black leading-[125%]`}
          >
            {data.heading}
          </h2>
          <p
            className={`max-w-90 text-[16px] ${data.label === "design" ? "text-green-800" : "text-blue-800"} text-center font-semibold leading-[170%]`}
          >
            {data.paragraph}
          </p>
        </section>
      ))}
    </div>
  );
}
