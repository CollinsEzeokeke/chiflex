import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/landingPageComponent/header'

export default function MensPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Men&apos;s Premium Footwear Collection</h1>
            <p className="text-xl">
              Discover our exclusive range of men&apos;s shoes designed for style, comfort, and durability. From classic dress shoes to trendy sneakers, find your perfect pair.
            </p>
            <div className="space-x-4">
              <Link
                href="/mens-collection"
                className="inline-block bg-black text-white dark:border-white border px-6 py-3 rounded-md font-medium"
              >
                Shop Now
              </Link>
              <Link
                href="/mens-guide"
                className="inline-block bg-white text-black border border-black px-6 py-3 rounded-md font-medium"
              >
                Style Guide
              </Link>
            </div>
          </div><div className="relative h-96 w-full bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/menPage.jpg"
              alt="Men's Footwear Collection"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Dress Shoes', 'Sneakers', 'Boots', 'Sandals'].map((category) => (
              <div key={category} className="space-y-4">
                <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt={category}
                    width='500'
                    height='384'
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-xl font-semibold">{category}</h3>
                <Link href={`/mens/${category.toLowerCase().replace(' ', '-')}`} className="text-blue-600 hover:underline">
                  Shop Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}