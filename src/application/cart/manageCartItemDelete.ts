import { Cart, CartItem, deleteCartItem } from "../../domain/cart"
import * as storage from "../../utils/storage"

export default function manageCartItemDelete(cartItem: CartItem): Cart {
  const cart: Cart = storage.getCart()

  const updatedCart = deleteCartItem(cart, cartItem)

  storage.setCart(updatedCart)
  return updatedCart
}