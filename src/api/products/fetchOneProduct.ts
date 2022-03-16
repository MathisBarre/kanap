import { Product } from "../../domain/product";

export async function fetchOneProduct(id: number): Promise<Product> {
  return {
    id: 1,
    name: "name",
    description: "description",
    imageUrl: "/images/canape.jpeg",
    altTxt: "altTxt",
    colors: [
      "color1",
      "color2",
    ],
    price: 123
  }
}