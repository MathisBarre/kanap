import { GetStaticProps } from "next"
import { fetchAllProducts } from "../api/products/fetchAllProducts"
import { ProductList } from "../domain/product"

export { default } from "../ui/screens/HomeScreen/HomeScreen"

export const getStaticProps: GetStaticProps = async () => {
  const productList: ProductList = await fetchAllProducts()

  return {
    props: {
      productList
    }
  }
}