import Image from "next/image";
import Link from "next/link";
import Header from "@/components/landingPageComponent/header";
import UsersPage from "@/components/unisexDataDisplay";
import { Search } from "lucide-react";
import Separator from "@/components/separator";
import Footer from "@/components/footer";

type Categories = {
  name: string;
  image: string;
  link: string;
};

export default function UnisexPage() {
  const categories: Categories[] = [
    {
      name: "Sneakers",
      image: "/images/unisexSneakers.jpg",
      link: "/general/unisex/#sneakers",
    },
    {
      name: "Casual Shoes",
      image: "/images/unisexCasual.jpg",
      link: "/general/unisex/#sneakers",
    },
    {
      name: "Athletic Shoes",
      image: "/images/unisexAthletic.jpg",
      link: "/general/unisex/#sneakers",
    },
    {
      name: "Slip-Ons",
      image: "/images/unisexSlipOns.jpg",
      link: "/general/unisex/#sneakers",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Unisex Footwear for Every Style
            </h1>
            <p className="text-xl">
              Discover our inclusive range of unisex shoes designed for
              versatility, comfort, and style. From trendy sneakers to
              comfortable slip-ons, find the perfect pair for any occasion.
            </p>
            <div className="space-x-4">
              <Link
                href="/unisex-collection"
                className="inline-block bg-black text-white dark:border-white border px-6 py-3 rounded-md font-medium"
              >
                Shop Now
              </Link>
              <Link
                href="/unisex-guide"
                className="inline-block bg-white text-black border border-black px-6 py-3 rounded-md font-medium"
              >
                Style Guide
              </Link>
            </div>
          </div>
          <div className="relative h-96 w-full bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/unisexPage.jpg"
              alt="Unisex Footwear Collection"
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
                  href={`/unisex/${category.name
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
      {/* Shopping Sections */}
      <section className="mb-20">
        <UsersPage />
      </section>

      <Footer />
    </div>
  );
}
