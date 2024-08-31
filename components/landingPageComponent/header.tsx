"use client"

import React from 'react'
import FootprintsIcon from "@/components/footPrintsIcons"
import Link from "next/link"

const Header: React.FC = () => {

    return(
        <>
        <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <FootprintsIcon />
          <span className="sr-only">Footwear Co.</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Men
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Women
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Unisex
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sale
          </Link>
        </nav>
      </header>
        </>
    )
}

export default Header