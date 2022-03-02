import { getProductIdList, ProductList } from "../domain/Product"
import utilizeProductFetcher from "../services/fetcherService"
import { ProductFetcherService } from "./ports"

const productFetcherService: ProductFetcherService = utilizeProductFetcher()

export default async function retrieveProductIdList(): Promise<number[]> {
  const productList: ProductList = await productFetcherService.fetchAllProducts()
  const productIdList: number[] = getProductIdList(productList)

  return productIdList
}