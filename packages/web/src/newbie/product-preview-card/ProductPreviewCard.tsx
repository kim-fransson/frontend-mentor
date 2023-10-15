import { Product } from "./env";
import { Suspense, lazy } from "react";
import Cart from "./assets/icon-cart.svg?react";
import { ImageSkeleton } from "./components/Image/Image";
import { delay } from "../../utils/delay";

export interface ProductPreviewCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductPreviewCard = ({
  product,
  onAddToCart,
}: ProductPreviewCardProps) => {
  const { category, title, description, currentPrice, oldPrice, image } =
    product;
  const LazyImage = lazy(() => import("./components/Image/Image"));

  return (
    <article
      className="grid lg:grid-cols-2 max-w-xl
     rounded-lg overflow-hidden bg-white font-montserrat "
    >
      <div className="p-6 lg:p-8 flex flex-col gap-5 lg:justify-around bg-white">
        <header className="flex flex-col gap-3">
          <h2 className="uppercase font-medium text-gray-500 text-[14px] tracking-[0.3em]">
            {category}
          </h2>
          <h3 className="capitalize text-3xl font-bold text-gray-800 font-fraunces">
            {title}
          </h3>
          <p className="text-[14px] font-medium text-gray-500">{description}</p>
        </header>
        <div className="relative font-fraunces">
          <span className="text-3xl text-emerald-700 font-bold">
            ${currentPrice}
          </span>
          {oldPrice !== currentPrice && (
            <span className="absolute top-1/2 left-[9rem] -translate-y-1/2 text-[14px] font-medium text-gray-500 line-through decoration-line decoration-1">
              ${oldPrice}
            </span>
          )}
        </div>
        <button
          className="group py-3 border-2 border-transparent rounded-lg flex gap-2 items-center justify-center text-[14px] font-medium text-gray-100 bg-emerald-700 transition-all duration-200 ease-in-out active:scale-95 active:bg-emerald-800 hover:bg-emerald-600 focus-visible:outline-none focus-visible:border-gray-900"
          onClick={() => onAddToCart(product)}
        >
          <Cart className="group-hover:animate-bounce group-hover:animate-infinite group-hover:animate-duration-1000 group-hover:animate-ease-out group-hover:animate-delay-200" />
          Add to Cart
        </button>
      </div>
      <Suspense fallback={<ImageSkeleton />}>
        <LazyImage image={image} />
      </Suspense>
    </article>
  );
};
