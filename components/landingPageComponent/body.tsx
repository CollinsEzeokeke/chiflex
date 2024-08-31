"use client"

import React from 'react'
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn } from "@/components/FloatingElements"

const LandingPageBody: React.FC = () => {
    return (
        <>
            <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32">
           <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 -mt-[65px]">
             <motion.img
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
              className="flex flex-col justify-center space-y-4">
                {/* Animation for it's text */}
                <motion.div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col gap-4 -mt-[100px]">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Step into Style with Our Premium Footwear
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover the perfect pair of shoes to elevate your look and comfort. Explore our collection of
                     high-quality men's, women's, and unisex footwear.
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
         </section>
            </main>
        </>
    )
}

export default LandingPageBody