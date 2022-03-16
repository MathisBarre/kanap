import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import manageCartItemAddition from "../../../application/cart/manageCartItemAddition";
import { CartItem } from "../../../domain/cart";
import { Product } from "../../../domain/product";

interface ProductScreenProps {
  product: Product;
}

export default function ProductScreen({ product }: ProductScreenProps) {
  const router = useRouter()

  function onAddProductButton() {
    const newCartItem: CartItem = {
      product,
      quantity: selectedQuantity,
      color: selectedColor,
    };

    try {
      manageCartItemAddition(newCartItem);
      router.push("/panier")
    } catch(error) {
      console.error(error)
    }
  }

  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>("");

  return (
    <>
      <Head>
        <title>Canapé {product.name} - Kanap par Openclassrooms</title>
      </Head>
      <main className="limitedWidthBlockContainer">
        <div className="limitedWidthBlock">
          <section className="item">
            <article>
              <div className="item__img">
                <Image
                  height={670}
                  width={670}
                  src={product.imageUrl}
                  alt={product.altTxt}
                />
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
                    <select value={selectedColor} name="color-select" id="colors" onChange={(e) => setSelectedColor(e.target.value)}>
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
                      value={selectedQuantity}
                      onChange={(e) => setSelectedQuantity(parseInt(e.target.value, 10))}
                      id="quantity"
                    />
                  </div>
                </div>
                <div className="item__content__addButton">
                  <button id="addToCart" onClick={() => onAddProductButton()}>
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}