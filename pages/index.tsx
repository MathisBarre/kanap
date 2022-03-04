import { GetStaticProps } from 'next'
import Head from 'next/head'
import { ProductFetcherService } from '../application/ports'
import ProductItem from '../components/ProductItem'
import { Product, ProductList } from '../domain/product'
import utilizeProductFetcher from '../services/fetcherService'

interface HomeProps {
  productList: ProductList
}

export default function Home({ productList }: HomeProps) {
  return (
    <>
      <Head>
        <title>Kanap par Openclassrooms</title>
      </Head>
      <main className="limitedWidthBlockContainer">
        <div className="limitedWidthBlock">
          <div className="titles">
            <h1>Nos produits</h1>
            <h2>Une gamme d&apos;articles exclusifs</h2>
          </div>
          <section className="items" id="items"> 
            {productList.map((product: Product) => {
              return <ProductItem key={product.id} product={product} />
            })}
          </section>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const ProductFetcherService: ProductFetcherService = utilizeProductFetcher()
  const productList: ProductList = await ProductFetcherService.fetchAllProducts()

  return {
    props: {
      productList
    }
  }
}