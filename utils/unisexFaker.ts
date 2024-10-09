import { faker } from "@faker-js/faker";
import { Product } from "@/types/productTypes";

const localImages = [
  "/images/unisexSearch/product.jpg",
  "/images/unisexSearch/productOne.jpg",
  "/images/unisexSearch/productTwo.jpg",
  "/images/unisexSearch/productThree.jpg",
  "/images/unisexSearch/productFour.jpg",
  "/images/unisexSearch/productFive.jpg",
  "/images/unisexSearch/productSix.jpg",
  "/images/unisexSearch/productSeven.jpg",
  "/images/unisexSearch/productEight.jpg",
  "/images/unisexSearch/productNine.jpg",
  "/images/unisexSearch/productTen.jpg",
  "/images/unisexSearch/productEleven.jpg",
  "/images/unisexSearch/productTwelve.jpg",
  "/images/unisexSearch/productThirteen.jpg",
  "/images/unisexSearch/productFourteen.jpg",
  "/images/unisexSearch/productFifteen.jpg",
  "/images/unisexSearch/productSixteen.jpg",
  "/images/unisexSearch/productSeventeen.jpg",
  "/images/unisexSearch/productEighteen.jpg",
  "/images/unisexSearch/productNineteen.jpg",
  "/images/unisexSearch/productTwenty.jpg",
];

const sandalsImage: string[] = [
  "/images/unisexSearch/sandals/product.jpg",
  "/images/unisexSearch/sandals/productOne.jpg",
  "/images/unisexSearch/sandals/productTwo.jpg",
  "/images/unisexSearch/sandals/productThree.jpg",
  "/images/unisexSearch/sandals/productFour.jpg",
  "/images/unisexSearch/sandals/productFive.jpg",
  "/images/unisexSearch/sandals/productSix.jpg",
  "/images/unisexSearch/sandals/productSeven.jpg",
  "/images/unisexSearch/sandals/productEight.jpg",
  "/images/unisexSearch/sandals/productNine.jpg",
  "/images/unisexSearch/sandals/productTen.jpg",
  "/images/unisexSearch/sandals/productEleven.jpg",
  "/images/unisexSearch/sandals/productTwelve.jpg",
  "/images/unisexSearch/sandals/productThirteen.jpg",
  "/images/unisexSearch/sandals/productFourteen.jpg",
  "/images/unisexSearch/sandals/productFifteen.jpg",
  "/images/unisexSearch/sandals/productSixteen.jpg",
  "/images/unisexSearch/sandals/productSeventeen.jpg",
  "/images/unisexSearch/sandals/productEighteen.jpg",
  "/images/unisexSearch/sandals/productNineteen.jpg",
  "/images/unisexSearch/sandals/productTwenty.jpg",
];

const athleticImage: string[] = [
  "/images/unisexSearch/athletic/product.jpg",
  "/images/unisexSearch/athletic/productOne.jpg",
  "/images/unisexSearch/athletic/productTwo.jpg",
  "/images/unisexSearch/athletic/productThree.jpg",
  "/images/unisexSearch/athletic/productFour.jpg",
  "/images/unisexSearch/athletic/productFive.jpg",
  "/images/unisexSearch/athletic/productSix.jpg",
  "/images/unisexSearch/athletic/productSeven.jpg",
  "/images/unisexSearch/athletic/productEight.jpg",
  "/images/unisexSearch/athletic/productNine.jpg",
  "/images/unisexSearch/athletic/productTen.jpg",
  "/images/unisexSearch/athletic/productEleven.jpg",
  "/images/unisexSearch/athletic/productTwelve.jpg",
  "/images/unisexSearch/athletic/productThirteen.jpg",
  "/images/unisexSearch/athletic/productFourteen.jpg",
  "/images/unisexSearch/athletic/productFifteen.jpg",
  "/images/unisexSearch/athletic/productSixteen.jpg",
  "/images/unisexSearch/athletic/productSeventeen.jpg",
  "/images/unisexSearch/athletic/productEighteen.jpg",
  "/images/unisexSearch/athletic/productNineteen.jpg",
  "/images/unisexSearch/athletic/productTwenty.jpg",
];

const slipOnsImage: string[] = [
  "/images/unisexSearch/slipOns/product.jpg",
  "/images/unisexSearch/slipOns/productOne.jpg",
  "/images/unisexSearch/slipOns/productTwo.jpg",
  "/images/unisexSearch/slipOns/productThree.jpg",
  "/images/unisexSearch/slipOns/productFour.jpg",
  "/images/unisexSearch/slipOns/productFive.jpg",
  "/images/unisexSearch/slipOns/productSix.jpg",
  "/images/unisexSearch/slipOns/productSeven.jpg",
  "/images/unisexSearch/slipOns/productEight.jpg",
  "/images/unisexSearch/slipOns/productNine.jpg",
  "/images/unisexSearch/slipOns/productTen.jpg",
  "/images/unisexSearch/slipOns/productEleven.jpg",
  "/images/unisexSearch/slipOns/productTwelve.jpg",
  "/images/unisexSearch/slipOns/productThirteen.jpg",
  "/images/unisexSearch/slipOns/productFourteen.jpg",
  "/images/unisexSearch/slipOns/productFifteen.jpg",
  "/images/unisexSearch/slipOns/productSixteen.jpg",
  "/images/unisexSearch/slipOns/productSeventeen.jpg",
  "/images/unisexSearch/slipOns/productEighteen.jpg",
  "/images/unisexSearch/slipOns/productNineteen.jpg",
  "/images/unisexSearch/slipOns/productTwenty.jpg",
];  

export async function generateProduct(imageIndex: number): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const image = localImages[imageIndex % localImages.length];

  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    image: image,
  };
}

export async function generateProducts(count: number): Promise<Product[]> {
  const productsGenerated = await Promise.all(
    Array.from({ length: count }, (_, index) => generateProduct(index))
  );
  return productsGenerated;
}

export async function sandalsCategory(imageIndex: number): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const image = sandalsImage[imageIndex % sandalsImage.length];

  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    image: image,
  };
}

export async function sandalsProducts(count: number): Promise<Product[]> {
  const productsGenerated =await Promise.all(
    Array.from({length: count }, (_, index) => sandalsCategory(index))
  );
  return productsGenerated
}

export async function athleticCategory(imageIndex: number): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const image = athleticImage[imageIndex % athleticImage.length];

  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    image: image,
  };
}

export async function athleticProducts(count: number): Promise<Product[]> {
  const productsGenerated =await Promise.all(
    Array.from({length: count }, (_, index) => athleticCategory(index))
  );
  return productsGenerated
}

export async function slipOnsCategory(imageIndex: number): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const image = slipOnsImage[imageIndex % slipOnsImage.length];

  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    image: image,
  };
}

export async function slipOnsProducts(count: number): Promise<Product[]> {
  const productsGenerated =await Promise.all(
    Array.from({length: count }, (_, index) => slipOnsCategory(index))
  );
  return productsGenerated
}
