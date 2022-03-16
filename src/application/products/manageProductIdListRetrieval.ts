import { fetchAllProducts } from "../../api/products/fetchAllProducts"
import { getProductIdList, ProductList } from "../../domain/product"

export default async function retrieveProductIdList(): Promise<string[]> {
  const productList: ProductList = await fetchAllProducts()
  const productIdList: string[] = getProductIdList(productList)

  return productIdList
}