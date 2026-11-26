const GALLERY_DATA = [
  {
    id: 1,
    imgURLMob: "/img/mobile/image-gallery-milkbottles.jpg",
    imgURLDesk: "/img/desktop/image-gallery-milkbottles.jpg",
    alt: "The milkbottles on the blue background.",
  },
  {
    id: 2,
    imgURLMob: "/img/mobile/image-gallery-orange.jpg",
    imgURLDesk: "/img/desktop/image-gallery-orange.jpg",
    alt: "The orange on the plate.",
  },
  {
    id: 3,
    imgURLMob: "/img/mobile/image-gallery-cone.jpg",
    imgURLDesk: "/img/desktop/image-gallery-cone.jpg",
    alt: "The cone on the blue background.",
  },
  {
    id: 4,
    imgURLMob: "/img/mobile/image-gallery-sugar-cubes.jpg",
    imgURLDesk: "/img/desktop/image-gallery-sugarcubes.jpg",
    alt: "The ice cube structure on the red background.",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery-section"
      aria-describedby="gallery-heading"
      className="w-full max-w-360"
    >
      <h2 id="gallery-heading" className="sr-only">
        Gallery
      </h2>

      <div className="w-full grid grid-cols-2 lg:grid-cols-4">
        {GALLERY_DATA.map((image) => (
          <picture key={image.id} className="block w-full h-full">
            <source media="(min-width: 1440px)" srcSet={image.imgURLDesk} />
            <img
              src={image.imgURLMob}
              alt={image.alt}
              width={375}
              height={375}
              className="w-full object-cover block lg:w-90 lg:h-111.75"
            />
          </picture>
        ))}
      </div>
    </section>
  );
}
