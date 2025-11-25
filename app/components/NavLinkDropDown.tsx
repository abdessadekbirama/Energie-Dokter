import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { on } from "events";
import { usePathname } from "next/navigation";

export default function NavLinkDropdown({
  text,
  active,
  items,
  onclick,
}: {
  text: string;
  active?: string;
  items: { href: string; text: string; onclick?: () => void }[];
  onclick?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const isTouchScreen =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 
      // navigator.msMaxTouchPoints > 0;

    if (!isTouchScreen) {
      // Desktop hover
      function handleHover(event: MouseEvent) {
        if (
          dropdownRef.current &&
          dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      }

      document.addEventListener("mouseover", handleHover);
      return () => document.removeEventListener("mouseover", handleHover);
    } else {
      // Touch devices (phones + tablets + touch laptops)
      function handleClick(event: TouchEvent) {
        if (
          dropdownRef.current &&
          dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen((prev) => !prev);
        } else {
          setIsOpen(false);
        }
      }

      document.addEventListener("touchstart", handleClick);
      return () => document.removeEventListener("touchstart", handleClick);
    }
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <Link
        href="/pages/diensten/diensten"
        onClick={() => {
          onclick && onclick();
          setIsOpen(!isOpen);
        }}
        style={{ fontFamily: "Poppins" }}
        className={`flex items-center gap-1 ${
          active !== text ? "hover:bg-[#82c71324]" : ""
        } p-2 px-4 rounded-2xl transition-all duration-200 text-lg
      ${active === text ? "bg-[#81C713] text-white" : "bg-transparent"}`}
      >
        {text}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>

      {isOpen && (
        <div className="absolute top-full left-0 min-w-[200px] bg-white rounded-2xl shadow-lg border border-gray-100 md:p-4 p-2 z-50 md:w-max wrap-break-word">
          {items.map((item, index) => (
            <div key={index}>
              <Link
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                }}
                style={{ fontFamily: "Poppins" }}
                className={`font-medium text-[14px] md:text-[16px] text-[#4D4D4D] py-2 mx-3 pl-1 ${
                  Number(index + 1).toString() !== pathname.split("/")[3]
                    ? "hover:text-[#81C713]"
                    : ""
                } block transition-all duration-200
              ${
                Number(index + 1).toString() === pathname.split("/")[3]
                  ? "text-[#81C713]"
                  : "bg-transparent"
              }
              `}
              >
                {item.text}
              </Link>
              {item.text !== "Trainingen" && (
                <div className="bg-[#4d4d4d5b] py-[0.1px] mx-3.5"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
