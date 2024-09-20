"use client"

import React from 'react';
interface FootprintsIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    xmlns?: string;
    width?: number;
    height?: number;
    viewBox?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
    strokeLinejoin?: "round" | "inherit" | "miter" | "bevel" | undefined;
  }
  import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Plus } from "lucide-react"

const FootprintsIcon: React.FC<FootprintsIconProps> = ({
    className = "h-6 w-6",
    width = 24,
    height = 24,
    xmlns = "http://www.w3.org/2000/svg",
    viewBox = "0 0 24 24",
    fill = "none",
    stroke = "currentColor",
    strokeWidth = 2,
    strokeLinecap = "round",
    strokeLinejoin = "round",
    ...props
  }) => {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        {...props}
      >
        <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
        <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
        <path d="M16 17h4" />
        <path d="M4 13h4" />
      </svg>
    );
  };

export function FloatingCartButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleOpen}
        className="bg-primary text-primary-foreground w-11 h-11 rounded-full flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Plus className="w-8 h-8" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 bg-background border border-border rounded-lg shadow-lg p-4 w-48"
          >
            <button className="flex items-center space-x-2 w-full text-left px-4 py-2 rounded-md hover:bg-muted transition-colors duration-200">
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

  export default FootprintsIcon