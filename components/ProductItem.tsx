import Link from "next/link";

export default function ProductItem() {
  return (
    <Link href="/product?id=42">
      <a>
        <article>
          <img
            src=".../product01.jpg"
            alt="Lorem ipsum dolor sit amet, Kanap name1"
          />
          <h3 className="productName">Kanap name1</h3>
          <p className="productDescription">
            Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim
            malesuada risus sapien gravida nulla nisl arcu.
          </p>
        </article>
      </a>
    </Link>
  );
}
