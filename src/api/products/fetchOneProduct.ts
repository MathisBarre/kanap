import { Product } from "../../domain/product";
import products from "./hardCodedProducts.data"

export async function fetchOneProduct(id: string): Promise<Product> {
  return products.filter((product) => product.id === id)[0]
}