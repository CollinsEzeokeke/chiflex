import { faker } from "@faker-js/faker";
import { Product } from "@/types/productTypes";

const localImages = [
    '/images/womenSearch/product.jpg',
    '/images/womenSearch/productOne.jpg',
    '/images/womenSearch/productTwo.jpg',
    '/images/womenSearch/productThree.jpg',
    '/images/womenSearch/productFour.jpg',
    '/images/womenSearch/productFive.jpg',
    '/images/womenSearch/productSix.jpg',
    '/images/womenSearch/productSeven.jpg',
    '/images/womenSearch/productEight.jpg',
    '/images/womenSearch/productNine.jpg',
    '/images/womenSearch/productTen.jpg',
    '/images/womenSearch/productEleven.jpg',
    '/images/womenSearch/productTwelve.jpg',
    '/images/womenSearch/productThirteen.jpg',
    '/images/womenSearch/productFourteen.jpg',
    '/images/womenSearch/productFifteen.jpg',
    '/images/womenSearch/productSixteen.jpg',
    '/images/womenSearch/productSeventeen.jpg',
    '/images/womenSearch/productEighteen.jpg',
    '/images/womenSearch/productNineteen.jpg',
    '/images/womenSearch/productTwenty.jpg',
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