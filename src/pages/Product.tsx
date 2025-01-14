import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const client = createStorefrontApiClient({
  storeDomain: "http://jr-dev-shop.myshopify.com",
  apiVersion: "2025-01",
  publicAccessToken: "55bd7114f53be379b89466c44664bb3e",
});

export const Product = () => {
  const [product, setProduct] = useState(null);
  const [handle, setHandle] = useState("");

  const location = useLocation();

  const getProduct = async ({ handle }: any) => {
    const productQuery = `
    query ProductQuery($handle: String) {
      product(handle: $handle) {
        id,
        title,
        handle,
        featuredImage {
          url
        }
      }
    }
  `;

    const { data, errors, extensions } = await client.request(productQuery, {
      variables: {
        handle,
      },
    });

    console.log("data", data.product);

    setProduct(data.product);
  };

  useEffect(() => {
    if (!handle) {
      setHandle(location.pathname.split("/")[2]);
      return;
    }

    getProduct({ handle });
  }, [handle, location.pathname]);

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
