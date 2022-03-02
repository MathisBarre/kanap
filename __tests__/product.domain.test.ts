import { getProductIdList, ProductList } from "../domain/product";

describe("Product domain", () => {
  describe("Get list of all the id in product list", () => {
    it("should only return 1 when there is variant of the same product", () => {
      // Arrange
      const productList: ProductList = [{
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
      },{
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
      }]

      // Act
      const productIdList: number[] = getProductIdList(productList)

      // Assert
      expect(productIdList).toEqual([1])
    })

    it("should return 1,2 when there is two product", () => {
      // Arrange
      const productList: ProductList = [{
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
      },{
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
      }, {
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
      }]

      // Act
      const productIdList: number[] = getProductIdList(productList)

      // Assert
      expect(productIdList).toEqual([1, 2])
    })
  })
})