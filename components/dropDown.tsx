'use client'

import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import Link from 'next/link'

export default function MobileDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="p-2 text-primary bg-primary-foreground rounded-md"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background text-foreground">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleDropdown}
              className="p-2 text-primary bg-primary-foreground rounded-full"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-grow flex flex-col items-center justify-center space-y-6 text-xl">
            <Link href="#"></Link>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Services</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      )}
    </div>
  )
}