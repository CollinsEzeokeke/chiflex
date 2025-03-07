"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/FloatingElements";
import MotionImage from "@/components/motionedImage";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { FloatingCartButton } from "../footPrintsIconsFloatingCard";
import Footer from "../footer";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  { id: 1, name: "Louis Vutton", price: 99.99, imageUrl: "/images/shoe.webp" },
  { id: 2, name: "Nike", price: 79.99, imageUrl: "/images/carouselOne.jpg" },
  { id: 3, name: "Leather", price: 89.99, imageUrl: "/images/carouselTwo.jpg" },
  {
    id: 4,
    name: "Sports",
    price: 94.22,
    imageUrl: "/images/carouselThree.jpg",
  },
  {
    id: 5,
    name: "Vintage",
    price: 119.99,
    imageUrl: "/images/carouselFour.jpg",
  },
  { id: 6, name: "Cavani", price: 69.99, imageUrl: "/images/carouselFive.jpg" },
];

const LandingPageBody: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-_184">
        {/* Section 1 */}

        <motion.section
          variants={fadeIn("down", 0.1)}
          initial="show"
          whileInView="show"
          className="w-full py-12 md:py-24 lg:py-32 snap-y snap-mandatory overflow-y-hidden h-[93.4vh] portrait:flex-col landscape:flex-row lg:w-full md:flex md:justify-end md:flex-col mobile:w-[90vw] mobile:flex"
        >
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 lg:h-[100vh] -mt-[110px] h-[70vdh] md:h-full md:flex mobile:-mt-5 mobile:h-full mobile:flex mobile:flex-col">
            <div className="max-w-full max-h-full md:w-[100%] md:h-4/5 md:flex mobile:mb-3.5">
              <MotionImage
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                src="/images/frontOne.png"
                width="550"
                height="550"
                alt="Hero Product"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover shadow-xl dark:shadow-[0_4px_15px_rgba(255,255,255,0.2)] sm:w-full md:mt-14"
              />
            </div>

            {/* Animation for the top border */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex flex-col justify-center space-y-4 mobile:h-full mobile:relative mobile:top-12"
            >
              {/* Animation for it's text */}
              <motion.div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="flex flex-col gap-4 -mt-[100px] "
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none md:text-6xl">
                  Step into Style with Our Premium Footwear
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover the perfect pair of shoes to elevate your look and
                  comfort. Explore our collection of high-quality men&apos;s,
                  women&apos;s, and unisex footwear.
                </p>
              </motion.div>
              <div className="flex flex-row gap-2 min-[400px]:flex-row">
                <Link
                  href="/sign-in"
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
            </motion.div>
          </div>
        </motion.section>

        {/* Section 2 */}

        <motion.section
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="flex flex-col px-4 md:px-6 lg:grid-cols-3 h-[100vh] -mt-13 overflow-x-hidden overflow-y-hidden md:relative md:-top-11 lg:mt-[180px] mobile:w-[90vw] mobile:px-0"
        >
          <div className="h-[30%] min-w-max flex flex-col justify-between pt-4 mobile:w-[90vw] mobile:flex mobile:justify-center mobile:items-center">
            <div className="w-full text-center mobile:w-[80vw] mobile:flex mobile:justify-center">
              <h3 className="text-5xl font-bold tracking-tighter capitalize mobile:text-2xl">
                Step into your perfect pair
              </h3>
            </div>
            <div className=" w-3/6 h-3/4 text-center text-xl gap-4 order-1 self-center flex items-center md:h-full md:py-6 md:block mobile:w-[80vw] mobile:items-start pt-2">
              <p className="py-1">
                From sleek sneakers to elegant heels, cozy slippers to rugged
                boots we&apos;ve got every style to step up your shoe game!
              </p>
            </div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-row justify-around items-start text-center h-[50vh] w-full -pt-[100px] absolute top-[250px] mobile:pt-0 mobile:flex-col mobile:justify-center mobile:items-center mobile:-top-[150px] mobile:hidden"
          >
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              <Link
                href="#"
                className="group flex flex-col items-center gap-4"
                prefetch={false}
              >
                <Image
                  src="/images/mens.jpg"
                  width="300"
                  height="300"
                  alt="Men's Footwear"
                  className="aspect-square overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Men&apos;s Footwear</h3>
                  <p className="text-muted-foreground">
                    Explore our collection
                  </p>
                </div>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              <Link
                href="#"
                className="group flex flex-col items-center gap-4"
                prefetch={false}
              >
                <Image
                  src="/images/womens.jpg"
                  width="300"
                  height="300"
                  alt="Women's Footwear"
                  className="aspect-square overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Women&apos;s Footwear</h3>
                  <p className="text-muted-foreground">
                    Discover the latest styles
                  </p>
                </div>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              <Link
                href="#"
                className="group flex flex-col items-center gap-4"
                prefetch={false}
              >
                <Image
                  src="/images/unisex.jpg"
                  width="300"
                  height="300"
                  alt="Unisex Footwear"
                  className="aspect-square overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Unisex Footwear</h3>
                  <p className="text-muted-foreground">
                    Versatile options for all
                  </p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
        {/* Mobile display for mobile devices */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="items-start text-center h-[50vh] w-full -pt-[100px] hidden top-[250px] mobile:pt-0 mobile:flex-col mobile:justify-center mobile:items-center mobile:-top-[150px] mobile:flex mobile:relative"
        >
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            <Link
              href="#"
              className="group flex flex-col items-center gap-4"
              prefetch={false}
            >
              <Image
                src="/images/mens.jpg"
                width="300"
                height="300"
                alt="Men's Footwear"
                className="aspect-square overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Men&apos;s Footwear</h3>
                <p className="text-muted-foreground">Explore our collection</p>
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            <Link
              href="#"
              className="group flex flex-col items-center gap-4"
              prefetch={false}
            >
              <Image
                src="/images/womens.jpg"
                width="300"
                height="300"
                alt="Women's Footwear"
                className="aspect-square overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Women&apos;s Footwear</h3>
                <p className="text-muted-foreground">
                  Discover the latest styles
                </p>
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            <Link
              href="#"
              className="group flex flex-col items-center gap-4"
              prefetch={false}
            >
              <Image
                src="/images/unisex.jpg"
                width="300"
                height="300"
                alt="Unisex Footwear"
                className="aspect-square overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Unisex Footwear</h3>
                <p className="text-muted-foreground">
                  Versatile options for all
                </p>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* section testing for section 3 */}

        <section className="w-full md:py-24 lg:py-32 overflow-hidden h-screen flex justify-center md:-mt-[300px] lg:h-[90vh] lg:mt-[100px] mobile:w-[90vw] mobile:flex mobile:items-end mobile:mt-[100px]">
          <div className="container space-y-12 px-4 md:px-6 h-[80vh] -mt-[100px] flex items-center flex-col">
            <div className="flex flex-col items-center justify-center space-y-4 text-center h-[15vh]">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Brands
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our most popular and best-selling footwear items.
                </p>
              </div>
            </div>

            <div className=" w-[100%] flex justify-center h-full ">
              <Carousel
                plugins={[plugin.current]}
                className="w-[50vw] h-full justify-self-center md:h-[60vh] md:w-[100%] mobile:w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {products.map((product) => (
                    <CarouselItem key={product.id}>
                      <div className="p-1 md:h-[100%] md:flex md:justify-center mobile:h-[100%] mobile:flex mobile:justify-center">
                        <Card className="h-auto flex justify-center border-none] shadow-lg dark:shadow-[0px 5px 15px rgba(255, 255, 255, 0.2)] md:h-full md:flex md:flex-col md:items-center lg:h-[65vh] lg:w-[80vw] lg:overflow-hidden mobile:h-[60vh] mobile:flex mobile:flex-col mobile:items-center transition-transform duration-300 ease-in-out hover:scale-110">
                          <Image
                            src={product.imageUrl}
                            width="1000"
                            height="1000"
                            alt={product.name}
                            className="aspect-square overflow-hidden rounded-t-xl object-cover md:w-[80%] lg:h-full lg:w-full mobile:w-[80vw]"
                          />
                          <CardContent className="flex flex-col aspect-square items-center justify-center p-6 md:w-[80%] md:absolute md:opacity-90 mobile:absolute mobile:opacity-90">
                            <h3 className="text-lg font-bold text-white">
                              {product.name}
                            </h3>
                            <p className="text-white">
                              ${product.price.toFixed(2)}
                            </p>
                            <Link
                              href="#"
                              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                              prefetch={false}
                            >
                              View Product
                            </Link>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="mr-[500px] md:hidden mobile:hidden" />
                <CarouselNext className="ml-10 md:hidden mobile:hidden" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Floating Icon */}

        <FloatingCartButton />

        {/* Footer */}

        <Footer />
      </main>
    </>
  );
};

export default LandingPageBody;
