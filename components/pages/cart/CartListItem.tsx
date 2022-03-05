import { useState } from "react";
import { CartItem } from "../../../domain/cart";

interface CartListItemProps {
  cartItem: CartItem
}

export function CartListItem({ cartItem }: CartListItemProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(cartItem.quantity)
  
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
            />
          </div>
          <div className="cart__item__content__settings__delete">
            <p className="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>
  );
}
