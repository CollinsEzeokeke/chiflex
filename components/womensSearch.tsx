// app/users/page.tsx
import Image from 'next/image';
import { generateProducts } from '@/utils/fakerApi';
import { Product } from '@/types/productTypes';
import { CardContent, Card,  } from './ui/card';
import { Button } from './ui/button';

export default async function UsersPage() {
  const products: Product[] = await generateProducts(20);

  return (
    <div>
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-48 object-cover mb-4 rounded  transition-transform duration-300 ease-in-out hover:scale-110" />
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-lg font-bold text-primary mt-1">${product.price}</p>
                  <Button className="w-full mt-2">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
  );
}