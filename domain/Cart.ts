import { deepCopy } from "../utils/general"
import { Product } from "./product"

export type CartItem = {
  product: Product,
  color: string,
  quantity: number
}

export type Cart = CartItem[]

export function addCartItemInCart(initialCart: Cart, initialNewCartItem: CartItem): Cart {
  const cart: Cart = deepCopy(initialCart)
  const newCartItem: CartItem = deepCopy(initialNewCartItem)

  if (newCartItem.color === "") throw new Error("Cart item color should not be empty")

  const isCartItemAlreadyInCart: boolean = cart.some((cartItem) => {
    return cartItem.product.id === newCartItem.product.id && cartItem.color === newCartItem.color
  })

  if (isCartItemAlreadyInCart) {
    const indexCartItemToUpdate: number = cart.findIndex((cartItem) => {
      return cartItem.product.id === newCartItem.product.id
    })

    cart[indexCartItemToUpdate].quantity += 1
  } else {
    cart.push(newCartItem)
  }

  return cart
}