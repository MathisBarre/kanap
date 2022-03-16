import { GetStaticPaths, GetStaticProps } from "next";
import { fetchOneProduct } from "../../api/products/fetchOneProduct";
import manageProductIdListRetrieval from "../../application/products/manageProductIdListRetrieval";
import { Product } from "../../domain/product";

export { default } from "../../ui/screens/ProductScreen/ProductScreen"

export const getStaticPaths: GetStaticPaths = async () => {
  const productIdList: number[] = await manageProductIdListRetrieval();

  return {
    paths: productIdList.map((productId: number) => {
      return { params: { id: productId.toString() } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.id) throw new Error("post identifier is missing");

  const productId: number = parseInt(context.params?.id as string, 10);
  const product: Product = await fetchOneProduct(
    productId
  );

  return {
    props: {
      product,
    },
  };
};
