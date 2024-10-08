'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { generateProducts } from '@/utils/womenFaker';
import { Product } from '@/types/productTypes';
import { CardContent, Card } from './ui/card';
import { Button } from './ui/button';
import Separator from './separator';

export default function WomensDataDisplay() {
  // State to store products and filtered products
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const generatedProducts = await generateProducts(20);
      setProducts(generatedProducts);
      setFilteredProducts(generatedProducts); // Initially, show all products
    };

    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      {/* separator */}
      <Separator />

      {/* search header */}
      <div className="w-full h-20 flex items-center justify-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 w-1/2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <Separator />
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Check if filteredProducts array is empty */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
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
          ))
        ) : (
          <div className="col-span-4 text-center text-red-500 text-xl font-semibold">
            No such Product Found
          </div>
        )}
      </div>
    </div>
  );
}
