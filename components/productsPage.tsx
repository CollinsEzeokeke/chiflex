'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Package, Search, Heart, ShoppingCart } from "lucide-react";
import { useState, useMemo } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  isFavorite?: boolean;
}

type Category = 'all' | 'electronics' | 'sports' | 'home' | 'accessories';

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    category: "Electronics",
    stock: 45,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    stock: 30,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    category: "Sports",
    stock: 60,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 79.99,
    category: "Home",
    stock: 25,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&q=80",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Backpack",
    price: 49.99,
    category: "Accessories",
    stock: 100,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 39.99,
    category: "Home",
    stock: 40,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
    isFavorite: false,
  },
];

export default function ProductsPage() {
    const { toast } = useToast();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<Category>("all");
    const [products, setProducts] = useState<Product[]>(initialProducts);
  
    const handleAddToWishlist = (productId: number): void => {
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product.id === productId
            ? { ...product, isFavorite: !product.isFavorite }
            : product
        )
      );
  
      const product = products.find(p => p.id === productId);
      if (product) {
        toast({
          title: product.isFavorite ? "Removed from Wishlist" : "Added to Wishlist",
          description: `${product.name} has been ${product.isFavorite ? 'removed from' : 'added to'} your wishlist`,
        });
      }
    };
  
    const handleAddToCart = (productName: string): void => {
      toast({
        title: "Added to Cart",
        description: `${productName} has been added to your cart`,
      });
    };
  
    const filteredProducts = useMemo(() => {
      return products.filter((product) => {
        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory =
          selectedCategory === "all" ||
          product.category.toLowerCase() === selectedCategory.toLowerCase();
        return matchesSearch && matchesCategory;
      });
    }, [searchQuery, selectedCategory, products]);
  
    const EmptyProductList = () => (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-lg text-muted-foreground">No products found matching your criteria</p>
      </div>
    );
  
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6" />
            <h1 className="text-3xl font-bold">Products</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search products..." 
                className="pl-8" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select 
              defaultValue="all" 
              value={selectedCategory}
              onValueChange={(value: Category) => setSelectedCategory(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
  
        <ScrollArea className="h-[calc(100vh-12rem)]">
          {filteredProducts.length === 0 ? (
            <EmptyProductList />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="flex flex-col">
                  <CardHeader>
                    <div className="relative w-full h-48 mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground">
                        {product.stock} in stock
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </CardContent>
                  <CardFooter className="flex gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleAddToWishlist(product.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${product.isFavorite ? 'text-red-500 fill-red-500' : 'text-red-500'}`}
                      />
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => handleAddToCart(product.name)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    );
  }