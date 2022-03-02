import { productFetcherService } from "../application/ports";

export default function utilizeProductFetcher(): productFetcherService {
  return {
    async fetchOneProduct(id) {
      return {
        id: 1,
        name: "name",
        description: "description",
        imageUrl: "/images/canape.jpeg",
      }
    },

    async fetchAllProducts() {
      return [
        {
          id: 1,
          name: "name",
          description: "description",
          imageUrl: "/images/canape.jpeg",
        },
        {
          id: 2,
          name: "name",
          description: "description",
          imageUrl: "/images/canape.jpeg",
        }
      ]
    }
  }
}