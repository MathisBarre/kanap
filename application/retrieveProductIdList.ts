import { getProductIdList, ProductList } from "../domain/product"
import productFetcherService from "../services/productFetcher"
import productFetcher from "../services/productFetcher"
import { ProductFetcher } from "./ports"

export default async function retrieveProductIdList(
  productFetcher: ProductFetcher = productFetcherService
): Promise<number[]> {
  const productList: ProductList = await productFetcher.fetchAllProducts()
  const productIdList: number[] = getProductIdList(productList)

  return productIdList
}