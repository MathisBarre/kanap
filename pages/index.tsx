import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock">
        <div className="titles">
          <h1>Nos produits</h1>
          <h2>Une gamme d&apos;articles exclusifs</h2>
        </div>
        <section className="items" id="items"> 
          <a href="./product.html?id=42">
            <article>
              <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1" />
              <h3 className="productName">Kanap name1</h3>
              <p className="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
          </a>
        </section>
      </div>
    </main>
  )
}

export default Home
