import { addCartItemInCart, Cart, CartItem } from "../../domain/cart";
import { notify } from "../../utils/notifier";
import { getCart, setCart } from "../../utils/storage";

export default function manageCartItemAddition(cartItem: CartItem): void {
  const cart: Cart = getCart();

  let updatedCart: Cart;

  try {
    updatedCart = addCartItemInCart(cart, cartItem);
  } catch (error: any) {
    if (error?.message.startsWith("EMPTY_COLOR"))
      notify("Il est obligatoire de saisire une couleur");

    throw error;
  }

  setCart(updatedCart);
}
