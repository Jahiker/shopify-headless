import { createStorefrontApiClient } from "@shopify/storefront-api-client";

import { Hero, ProductList } from "../components";

const client = createStorefrontApiClient({
  storeDomain: "http://jr-dev-shop.myshopify.com",
  apiVersion: "2025-01",
  publicAccessToken: "55bd7114f53be379b89466c44664bb3e",
});

export const Home = () => {
  return (
    <div>
      <Hero />
      <ProductList client={client} />
    </div>
  );
};
