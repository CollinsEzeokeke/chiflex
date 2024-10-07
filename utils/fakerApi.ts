import { faker } from "@faker-js/faker";
import { Product } from "@/types/productTypes";

const localImages = [
    '/images/menSearch/product.jpg',
    '/images/menSearch/productOne.jpg',
    '/images/menSearch/productTwo.jpg',
    '/images/menSearch/productThree.jpg',
    '/images/menSearch/productFour.jpg',
    '/images/menSearch/productFive.jpg',
    '/images/menSearch/productSix.jpg',
    '/images/menSearch/productSeven.jpg',
    '/images/menSearch/productEight.jpg',
    '/images/menSearch/productNine.jpg',
    '/images/menSearch/productTen.jpg',
    '/images/menSearch/productEleven.jpg',
    '/images/menSearch/productTwelve.jpg',
    '/images/menSearch/productThirteen.jpg',
    '/images/menSearch/productFourteen.jpg',
    '/images/menSearch/productFifteen.jpg',
    '/images/menSearch/productSixteen.jpg',
    '/images/menSearch/productSeventeen.jpg',
    '/images/menSearch/productEighteen.jpg',
    '/images/menSearch/productNineteen.jpg',
    '/images/menSearch/productTwenty.jpg',
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