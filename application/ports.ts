import { Product, ProductList } from "../domain/Product";

export interface productFetcherService {
  fetchOneProduct(id: number): Promise<Product>
  fetchAllProducts(): Promise<ProductList>
}