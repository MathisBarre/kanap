import Image from "next/image";
import Link from "next/link";
import { Product } from "../domain/product";

interface ProductProps {
  product: Product
}

export default function ProductItem({ product }: ProductProps) {
  return (
    <Link href={`/produits/${encodeURIComponent(product.id)}`}>
      <a>
        <article>
          <Image
            src={product.imageUrl}
            alt={product.altTxt}
            height={160}
            width={160}
          />
          <h3 className="productName">{product.name}</h3>
          <p className="productDescription">
            {product.description}
          </p>
        </article>
      </a>
    </Link>
  );
}
