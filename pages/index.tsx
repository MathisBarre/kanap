import type { NextPage } from 'next'
import ProductItem from '../components/ProductItem'

const Home: NextPage = () => {
  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock">
        <div className="titles">
          <h1>Nos produits</h1>
          <h2>Une gamme d&apos;articles exclusifs</h2>
        </div>
        <section className="items" id="items"> 
          <ProductItem />
        </section>
      </div>
    </main>
  )
}

export default Home
