"use client";

import React from "react";
import FootprintsIcon from "@/components/footPrintsIconsFloatingCard";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, px } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchPopUp from "@/components/searchPopUp"
import Image from "next/image";
import { DropDownMenu } from "../dropDown";

const navItems = [
  {
    title: "Men",
    href: "/general/mens",
    preview: {
      image: "/placeholder.svg",
      content:
        "Discover our latest collection of men's footwear, from casual sneakers to formal dress shoes.",
    },
    sections: [
      { title: "Sneakers", href: "/men/sneakers" },
      { title: "Dress Shoes", href: "/men/dress-shoes" },
      { title: "Boots", href: "/men/boots" },
      { title: "Sandals", href: "/men/sandals" },
    ],
  },
  {
    title: "Women",
    href: "/general/womens",
    preview: {
      image: "/placeholder.svg",
      content:
        "Explore trendy and comfortable women's shoes for every occasion, from heels to flats.",
    },
    sections: [
      { title: "Heels", href: "/women/heels" },
      { title: "Flats", href: "/women/flats" },
      { title: "Boots", href: "/women/boots" },
      { title: "Sneakers", href: "/women/sneakers" },
    ],
  },
  {
    title: "Unisex",
    href: "/unisex",
    preview: {
      image: "/placeholder.svg",
      content:
        "Check out our versatile unisex footwear options, perfect for any style and preference.",
    },
    sections: [
      { title: "Sneakers", href: "/unisex/sneakers" },
      { title: "Sandals", href: "/unisex/sandals" },
      { title: "Slip-ons", href: "/unisex/slip-ons" },
      { title: "Athletic", href: "/unisex/athletic" },
    ],
  },
];

const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (clickedItem !== title) {
      setActiveItem(title);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveItem(null);
    }, 300);
  };

  const handleClick = (title: string, href: string) => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
      router.push(href);
    } else {
      clickTimeoutRef.current = setTimeout(() => {
        if (clickedItem === title) {
          setClickedItem(null);
        } else {
          setClickedItem(title);
          setActiveItem(null);
        }
        clickTimeoutRef.current = null;
      }, 300);
    }
  };

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 475);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <>
      {isMobile ? (
        <header className="h-14 items-center flex overflow-hidden justify-between">
          <Link href="/" prefetch={false} className="left-1 relative">
            <FootprintsIcon />
            <span className="sr-only">Footwear Co.</span>
          </Link>

          <SearchPopUp />

          <DropDownMenu />
        </header>
      ) : (
        <header className="px-4 lg:px-6 h-14 flex items-center mobile:hidden">
          <Link
            href="/"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <FootprintsIcon />
            <span className="sr-only">Footwear Co.</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6 w-screen">
            <ul className="flex space-x-8 justify-center justify-self-center flex-1">
              {navItems.map((item) => (
                <li
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Button
                    variant="ghost"
                    className="hover:text-primary transition-colors"
                    onClick={() => handleClick(item.title, item.href)}
                  >
                    <span className="flex items-center">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </span>
                  </Button>
                  <AnimatePresence>
                    {activeItem === item.title &&
                      clickedItem !== item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-10"
                        >
                          <div className="p-4">
                            <Image
                              src={item.preview.image}
                              alt={`${item.title} preview`}
                              className="w-full h-32 object-cover rounded-md mb-2"
                            />
                            <p className="text-sm text-gray-600">
                              {item.preview.content}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    {clickedItem === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[400px] bg-white shadow-lg rounded-md overflow-hidden z-10"
                      >
                        <div className="p-4 flex">
                          <div className="w-1/2 pr-4 border-r">
                            <h3 className="font-semibold mb-2 dark:text-black">
                              Main Categories
                            </h3>
                            <ul className="space-y-2">
                              {navItems.map((navItem) => (
                                <li key={navItem.title}>
                                  <Link
                                    href={navItem.href}
                                    className="text-sm hover:text-primary transition-colors text-black"
                                  >
                                    {navItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="w-1/2 pl-4">
                            <h3 className="font-semibold dark:text-black mb-2">
                              {item.title} Categories
                            </h3>
                            <ul className="space-y-2">
                              {item.sections.map((section) => (
                                <li key={section.title}>
                                  <Link
                                    href={section.href}
                                    className="text-sm text-black dark:text-black hover:text-primary transition-colors"
                                  >
                                    {section.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </nav>
          <div>
          <ThemeSwitcher />

          </div>
        </header>
      )}
    </>
  );
};

export default Header;
