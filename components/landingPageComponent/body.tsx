"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useTransform, useScroll } from "framer-motion";
import { fadeIn } from "@/components/FloatingElements";
import MotionImage from "@/components/motionedImage";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  { id: 1, name: "Product 1", price: 99.99, imageUrl: "/placeholder.svg" },
  { id: 2, name: "Product 2", price: 79.99, imageUrl: "/placeholder.svg" },
  { id: 3, name: "Product 3", price: 89.99, imageUrl: "/placeholder.svg" },
  { id: 4, name: "Product 4", price: 94.22, imageUrl: "/placeholder.svg" },
  { id: 5, name: "Product 5", price: 119.99, imageUrl: "/placeholder.svg" },
  { id: 6, name: "Product 6", price: 69.99, imageUrl: "/placeholder.svg" },
];

const LandingPageBody: React.FC = () => {
  // Test for carousel

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  return (
    <>
      <main className="flex-1">
        {/* Section 1 */}

        <motion.section
          variants={fadeIn("down", 0.1)}
          initial="show"
          whileInView="show"
          style={{ scale }}
          className="w-full py-12 md:py-24 lg:py-32 snap-y snap-mandatory overflow-y-hidden"
        >
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 -mt-[110px] h-[70vdh]">
            <MotionImage
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero Product"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover shadow-xl dark:shadow-[0_4px_15px_rgba(255,255,255,0.2)] sm:w-full"
            />

            {/* Animation for the top border */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col justify-center space-y-4"
            >
              {/* Animation for it's text */}
              <motion.div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col gap-4 -mt-[100px]"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Step into Style with Our Premium Footwear
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover the perfect pair of shoes to elevate your look and
                  comfort. Explore our collection of high-quality men&apos;s,
                  women&apos;s, and unisex footwear.
                </p>
              </motion.div>
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
            </motion.div>
          </div>
        </motion.section>

        {/* Section 2 */}

        <motion.section
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          style={{ scale }}
          className="flex flex-col px-4 md:px-6 lg:grid-cols-3 h-[100vh] -mt-[300px] overflow-x-hidden overflow-y-hidden"
        >
          {/* <div className="h-[50%] min-w-max flex flex-row justify-between pt-4 bg-red-500">
            <div className="w-[30%] bg-blue-500 ">
              <h3 className="text-3xl font-bold tracking-tighter capitalize">Step into your perfect pair</h3>
            </div>
            <div className="bg-yellow">
              <p>
                From sleek sneakers to elegant heels, cozy slippers to rugged
                boots we've got every style to step up your shoe game!
              </p>
            </div>
          </div> */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-row justify-between items-start text-center h-[50vdh] w-[95.5vw] -pt-[100px] absolute top-[310px]"
          >
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <Link
                href="#"
                className="group flex flex-col items-center gap-4"
                prefetch={false}
              >
                <Image
                  src="/placeholder.svg"
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
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <Link
                href="#"
                className="group flex flex-col items-center gap-4"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
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
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <Link
                href="#"
                className="group flex flex-col items-center gap-4"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
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

        {/* Section 3 */}

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Products
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our most popular and best-selling footwear items.
                </p>
              </div>
            </div>

            <Carousel setApi={setApi} className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {/* <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{ align: "start", loop: true }}
              className="w-full max-w-5xl"
            >
              <CarouselContent>
                {products.map((product) => (
                  <CarouselItem key={product.id}>
                    <Card>
                      <img
                        src={product.imageUrl}
                        width="300"
                        height="300"
                        alt={product.name}
                        className="aspect-square overflow-hidden rounded-t-xl object-cover"
                      />
                      <CardContent className="p-4 space-y-2">
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p className="text-muted-foreground">
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPageBody;
