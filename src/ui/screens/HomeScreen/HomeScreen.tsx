import Head from 'next/head'
import ProductItem from '../../../ui/screens/HomeScreen/ProductCard'
import { Product, ProductList } from '../../../domain/product'
import { titlePrefix } from '../../../core/constants'

interface HomeScreenProps {
  productList: ProductList
}

export default function HomeScreen({ productList }: HomeScreenProps) {
  return (
    <>
      <Head>
        <title>Nos produits {titlePrefix}</title>
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