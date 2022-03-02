import { Cart } from "../domain/Cart";
import { Product, ProductList } from "../domain/Product";

export interface ProductFetcherService {
  fetchOneProduct(id: number): Promise<Product>
  fetchAllProducts(): Promise<ProductList>
}

export interface CartStorageService {
  cart: Cart
}