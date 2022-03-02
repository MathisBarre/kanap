import { addCartItemInCart, Cart, CartItem } from "../domain/Cart";

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

const fakeCartItem2: CartItem = {
  product: {
    id: 2,
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
    it("should increase quantity when adding the same cart item without changing the new cart item", () => {
      // Arrange
      const cart: Cart = [fakeCartItem]

      // Act
      const updatedCart = addCartItemInCart(cart, fakeCartItem)

      // Assert
      expect(fakeCartItem.quantity).toBe(1)
      expect(updatedCart[0].quantity).toBe(2)
    })

    it("should add new cart item if there is no same cart item with same id", () => {
      // Arrange
      const cart: Cart = [fakeCartItem]

      // Act
      const updatedCart = addCartItemInCart(cart, fakeCartItem2)

      // Assert
      expect(updatedCart).toEqual([fakeCartItem, fakeCartItem2])
      expect(updatedCart).not.toEqual([fakeCartItem])
    })
  })
})