import { CartStorageService } from "../application/ports";
import { Cart } from "../domain/cart";

export function utilizeCartStorage(): CartStorageService {
  return {
    getCart() {
      const cartString = localStorage.getItem("cart") || "[]"
      const cart: Cart = JSON.parse(cartString) as Cart
      return cart
    },
    setCart(cart: Cart) {
      localStorage.setItem("cart", JSON.stringify(cart))
    },
  }
}