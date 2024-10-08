import Image from "next/image";
import Link from "next/link";
import Header from "@/components/landingPageComponent/header";
import Separator from "@/components/separator";
import Footer from "@/components/footer";
import WomensDataDisplay from "@/components/womensDataDisplay";

type Categories = {
  name: string;
  image: string;
};

export default function WomensPage() {

  const categories: Categories[] = [
    { name: "Heels", image: "/images/heels.jpg" },
    { name: "Flats", image: "/images/flats.jpg" },
    { name: "Boots", image: "/images/womenBoots.jpg" },
    { name: "Sandals", image: "/images/womenSandals.jpg" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Women&apos;s Elegant Footwear Collection
            </h1>
            <p className="text-xl">
              Explore our exquisite range of women&apos;s shoes designed for
              elegance, comfort, and versatility. From stunning heels to chic flats,
              find your perfect pair to elevate any outfit.
            </p>
            <div className="space-x-4">
              <Link
                href="/womens-collection"
                className="inline-block bg-black text-white dark:border-white border px-6 py-3 rounded-md font-medium"
              >
                Shop Now
              </Link>
              <Link
                href="/womens-guide"
                className="inline-block bg-white text-black border border-black px-6 py-3 rounded-md font-medium"
              >
                Fashion Guide
              </Link>
            </div>
          </div>
          <div className="relative h-96 w-full bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/womenPage.jpg"
              alt="Women's Footwear Collection"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="space-y-4">
                <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover-scale-110">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <Link
                  href={`/womens/${category.name
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="text-blue-600 hover:underline"
                >
                  Shop Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <section className="mb-20">
        <WomensDataDisplay/>
      </section>

      <Footer/>
    </div>
  );
}