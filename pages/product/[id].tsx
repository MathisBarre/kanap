import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ProductFetcherService } from "../../application/ports";
import retrieveProductIdList from "../../application/retrieveProductIdList";
import { Product } from "../../domain/Product";
import utilizeProductFetcher from "../../services/fetcherService";

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  console.log(product);
  return (
    <>
      <Head>
        <title>
          Canapé {product.name} - Kanap par Openclassrooms
        </title>
      </Head>
      <main className="limitedWidthBlockContainer">
        <div className="limitedWidthBlock">
          <section className="item">
            <article>
              <div className="item__img">
                <img src={product.imageUrl} alt={product.altTxt} />
              </div>
              <div className="item__content">
                <div className="item__content__titlePrice">
                  <h1 id="title">{product.name}</h1>
                  <p>
                    Prix : <span id="price">{product.price}</span>€
                  </p>
                </div>
                <div className="item__content__description">
                  <p className="item__content__description__title">
                    Description :
                  </p>
                  <p id="description">{product.description}</p>
                </div>
                <div className="item__content__settings">
                  <div className="item__content__settings__color">
                    <label htmlFor="color-select">Choisir une couleur :</label>
                    <select name="color-select" id="colors">
                      <option value="">--SVP, choisissez une couleur --</option>
                      {product.colors.map((color: string) => {
                        return (
                          <option key={color} value={color}>
                            {color}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="item__content__settings__quantity">
                    <label htmlFor="itemQuantity">
                      Nombre d&apos;article(s) (1-100) :
                    </label>
                    <input
                      type="number"
                      name="itemQuantity"
                      min={1}
                      max={100}
                      defaultValue={0}
                      id="quantity"
                    />
                  </div>
                </div>
                <div className="item__content__addButton">
                  <button id="addToCart">Ajouter au panier</button>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const productIdList: number[] = await retrieveProductIdList();

  return {
    paths: productIdList.map((productId: number) => {
      return { params: { id: productId.toString() } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productFetcherService: ProductFetcherService = utilizeProductFetcher();

  if (!context.params?.id) throw new Error("post identifier is missing");

  const productId: number = parseInt(context.params?.id as string, 10);
  const product: Product = await productFetcherService.fetchOneProduct(
    productId
  );

  return {
    props: {
      product,
    },
  };
};