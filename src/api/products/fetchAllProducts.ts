import { ProductList } from "../../domain/product";
import products from "./hardCodedProducts.data"

export async function fetchAllProducts(): Promise<ProductList> {
  return products
}
