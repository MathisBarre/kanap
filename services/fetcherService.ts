import { productFetcherService } from "../application/ports";

export default function utilizeProductFetcher(): productFetcherService {
  return {
    async fetchOneProduct(id) {
      return {
        name: "name",
        description: "description",
        imageUrl: "imageUrl",
      }
    },

    async fetchAllProducts() {
      return [{
        name: "name",
        description: "description",
        imageUrl: "imageUrl",
      }]
    }
  }
}