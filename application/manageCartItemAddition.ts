import { addCartItemInCart, Cart, CartItem } from "../domain/cart";
import { cartStorageAdaptater } from "../adaptaters/storageAdaptater";
import { CartStorage, Notifier } from "./ports";
import notifierAdaptater from "../adaptaters/notifierAdapter";

export default function manageCartItemAddition(
  cartItem: CartItem,
  cartStorage: CartStorage = cartStorageAdaptater,
  notifier: Notifier = notifierAdaptater
): void {
  const cart: Cart = cartStorage.getCart();

  let updatedCart: Cart;

  try {
    updatedCart = addCartItemInCart(cart, cartItem);
  } catch (error: any) {
    if (error?.message.startsWith("EMPTY_COLOR"))
      notifier.notify("Il est obligatoire de saisire une couleur");

    throw error;
  }

  cartStorage.setCart(updatedCart);
}
