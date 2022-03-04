import { Cart } from "../domain/cart";
import { Product, ProductList } from "../domain/product";

export interface ProductFetcher {
  fetchOneProduct(id: number): Promise<Product>
  fetchAllProducts(): Promise<ProductList>
}

export interface CartStorage {
  getCart(): Cart
  setCart(cart: Cart): void
}

export interface Notifier {
  notify(str: string): void
}