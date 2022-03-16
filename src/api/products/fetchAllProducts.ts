import { ProductList } from "../../domain/product";

export async function fetchAllProducts(): Promise<ProductList> {
  return [
    {
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
    },
    {
      id: 2,
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
  ]
}