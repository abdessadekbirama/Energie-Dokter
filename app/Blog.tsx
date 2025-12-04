"use client";

import { useState, useEffect, useRef } from "react";
import SectionTitle from "./components/SectionTitle";

interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

// Sample blog card data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Zonnepanelen: De toekomst van energie",
    subtitle: "Ontdek hoe zonnepanelen uw energierekening kunnen verlagen",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Energiebesparing in huis",
    subtitle: "Praktische tips om uw energieverbruik te verminderen",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Groene energie subsidies 2024",
    subtitle: "Maak optimaal gebruik van beschikbare subsidies",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
  },
];

interface BlogCardProps {
  post: BlogPost;
  isActive: boolean;
}

function BlogCard({ post, isActive }: BlogCardProps) {
  return (
    <div
      className={`transition-all duration-500 ease-out h-full ${
        isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"
      }`}
    >
      <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="relative h-1/2 overflow-hidden shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 pb-4 flex flex-col">
          <h3 className="font-bold text-[#254055] my-2 text-sm">
            {post.title}
          </h3>
          <p className="text-[#4D4D4D]">{post.subtitle}</p>
          <button className="text-[#81C713] text-sm hover:underline hover:cursor-pointer self-start mt-10">
            Lees meer
          </button>
        </div>
      </div>
    </div>
  );
}

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = blogPosts.length;

  // Create extended array for smooth infinite scrolling
  const extendedPosts: BlogPost[] = [
    blogPosts[blogPosts.length - 1],
    ...blogPosts,
    blogPosts[0],
    blogPosts[1],
  ];

  // Autoplay functionality
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      moveNext();
    }, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const moveNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const movePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    stopAutoplay();
    startAutoplay();
  };

  // Handle infinite loop reset
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);

      // Reset to actual position without transition
      if (currentIndex >= totalSlides) {
        setCurrentIndex(0);
      } else if (currentIndex < 0) {
        setCurrentIndex(totalSlides - 1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, totalSlides]);

  // Get the actual display index for dot indicators
  const getDisplayIndex = (): number => {
    if (currentIndex < 0) return totalSlides - 1;
    if (currentIndex >= totalSlides) return 0;
    return currentIndex;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Carousel Container */}
      <div className="relative py-8">
        <div className="overflow-hidden" ref={containerRef}>
          <div
            className="flex h-[500px]"
            style={{
              transform: `translateX(calc(-${
                (currentIndex + 1) * 33.333
              }% + ${33.333}%))`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
          >
            {extendedPosts.map((post, index) => (
              <div
                key={`${post.id}-${index}`}
                className="shrink-0 px-3 h-fit"
                style={{ width: "33.333%" }}
              >
                <BlogCard post={post} isActive={index === currentIndex + 1} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2">
        {blogPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-sm ${
              getDisplayIndex() === index
                ? "bg-[#8DD1BA] w-8 h-3"
                : "bg-[#D0D0D0] w-3 h-3 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Main Blog Component
export default function Blog() {
  return (
    <div
      className="my-40 flex flex-col items-center"
      style={{ fontFamily: "Poppins" }}
    >
      <SectionTitle
        title="Blog"
        span={
          <div className="md:text-4xl text-2xl font-extrabold text-center">
            <span className="text-[#254055]">
              Inzichten, <span className="text-[#81C713]">nieuws </span>
              &<br />
              energietips
            </span>
          </div>
        }
      />
      <div className="mt-5"></div>
      <Carousel />
    </div>
  );
}
