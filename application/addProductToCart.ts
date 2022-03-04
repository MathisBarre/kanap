import { addCartItemInCart, Cart, CartItem } from "../domain/cart";
import { utilizeCartStorage } from "../services/storageAdaptater";
import { CartStorageService } from "./ports";

export default function addProductToCart(
  cartItem: CartItem,
  cartStorage: CartStorageService = utilizeCartStorage()
  ) {
  const cart: Cart = cartStorage.getCart()

  const updatedCart: Cart = addCartItemInCart(cart, cartItem)

  cartStorage.setCart(updatedCart)
}