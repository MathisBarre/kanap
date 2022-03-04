import { deepCopy } from "../utils/general";
import { getProductIdList, Product, ProductList } from "./product";

const fakeProduct: Product = {
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
}

describe("Product domain", () => {
  describe("Get list of all the id in product list", () => {
    it("should only return 1 when there is variant of the same product", () => {
      // Arrange
      const product1: Product = deepCopy(fakeProduct)
      const product2: Product = deepCopy(fakeProduct)
      product2.name = "foo"

      const productList: ProductList = [product1, product2]

      // Act
      const productIdList: number[] = getProductIdList(productList)

      // Assert
      expect(productIdList).toEqual([1])
    })

    it("should return 1,2 when there is two product", () => {
      // Arrange
      const product1: Product = deepCopy(fakeProduct)
      const product2: Product = deepCopy(fakeProduct)
      product2.name = "foo"
      const product3: Product = deepCopy(fakeProduct)
      product3.id = 3

      const productList: ProductList = [product1, product2, product3]

      // Act
      const productIdList: number[] = getProductIdList(productList)

      // Assert
      expect(productIdList).toEqual([1, 3])
    })
  })
})