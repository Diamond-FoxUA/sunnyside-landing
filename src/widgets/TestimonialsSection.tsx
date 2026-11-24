import Image from "next/image";

const TESTIMONIALS_DATA = [
  {
    id: 1,
    avatarURL: "/img/avatars/image-emily.jpg",
    imgSize: 72,
    paragraph:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    job: "Marketing Director",
  },
  {
    id: 2,
    avatarURL: "/img/avatars/image-thomas.jpg",
    imgSize: 72,
    paragraph:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    job: "Chief Operating Officer",
  },
  {
    id: 3,
    avatarURL: "/img/avatars/image-jennie.jpg",
    imgSize: 72,
    paragraph:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    job: "Business Owner",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials-section"
      aria-describedby="testimonials-heading"
      className="text-center flex flex-col justify-center items-center gap-14 md:gap-20 w-full max-w-360 py-13.75 md:py-[71.5px] px-6 md:px-20.25 lg:p-40.5"
    >
      <h2
        id="testimonials-heading"
        className="font-fraunces text-[19px] font-black leading-[125%] tracking-[0.2em] text-grey-400"
      >
        CLIENT TESTIMONIALS
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-14 lg:gap-8">
        {TESTIMONIALS_DATA.map((t) => (
          <div
            key={t.id}
            className="flex flex-col justify-center items-center gap-8 lg:gap-14.5 lg:max-w-87"
          >
            <Image
              src={t.avatarURL}
              width={t.imgSize}
              height={t.imgSize}
              alt="Avatar"
              className="mb-6.5 rounded-full lg:mb-0"
            />
            <p className="text-[18px] font-semibold leading-[165%] text-grey-600 lg:pb-3.5">
              {t.paragraph}
            </p>
            <div>
              <p className="font-fraunces text-[18px] font-black leading-[125%] text-grey-950">
                {t.name}
              </p>
              <p className="text-[14px] font-semibold leading-[180%] text-grey-400 pt-2">
                {t.job}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
