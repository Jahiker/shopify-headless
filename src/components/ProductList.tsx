import { ProductCard } from "./";

import { Edge } from "../models/Product";

import { useProduct } from "../hooks/useProduct";

export const ProductList = () => {
  const { productList } = useProduct();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {productList.map((product: Edge) => (
        <ProductCard key={product.node.id} product={product.node} />
      ))}
    </div>
  );
};
