import { fetchAllProducts } from "../../api/products/fetchAllProducts"
import { getProductIdList, ProductList } from "../../domain/product"

export default async function retrieveProductIdList(): Promise<number[]> {
  const productList: ProductList = await fetchAllProducts()
  const productIdList: number[] = getProductIdList(productList)

  return productIdList
}