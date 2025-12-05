import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const CarouselSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const cards = [
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet",
      image: "/assets/blogs/img1.svg",
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet",
      image: "/assets/blogs/img2.svg",
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet",
      image: "/assets/blogs/img3.svg",
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet",
      image: "/assets/blogs/img1.svg",
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet",
      image: "/assets/blogs/img2.svg",
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet",
      image: "/assets/blogs/img3.svg",
    },
  ];

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {cards.map((card, index) => {
              const isActive = index === selectedIndex;

              return (
                <div
                  key={index}
                  className="embla__slide shrink-0 px-2 md:px-4"
                  style={{
                    flex: "0 0 85%",
                    minWidth: 0,
                  }}
                >
                  <div
                    className={`
                      relative rounded-2xl overflow-hidden transition-all duration-500 ease-out border border-[#E3E3E3]
                      ${isActive ? "scale-95 shadow-xl" : "scale-90 opacity-90"}
                    `}
                    style={{ minHeight: "500px" }}
                  >
                    <div className="relative h-1/2 overflow-hidden shrink-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="relative p-5 flex flex-col">
                      <div>
                        <h2 className="font-bold text-[#254055] mb-3">
                          {card.title}
                        </h2>

                        <p className="text-[#4D4D4D] text-lg">
                          {card.description}
                        </p>
                      </div>

                      <div className="mt-8">
                        <Link
                          href="#"
                          className="hover:underline text-[#81C713]"
                        >
                          Lees meer
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`
                h-2 rounded-xs transition-all duration-300
                ${
                  index === selectedIndex
                    ? "w-8 bg-[#8DD1BA]"
                    : "w-2 bg-[#D0D0D0] hover:bg-gray-400"
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .embla__slide {
            flex: 0 0 33.333% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CarouselSlider;
