import { Cart, CartItem, updateCartItemQuantity } from "../../domain/cart"
import * as storage from "../../utils/storage"

export default function manageCartItemQuantityUpdate(cartItem: CartItem, newQuantity: number) {
  const cart: Cart = storage.getCart()

  const updatedCart = updateCartItemQuantity(cart, cartItem, newQuantity)

  storage.setCart(updatedCart)
}