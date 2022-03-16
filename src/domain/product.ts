import { uniq } from "../utils/functions"

export type Product = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  altTxt: string
  colors: string[]
}

export type ProductList = Product[]

export function getProductIdList(productList: ProductList): number[] {
  const productIdList = productList.map((product: Product) => product.id)
  return uniq(productIdList)
}