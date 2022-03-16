import { Cart, CartItem } from "../../domain/cart"
import * as storage from "../../utils/storage"

export default function manageCartItemQuantityUpdate(cartItem: CartItem, selectedQuantity: number) {
  const cart: Cart = storage.getCart()

  // exract cartItem
  const indexToExtract = cart.findIndex((ci: CartItem) => {
    return ci.product.id === cartItem.product.id && ci.color === cartItem.color
  })

  cart[indexToExtract].quantity = selectedQuantity 

  storage.setCart(cart)
}