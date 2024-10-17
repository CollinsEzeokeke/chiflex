"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import {
  generateProducts,
  sandalsProducts,
  athleticProducts,
  slipOnsProducts,
} from "@/utils/unisexFaker";
import { Product } from "@/types/productTypes";
import { CardContent, Card } from "./ui/card";
import { Button } from "./ui/button";
import Separator from "./separator";
import Loading from "@/app/loading";

export default function UsersPage() {
  // State to store products and filtered products
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State to store casual and filtered products
  const [casual, setCasual] = useState<Product[]>([]);
  const [filteredCasual, setFilteredCasual] = useState<Product[]>([]);

  //state to store athletic and filtered product
  const [athletic, setAthletic] = useState<Product[]>([]);
  const [filteredAthletic, setFilteredAthletic] = useState<Product[]>([]);

  // for the slipOns
  const [slipOns, setSlipOns] = useState<Product[]>([]);
  const [filteredSlipOns, setFilteredSlipOns] = useState<Product[]>([]);

  // Single search term for both product types
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const generatedProducts = await generateProducts(20);
        setProducts(generatedProducts);
        setFilteredProducts(generatedProducts);

        const generatedCasual = await sandalsProducts(20);
        setCasual(generatedCasual);
        setFilteredCasual(generatedCasual);

        const generatedAthletic = await athleticProducts(20);
        setAthletic(generatedAthletic);
        setFilteredAthletic(generatedAthletic);

        const generatedSlipOns = await slipOnsProducts(20);
        setSlipOns(generatedSlipOns);
        setFilteredSlipOns(generatedSlipOns);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredSneakers = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredProducts(filteredSneakers);

    const filteredCasualShoes = casual.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredCasual(filteredCasualShoes);

    const filteredAthleticShoes = athletic.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredCasual(filteredAthleticShoes);
    const filteredSlipOnsShoes = slipOns.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredCasual(filteredSlipOnsShoes);
  };

  //// using tanstack react query to replace the product

  return (
    <div className="overflow-x-hidden">
      <Separator />

      <div className="w-full h-28 flex items-center justify-around flex-col">
        <p id="sneakers"></p>
        <h2 className="text-3xl font-semibold">
          Search all our collections at once
        </h2>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 w-1/2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          {filteredProducts.length > 0 ||
          filteredCasual.length > 0 ||
          filteredAthletic.length > 0 ||
          filteredSlipOns.length > 0 ? (
            <div>
              {filteredProducts.length > 0 ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-28 relative -bottom-10 left-20 overflow-x-hidden w-full">
                    Sneakers
                  </h2>
                  <div className="flex justify-center w-full mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[95%]">
                      {filteredProducts.map((product, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={200}
                              height={200}
                              className="w-full h-48 object-cover mb-4 rounded transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-lg font-bold text-primary mt-1">
                              ${product.price}
                            </p>
                            <Button className="w-full mt-2">Add to Cart</Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              <p id="casual-shoes"></p>
              {filteredCasual.length > 0 ? (
                <div>
                  <Separator />
                  <h2 className="text-2xl font-semibold mb-28 relative -bottom-10 left-20 overflow-x-hidden w-full">
                    Casual Shoes
                  </h2>
                  <div className="flex justify-center w-full mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[95%]">
                      {filteredCasual.map((product, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={200}
                              height={200}
                              className="w-full h-48 object-cover mb-4 rounded transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-lg font-bold text-primary mt-1">
                              ${product.price}
                            </p>
                            <Button className="w-full mt-2">Add to Cart</Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              <p id="athletic"></p>
              {filteredAthletic.length > 0 ? (
                <div>
                  <Separator />
                  <h2 className="text-2xl font-semibold mb-28 relative -bottom-10 left-20 overflow-x-hidden w-full">
                    Athletic
                  </h2>
                  <div className="flex justify-center w-full mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[95%]">
                      {filteredAthletic.map((product, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={200}
                              height={200}
                              className="w-full h-48 object-cover mb-4 rounded transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-lg font-bold text-primary mt-1">
                              ${product.price}
                            </p>
                            <Button className="w-full mt-2">Add to Cart</Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              <p id="slip-ons"></p>
              {filteredSlipOns.length > 0 ? (
                <div>
                  <Separator />
                  <h2 className="text-2xl font-semibold mb-28 relative -bottom-10 left-20 overflow-x-hidden w-full">
                    Slip-Ons
                  </h2>
                  <div className="flex justify-center w-full mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[95%]">
                      {filteredSlipOns.map((product, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={200}
                              height={200}
                              className="w-full h-48 object-cover mb-4 rounded transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-lg font-bold text-primary mt-1">
                              ${product.price}
                            </p>
                            <Button className="w-full mt-2">Add to Cart</Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div className="col-span-4 text-center text-red-500 text-xl font-semibold h-[50vh] flex items-center justify-center">
              No such Product Found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
