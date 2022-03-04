import { Cart } from "../domain/cart";
import { Product, ProductList } from "../domain/product";

export interface ProductFetcherService {
  fetchOneProduct(id: number): Promise<Product>
  fetchAllProducts(): Promise<ProductList>
}

export interface CartStorageService {
  getCart(): Cart
  setCart(cart: Cart): void
  updateCart(cart: Cart): void
}