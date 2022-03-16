import { deepCopy } from "../utils/functions"
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

  if (newCartItem.color === "") throw new Error("EMPTY_COLOR | Cart item color should not be empty")

  const isCartItemAlreadyInCart: boolean = cart.some((cartItem) => {
    return cartItem.product.id === newCartItem.product.id && cartItem.color === newCartItem.color
  })

  if (isCartItemAlreadyInCart) {
    const indexCartItemToUpdate: number = cart.findIndex((cartItem) => {
      return cartItem.product.id === newCartItem.product.id
    })

    cart[indexCartItemToUpdate].quantity += newCartItem.quantity
  } else {
    cart.push(newCartItem)
  }

  return cart
}

export function findCartItemIndex(cart: Cart, cartItem: CartItem): number {
  return cart.findIndex((ci: CartItem) => {
    return ci.product.id === cartItem.product.id && ci.color === cartItem.color
  })
}

export function updateCartItemQuantity(cart: Cart, cartItem: CartItem, newQuantity: number): Cart {
  const updatedCartItemIndex = findCartItemIndex(cart, cartItem)
  cart[updatedCartItemIndex].quantity = newQuantity
  return cart
}