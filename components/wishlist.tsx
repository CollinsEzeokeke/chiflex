'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const initialWishlistItems: WishlistItem[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    image: "/placeholder.svg",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    image: "/placeholder.svg",
    description: "Feature-rich smartwatch with health tracking"
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image: "/placeholder.svg",
    description: "Ergonomic aluminum laptop stand"
  }
];

export default function WishlistPage() {
  const { toast } = useToast();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(initialWishlistItems);

  const handleRemoveFromWishlist = (itemId: number): void => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== itemId));
    toast({
      title: "Item removed from wishlist",
      description: "The item has been removed from your wishlist."
    });
  };

  const handleAddToCart = (itemId: number): void => {
    toast({
      title: "Added to cart",
      description: "The item has been added to your cart."
    });
  };

  const EmptyWishlist = () => (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-12">
        <Heart className="h-12 w-12 text-red-500 mb-4" />
        <p className="text-lg text-muted-foreground mb-4">Your wishlist is empty</p>
        <p className="text-sm text-muted-foreground mb-6">Visit our store to discover amazing items!</p>
        <Button asChild>
          <Link href="/">Go to Store</Link>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-2 mb-6">
        <Heart className="h-6 w-6 text-red-500" />
        <h1 className="text-3xl font-bold">My Wishlist</h1>
      </div>

      {wishlistItems.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>${item.price.toFixed(2)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleAddToCart(item.id)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-destructive"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}
