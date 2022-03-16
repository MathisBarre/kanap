import { GetStaticPaths, GetStaticProps } from "next";
import { fetchOneProduct } from "../../api/products/fetchOneProduct";
import manageProductIdListRetrieval from "../../application/products/manageProductIdListRetrieval";
import { Product } from "../../domain/product";

export { default } from "../../ui/screens/ProductScreen/ProductScreen"

export const getStaticPaths: GetStaticPaths = async () => {
  const productIdList: string[] = await manageProductIdListRetrieval();

  return {
    paths: productIdList.map((productId: string) => {
      return { params: { id: productId } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.id) throw new Error("post identifier is missing");

  let productId = context.params?.id
  if(typeof productId === "object") productId = productId[0]

  const product: Product = await fetchOneProduct(
    productId
  );

  return {
    props: {
      product,
    },
  };
};
