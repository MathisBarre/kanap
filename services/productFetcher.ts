import { ProductFetcher } from "../application/ports";

const productFetcherService: ProductFetcher = {
    async fetchOneProduct(id) {
      return {
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
    },

    async fetchAllProducts() {
      return [
        {
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
        {
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
        }
      ]
    }
}

export default productFetcherService