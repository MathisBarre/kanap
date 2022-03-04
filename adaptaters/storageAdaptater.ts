import { CartStorage } from "../application/ports";
import { Cart } from "../domain/cart";

export const cartStorageAdaptater: CartStorage = {
  getCart() {
    const cartString = localStorage.getItem("cart") || "[]"
    const cart: Cart = JSON.parse(cartString) as Cart
    return cart
  },

  setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
  },
}