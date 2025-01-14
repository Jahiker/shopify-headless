import { Link } from "react-router";
export const ProductCard = ({ product }: any) => {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={product.featuredImage.url}
        alt={product.title}
      />
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">{product.title}</h2>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
        <div className="mt-4">
          <span className="text-indigo-600 font-medium">
            ${product.priceRange.minVariantPrice.amount} - $
            {product.priceRange.maxVariantPrice.amount}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Link to={`/product/${product.handle}`} className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
            View Product
          </Link>
          <span className="text-sm text-gray-600">{product.vendor}</span>
        </div>
      </div>
    </div>
  );
};
