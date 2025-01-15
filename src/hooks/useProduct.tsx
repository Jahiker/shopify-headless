import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const client = createStorefrontApiClient({
  storeDomain: "http://jr-dev-shop.myshopify.com",
  apiVersion: "2025-01",
  publicAccessToken: "55bd7114f53be379b89466c44664bb3e",
});

export const useProduct = () => {
  const [product, setProduct] = useState(null);
  const [productList, setProductList] = useState([]);
  const [handle, setHandle] = useState("");

  const location = useLocation();

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
    }
`;

  const productQuery = `
    query ProductQuery($handle: String) {
      product(handle: $handle) {
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
  `;

  const getProductList = async () => {
    const { data } = await client.request(productListQuery, {});

    if (!data) return;

    console.log("productList", data);

    setProductList(data.products.edges);
  };

  const getProduct = async ({ handle }: { handle: string }) => {
    const { data } = await client.request(productQuery, {
      variables: {
        handle,
      },
    });

    if (!data) return;

    console.log("getProduct", data);

    setProduct(data.product);
  };

  useEffect(() => {
    getProductList();
  }, []);

  useEffect(() => {
    if (!handle) {
      setHandle(location.pathname.split("/")[2]);
      return;
    }

    getProduct({ handle });
  }, [handle, location.pathname]);

  return { product, productList };
};
