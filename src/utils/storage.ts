import { Cart } from "../domain/cart"

export function getCart(): Cart {
  const cartString = localStorage.getItem("cart") || "[]"
  const cart: Cart = JSON.parse(cartString) as Cart
  return cart
}

export function setCart(cart: Cart): void {
  localStorage.setItem("cart", JSON.stringify(cart))
}
