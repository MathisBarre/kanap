import { addCartItemInCart, Cart, CartItem } from "./cart";
import { deepCopy } from "../utils/functions";

const fakeCartItem: CartItem = {
  product: {
    id: 1,
    name: "name",
    description: "description",
    imageUrl: "/images/canape.jpeg",
    altTxt: "altTxt",
    colors: [
      "color1",
      "color2",
    ],
    price: 123
  },
  color: "color1",
  quantity: 1
}

describe("Cart domain", () => {
  describe("Add cart item into cart", () => {
    it("should increase quantity when adding the same cart item", () => {
      // Arrange
      const cart: Cart = [deepCopy(fakeCartItem)]

      // Act
      let updatedCart = addCartItemInCart(cart, deepCopy(fakeCartItem))

      // Assert
      expect(updatedCart[0].quantity).toBe(2)
    })

    it("should increase quantity when adding the same cart item with 16 quantity", () => {
      // Arrange
      const cartItem: CartItem = deepCopy(fakeCartItem)
      cartItem.quantity = 16
      const cart: Cart = [deepCopy(fakeCartItem)]

      // Act
      let updatedCart = addCartItemInCart(cart, cartItem)

      // Assert
      expect(updatedCart[0].quantity).toBe(17)
    })

    it("should not increase quantity when adding the same cart item with 0 quantity", () => {
      // Arrange
      const cartItem: CartItem = deepCopy(fakeCartItem)
      cartItem.quantity = 0
      const cart: Cart = [deepCopy(fakeCartItem)]

      // Act
      let updatedCart = addCartItemInCart(cart, cartItem)

      // Assert
      expect(updatedCart[0].quantity).toBe(1)
    })

    it("should not alterate params", () => {
      // Arrange
      const cart: Cart = [deepCopy(fakeCartItem)]

      // Act
      const updatedCart = addCartItemInCart(cart, fakeCartItem)

      // Assert
      expect(fakeCartItem.quantity).toBe(1)
      expect(updatedCart[0].quantity).toBe(2)
    })

    it("should add new cart item if there is no same cart item with same id", () => {
      // Arrange
      const cart: Cart = [deepCopy(fakeCartItem)]
      const cartItemWithDifferentId: CartItem = deepCopy(fakeCartItem)
      cartItemWithDifferentId.product.id = 2

      // Act
      const updatedCart = addCartItemInCart(cart, cartItemWithDifferentId)

      // Assert
      expect(updatedCart).toEqual([fakeCartItem, cartItemWithDifferentId])
    })

    it("should add new cart item if there is no same cart item with same id and color", () => {
      // Arrange
      const cart: Cart = [deepCopy(fakeCartItem)]
      const cartItemWithDifferentColor: CartItem = deepCopy(fakeCartItem)
      cartItemWithDifferentColor.color = "orange"

      // Act
      const updatedCart = addCartItemInCart(cart, cartItemWithDifferentColor)

      // Assert
      expect(updatedCart).toEqual([fakeCartItem, cartItemWithDifferentColor])
    })

    it("should throw error if no selected color", () => {
      expect.assertions(1)

      // Arrange
      const cart: Cart = [deepCopy(fakeCartItem)]
      const cartItemWithDifferentColor: CartItem = deepCopy(fakeCartItem)
      cartItemWithDifferentColor.color = ""

      try {
        // Act
        addCartItemInCart(cart, cartItemWithDifferentColor)
      } catch (error: any) {
        // Assert
        expect(error?.message.startsWith("EMPTY_COLOR")).toBe(true)
      }
    })
  })
})