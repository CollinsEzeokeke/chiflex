// Suggested code may be subject to a license. Learn more: ~LicenseLog:787976936.
/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/K1vVDkRAsqC
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"
 
import { useState } from "react"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export function Component() {
  const [loading, setLoading] = useState(false)
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <FootprintsIcon className="h-6 w-6" />
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero Product"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Step into Style with Our Premium Footwear
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover the perfect pair of shoes to elevate your look and comfort. Explore our collection of
                  high-quality men's, women's, and unisex footwear.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop Now
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3">
            <div>
              <Link href="#" className="group flex flex-col items-center gap-4" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Men's Footwear"
                  className="aspect-square overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Men's Footwear</h3>
                  <p className="text-muted-foreground">Explore our collection</p>
                </div>
              </Link>
            </div>
            <div>
              <Link href="#" className="group flex flex-col items-center gap-4" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Women's Footwear"
                  className="aspect-square overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Women's Footwear</h3>
                  <p className="text-muted-foreground">Discover the latest styles</p>
                </div>
              </Link>
            </div>
            <div>
              <Link href="#" className="group flex flex-col items-center gap-4" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Unisex Footwear"
                  className="aspect-square overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Unisex Footwear</h3>
                  <p className="text-muted-foreground">Versatile options for all</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our most popular and best-selling footwear items.
                </p>
              </div>
            </div>
            <Carousel
              opts={{ align: "start", loop: true, autoplay: true, autoplayInterval: 5000 }}
              className="w-full max-w-5xl"
              onLoadingChange={setLoading}
            >
              <CarouselContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <CarouselItem>
                  <Card>
                    <img
                      src="/placeholder.svg"
                      width="300"
                      height="300"
                      alt="Product 1"
                      className="aspect-square overflow-hidden rounded-t-xl object-cover"
                    />
                    <CardContent className="p-4 space-y-2">
                      <h3 className="text-lg font-bold">Product 1</h3>
                      <p className="text-muted-foreground">$99.99</p>
                      <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        View Product
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <img
                      src="/placeholder.svg"
                      width="300"
                      height="300"
                      alt="Product 2"
                      className="aspect-square overflow-hidden rounded-t-xl object-cover"
                    />
                    <CardContent className="p-4 space-y-2">
                      <h3 className="text-lg font-bold">Product 2</h3>
                      <p className="text-muted-foreground">$79.99</p>
                      <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        View Product
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <img
                      src="/placeholder.svg"
                      width="300"
                      height="300"
                      alt="Product 3"
                      className="aspect-square overflow-hidden rounded-t-xl object-cover"
                    />
                    <CardContent className="p-4 space-y-2">
                      <h3 className="text-lg font-bold">Product 3</h3>
                      <p className="text-muted-foreground">$89.99</p>
                      <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        View Product
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Footwear Co. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-50">
          <div className="h-12 w-12 text-primary animate-spin" />
        </div>
      )}
    </div>
  )
}

function FootprintsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  )
}
