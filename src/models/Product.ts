export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  vendor: string;
  tags: string[];
  priceRange: PriceRange;
  featuredImage: FeaturedImage;
}

export interface FeaturedImage {
  url: string;
}

export interface PriceRange {
  minVariantPrice: VariantPrice;
  maxVariantPrice: VariantPrice;
}

export interface VariantPrice {
  amount: string;
}

export interface ProductEdges {
  edges: Edge[];
}

export interface Edge {
  node: Product;
}
