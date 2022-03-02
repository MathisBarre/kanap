import { GetStaticProps } from 'next'
import { productFetcherService } from '../application/ports'
import ProductItem from '../components/ProductItem'
import { Product, ProductList } from '../domain/Product'
import utilizeProductFetcher from '../services/fetcherService'

interface HomeProps {
  productList: ProductList
}

export default function Home({ productList }: HomeProps) {
  console.log(productList)
  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock">
        <div className="titles">
          <h1>Nos produits</h1>
          <h2>Une gamme d&apos;articles exclusifs</h2>
        </div>
        <section className="items" id="items"> 
          {productList.map((product: Product) => {
            return <ProductItem key={product.name} product={product} />
          })}
        </section>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const productFetcherService: productFetcherService = utilizeProductFetcher()
  const productList: ProductList = await productFetcherService.fetchAllProducts()

  return {
    props: {
      productList
    }
  }
}