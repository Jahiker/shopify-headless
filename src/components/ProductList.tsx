import { useState, useEffect } from "react";
import { ProductCard } from "./";

interface ProductListProps {
  client: any;
}

export const ProductList = ({ client }: ProductListProps) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productListQuery = `{
        products(first:20) {
            edges {
                node {
                    id,
                    title,
                    handle,
                    description,
                    vendor,
                    tags,
                    handle,
                    priceRange { 
                        minVariantPrice {
                            amount}, 
                        maxVariantPrice {
                            amount
                        }
                    },
                    featuredImage {
                        url
                    }
                }
            }
        }
    }`;

    const { data, errors, extensions } = await client.request(productListQuery, {
      variables: {
        handle: "sample-product",
      },
    });

    console.log({ data, errors, extensions });

    if (!data) return;

    setProducts(data.products.edges);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product: any) => (
        <ProductCard key={product.node.id} product={product.node} />
      ))}
    </div>
  );
};
