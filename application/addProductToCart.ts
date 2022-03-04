import { addCartItemInCart, Cart, CartItem } from "../domain/cart";
import { cartStorageAdaptater } from "../adaptaters/storageAdaptater";
import { CartStorage, Notifier } from "./ports";
import notifierAdaptater from "../adaptaters/notifierAdapter";

export default function addProductToCart(
  cartItem: CartItem,
  cartStorage: CartStorage = cartStorageAdaptater,
  notifier: Notifier = notifierAdaptater
) {
  const cart: Cart = cartStorage.getCart();

  let updatedCart: Cart;

  try {
    updatedCart = addCartItemInCart(cart, cartItem);
  } catch (error: any) {
    if (error?.message.startsWith("EMPTY_COLOR")) {
      return notifier.notify("Il est obligatoire de saisire une couleur")
    }
    throw error
  }

  cartStorage.setCart(updatedCart);
}
