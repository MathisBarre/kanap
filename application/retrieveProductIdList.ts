import { getProductIdList, ProductList } from "../domain/product"
import utilizeProductFetcher from "../services/fetcherService"
import { ProductFetcherService } from "./ports"

export default async function retrieveProductIdList(
  productFetcher: ProductFetcherService = utilizeProductFetcher()
): Promise<number[]> {
  const productList: ProductList = await productFetcher.fetchAllProducts()
  const productIdList: number[] = getProductIdList(productList)

  return productIdList
}