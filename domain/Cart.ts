import { Product } from "./Product"

export type CartItem = {
  product: Product,
  color: string,
  quantity: number
}

export type Cart = CartItem[]

export function addCartItemInCart(cart: Cart, newCartItem: CartItem) {
  const isCartItemAlreadyInCart: boolean = cart.some((cartItem) => {
    return cartItem.product.id === newCartItem.product.id && cartItem.color === newCartItem.color
  })

  if (isCartItemAlreadyInCart) {
    const indexCartItemToUpdate: number = cart.findIndex((cartItem) => {
      cartItem.product.id === newCartItem.product.id
    })

    cart[indexCartItemToUpdate].quantity += 1
  } else {
    cart.push(newCartItem)
  }

  return cart
}