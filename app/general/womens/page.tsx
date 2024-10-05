import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, User } from "lucide-react"
// import HomeLink from "@/components/homeLink"
// import Header from "@/components/landingPageComponent/header"

export default function WomensPage() {
  const categories = [
    { name: "Sneakers", image: "/placeholder.svg" },
    { name: "Boots", image: "/placeholder.svg" },
    { name: "Sandals", image: "/placeholder.svg" },
    { name: "Heels", image: "/placeholder.svg" },
  ]

  const featuredProducts = [
    { name: "Comfort Walk Sneakers", price: "$79.99", image: "/placeholder.svg" },
    { name: "Elegant Evening Heels", price: "$99.99", image: "/placeholder.svg" },
    { name: "All-Weather Boots", price: "$129.99", image: "/placeholder.svg" },
    { name: "Summer Breeze Sandals", price: "$59.99", image: "/placeholder.svg" },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* <HomeLink className="absolute top-[-0.130rem] p-6 flex justify-start items-center w-screen h-10"/> */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Input type="text" placeholder="Search women's footwear" className="w-full pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/cart" className=" hover:text-primary">
              <ShoppingCart size={24} />
            </Link>
            <Link href="/account" className=" hover:text-primary">
              <User size={24} />
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Women&apos;s Footwear</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <Image src={category.image} alt={category.name} width={300} height={200} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">{category.name}</h3>
                    <Link href={`/women/${category.name.toLowerCase()}`} className="text-primary text-sm hover:underline">
                      Shop Now
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map((product, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-48 object-cover mb-4 rounded" />
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-lg font-bold text-primary mt-1">{product.price}</p>
                  <Button className="w-full mt-2">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}