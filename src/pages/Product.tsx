import { useProduct } from "../hooks/useProduct";
import { Product as ProdudctEdge } from "../models/Product";

export const Product = () => {
  const { product } : { product: ProdudctEdge } = useProduct();

  return (
    <div className="pt-[100px]">
      {product && (
        <div>
          <figure>
            <img src={product.featuredImage.url} alt={product.title} />
          </figure>
          <h1>{product?.title}</h1>
        </div>
      )}
    </div>
  );
};
