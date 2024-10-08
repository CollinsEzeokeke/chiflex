import { faker } from "@faker-js/faker";
import { Product } from "@/types/productTypes";

const localImages = [
    '/images/unisexSearch/product.jpg',
    '/images/unisexSearch/productOne.jpg',
    '/images/unisexSearch/productTwo.jpg',
    '/images/unisexSearch/productThree.jpg',
    '/images/unisexSearch/productFour.jpg',
    '/images/unisexSearch/productFive.jpg',
    '/images/unisexSearch/productSix.jpg',
    '/images/unisexSearch/productSeven.jpg',
    '/images/unisexSearch/productEight.jpg',
    '/images/unisexSearch/productNine.jpg',
    '/images/unisexSearch/productTen.jpg',
    '/images/unisexSearch/productEleven.jpg',
    '/images/unisexSearch/productTwelve.jpg',
    '/images/unisexSearch/productThirteen.jpg',
    '/images/unisexSearch/productFourteen.jpg',
    '/images/unisexSearch/productFifteen.jpg',
    '/images/unisexSearch/productSixteen.jpg',
    '/images/unisexSearch/productSeventeen.jpg',
    '/images/unisexSearch/productEighteen.jpg',
    '/images/unisexSearch/productNineteen.jpg',
    '/images/unisexSearch/productTwenty.jpg',
]

export async function generateProduct(imageIndex: number): Promise<Product> {

    await new Promise(resolve => setTimeout(resolve, 100))

    const image = localImages[imageIndex % localImages.length]

  return{
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    image: image,
  };
}


export async function generateProducts(count: number): Promise<Product[]> {
    const productsGenerated = await Promise.all(
        Array.from({ length: count }, (_, index)=> generateProduct(index))
    );
    return productsGenerated
}