import { CartListItem } from "./CartListItem";
import { Cart, CartItem } from "../../../domain/cart";
import * as storage from "../../../utils/storage";
import { useEffect, useState } from "react";

export default function CartScreen() {
  const [cart, setCart] = useState<Cart>([])

  useEffect(() => {
    setCart(storage.getCart())
  }, [])

  return (
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
                Total (<span id="totalQuantity">{/* 2 */}</span> articles) :{" "}
                <span id="totalPrice">{/* 84,00 */}</span> €
              </p>
            </div>
            <div className="cart__order">
              <form method="get" className="cart__order__form">
                <div className="cart__order__form__question">
                  <label htmlFor="firstName">Prénom: </label>
                  <input type="text" name="firstName" id="firstName" required />
                  <p id="firstNameErrorMsg">
                    {/* ci est un message d'erreur */}
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
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
