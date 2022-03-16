import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import manageCartItemDelete from "../../../application/cart/manageCartItemDelete";
import manageCartItemQuantityUpdate from "../../../application/cart/manageCartItemQuantityUpdate";
import { Cart, CartItem } from "../../../domain/cart";

interface CartListItemProps {
  cartItem: CartItem
  setCart: Dispatch<SetStateAction<Cart>>
}

export function CartListItem({ cartItem, setCart }: CartListItemProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(cartItem.quantity)

  function onQuantityUpdate(event: ChangeEvent<HTMLInputElement>) {
    const newQuantity: number = parseInt(event.target.value, 10)

    setSelectedQuantity(newQuantity)
    manageCartItemQuantityUpdate(cartItem, newQuantity)
  }

  function onDelete() {
    const updatedCart = manageCartItemDelete(cartItem)
    setCart(updatedCart)
  }
  
  return (
    <article
      className="cart__item"
      data-id="{product-ID}"
      data-color="{product-color}"
    >
      <div className="cart__item__img">
        <img src={cartItem.product.imageUrl} alt="Photographie d'un canapé" />
      </div>
      <div className="cart__item__content">
        <div className="cart__item__content__description">
          <h2>{cartItem.product.name}</h2>
          <p>{cartItem.color}</p>
          <p>{cartItem.product.price} €</p>
        </div>
        <div className="cart__item__content__settings">
          <div className="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input
              type="number"
              className="itemQuantity"
              name="itemQuantity"
              min={1}
              max={100}
              value={selectedQuantity}
              onChange={(e) => onQuantityUpdate(e)}
            />
          </div>
          <div className="cart__item__content__settings__delete">
            <p className="deleteItem" onClick={() => onDelete()}>Supprimer</p>
          </div>
        </div>
      </div>
    </article>
  );
}
