import { CartListItem } from "./CartListItem";
import {
  Cart,
  CartItem,
  getCartTotalItemsQuantity,
  getCartTotalPrice,
} from "../../../domain/cart";
import * as storage from "../../../utils/storage";
import { useEffect, useState } from "react";
import Head from "next/head";
import { titlePrefix } from "../../../core/constants";

export default function CartScreen() {
  const [cart, setCart] = useState<Cart>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  useEffect(() => {
    const cart = storage.getCart();
    setCart(cart);
    setTotalPrice(getCartTotalPrice(cart));
  }, []);

  useEffect(() => {
    setTotalPrice(getCartTotalPrice(cart));
    setTotalQuantity(getCartTotalItemsQuantity(cart));
  }, [cart]);

  return (
    <>
      <Head>
        <title>Panier {titlePrefix}</title>
      </Head>
      <main className="limitedWidthBlockContainer">
        <div className="limitedWidthBlock" id="limitedWidthBlock">
          <div className="cartAndFormContainer" id="cartAndFormContainer">
            <h1>Votre panier</h1>
            <section className="cart">
              <section id="cart__items">
                {cart.map((cartItem: CartItem) => {
                  return (
                    <CartListItem
                      cartItem={cartItem}
                      setCart={setCart}
                      key={`${cartItem.product.id}.${cartItem.color}`}
                    />
                  );
                })}
              </section>
              <div className="cart__price">
                <p>
                  Total (<span id="totalQuantity">{totalQuantity}</span>{" "}
                  articles) : <span id="totalPrice">{totalPrice}</span> €
                </p>
              </div>
              {/* <div className="cart__order">
              <form method="get" className="cart__order__form">
                <div className="cart__order__form__question">
                  <label htmlFor="firstName">Prénom: </label>
                  <input type="text" name="firstName" id="firstName" required />
                  <p id="firstNameErrorMsg">
                  </p>
                </div>
                <div className="cart__order__form__question">
                  <label htmlFor="lastName">Nom: </label>
                  <input type="text" name="lastName" id="lastName" required />
                  <p id="lastNameErrorMsg" />
                </div>
                <div className="cart__order__form__question">
                  <label htmlFor="address">Adresse: </label>
                  <input type="text" name="address" id="address" required />
                  <p id="addressErrorMsg" />
                </div>
                <div className="cart__order__form__question">
                  <label htmlFor="city">Ville: </label>
                  <input type="text" name="city" id="city" required />
                  <p id="cityErrorMsg" />
                </div>
                <div className="cart__order__form__question">
                  <label htmlFor="email">Email: </label>
                  <input type="email" name="email" id="email" required />
                  <p id="emailErrorMsg" />
                </div>
                <div className="cart__order__form__submit">
                  <input type="submit" defaultValue="Commander !" id="order" />
                </div>
              </form>
            </div> */}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
