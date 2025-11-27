"use client";
import Marquee from "react-fast-marquee";

export default function BrandList() {
  const brands = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full bg-[#F6F6F6] py-4">
      <Marquee
        direction="right"
        speed={100}
        gradient={false}
      >
        {/* Repeat the brands multiple times to ensure full coverage */}
        {[...Array(3)].map((_, repeatIndex) =>
          brands.map((brand, index) => (
            <div
              key={`${repeatIndex}-${index}`}
              className="flex items-center justify-center px-8 md:px-12 lg:px-16"
            >
              <img
                // className="h-10 md:h-12 lg:h-14 w-auto object-contain"
                src={`/assets/brands/${brand}.svg`}
                alt={`Brand ${brand}`}
              />
            </div>
          ))
        )}
      </Marquee>
    </div>
  );
}
