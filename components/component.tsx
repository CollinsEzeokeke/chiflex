///////////////////////////
// for the component file
//////////////////////////////

// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
// import { Card, CardContent } from "@/components/ui/card"
// import { motion } from "framer-motion"
// import { fadeIn } from "@/components/FloatingElements"



// // Define types for product data
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   imageUrl: string;
// }

//   const products: Product[] = [
//     { id: 1, name: "Product 1", price: 99.99, imageUrl: "/placeholder.svg" },
//     { id: 2, name: "Product 2", price: 79.99, imageUrl: "/placeholder.svg" },
//     { id: 3, name: "Product 3", price: 89.99, imageUrl: "/placeholder.svg" },
//     { id: 4, name: "Product 4", price: 94.22, imageUrl: "/placeholder.svg" },
//     { id: 5, name: "Product 5", price: 119.99, imageUrl: "/placeholder.svg" },
//     { id: 6, name: "Product 6", price: 69.99, imageUrl: "/placeholder.svg" }
//   ];
// export const Component: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(false);

//   return (
//     <>
//      <div className="flex flex-col min-h-[100dvh]">
      
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 -mt-[50px]">
//             <img
//               src="/placeholder.svg"
//               width="550"
//               height="550"
//               alt="Hero Product"
//               className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
//             />
//             <motion.div
//               variants={fadeIn("up", 0.1)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0.7 }}
//               className="flex flex-col justify-center space-y-4">
//               <motion.div
//               variants={fadeIn("left", 0.25)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0.7 }}
//               className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                     Step into Style with Our Premium Footwear
//                   </h1>
//                   <p className="max-w-[600px] text-muted-foreground md:text-xl">
//                     Discover the perfect pair of shoes to elevate your look and comfort. Explore our collection of
//                     high-quality men's, women's, and unisex footwear.
//                   </p>
//               </motion.div>
//               <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                 <Link
//                   href="#"
//                   className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                   prefetch={false}
//                 >
//                   Shop Now
//                 </Link>
//                 <Link
//                   href="#"
//                   className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                   prefetch={false}
//                 >
//                   Learn More
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//         <section className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3">
//             <div>
//               <Link href="#" className="group flex flex-col items-center gap-4" prefetch={false}>
//                 <img
//                   src="/placeholder.svg"
//                   width="300"
//                   height="300"
//                   alt="Men's Footwear"
//                   className="aspect-square overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform"
//                 />
//                 <div className="text-center">
//                   <h3 className="text-xl font-bold">Men's Footwear</h3>
//                   <p className="text-muted-foreground">Explore our collection</p>
//                 </div>
//               </Link>
//             </div>
//             <div>
//               <Link href="#" className="group flex flex-col items-center gap-4" prefetch={false}>
//                 <img
//                   src="/placeholder.svg"
//                   width="300"
//                   height="300"
//                   alt="Women's Footwear"
//                   className="aspect-square overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform"
//                 />
//                 <div className="text-center">
//                   <h3 className="text-xl font-bold">Women's Footwear</h3>
//                   <p className="text-muted-foreground">Discover the latest styles</p>
//                 </div>
//               </Link>
//             </div>
//             <div>
//               <Link href="#" className="group flex flex-col items-center gap-4" prefetch={false}>
//                 <img
//                   src="/placeholder.svg"
//                   width="300"
//                   height="300"
//                   alt="Unisex Footwear"
//                   className="aspect-square overflow-hidden rounded-xl object-cover group-hover:scale-105 transition-transform"
//                 />
//                 <div className="text-center">
//                   <h3 className="text-xl font-bold">Unisex Footwear</h3>
//                   <p className="text-muted-foreground">Versatile options for all</p>
//                 </div>
//               </Link>
//             </div>
//             </section>
//           </div>
//           <main>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container space-y-12 px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
//                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Discover our most popular and best-selling footwear items.
//                 </p>
//               </div>
//             </div>
//             <Carousel
//               opts={{ align: "start", loop: true, autoplay: true, autoplayInterval: 5000 }}
//               className="w-full max-w-5xl"
//               onLoadingChange={setLoading}
//             >
//               <CarouselContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-green-500">
//                 {products.map((product) => (
//                   <CarouselItem key={product.id}>
//                     <Card>
//                       <img
//                         src={product.imageUrl}
//                         width="300"
//                         height="300"
//                         alt={product.name}
//                         className="aspect-square overflow-hidden rounded-t-xl object-cover"
//                       />
//                       <CardContent className="p-4 space-y-2">
//                         <h3 className="text-lg font-bold">{product.name}</h3>
//                         <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
//                         <Link
//                           href="#"
//                           className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                           prefetch={false}
//                         >
//                           View Product
//                         </Link>
//                       </CardContent>
//                     </Card>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//             </Carousel>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-muted-foreground">&copy; 2024 Footwear Co. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
//             Terms of Service
//           </Link>
//           <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
//             Privacy
//           </Link>
//         </nav>
//       </footer>
    
//      </div>
//     </>
   
//   )
// }



