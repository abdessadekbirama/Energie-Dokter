"use client";

import { useEffect, useRef, useState } from "react";
import { blogPosts } from "../data/blogs";

export default function Carousel() {
  interface BlogPost {
    id: number;
    title: string;
    subtitle: string;
    image: string;
  }

  interface BlogCardProps {
    post: BlogPost;
    isActive: boolean;
  }
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = blogPosts.length;

  function BlogCard({ post, isActive }: BlogCardProps) {
    return (
      <div
        className={`h-full transform transition-all duration-1000 ${
          isActive ? "scale-100" : "scale-90"
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
    }, 5000);
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
    }, 1000);

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
      <div className="relative pt-8">
        <div className="overflow-hidden" ref={containerRef}>
          <div
            className="flex h-[500px]"
            style={{
              transform: `translateX(calc(-${
                (currentIndex + 1) * 33.333
              }% + ${33.333}%))`,
              transition: isTransitioning ? "transform 1s ease-in-out" : "none",
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
      <div className="flex justify-center gap-2 mt-5">
        {blogPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-sm ${
              getDisplayIndex() === index
                ? "bg-[#8DD1BA] w-8 h-2"
                : "bg-[#D0D0D0] w-3 h-2 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
