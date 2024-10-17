"use client";

import { useQuery } from "@tanstack/react-query";
import { generateProducts } from "@/utils/fakerApi";
import Image from "next/image";

export default function DataCheck() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => generateProducts(20),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {products?.map((product, index) => (
        <div key={index}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
