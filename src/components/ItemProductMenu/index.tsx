import { ShoppingCartIcon } from "lucide-react";
import { Product } from "../../types/typesMenuPage";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { numberToBRL } from "../../utius";

type ItemProductProps = {
  product: Product;
};

export const ItemProductMenu = ({ product }: ItemProductProps) => {
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className="flex gap-2 w-full">
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="max-w-28 min-w-28 object-cover h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
      />
      <div className="w-full h-full">
        <p className="font-bold">{product.name}</p>
        {product.desc && <p className="text-sm line-clamp-2">{product.desc}</p>}
        <div className="flex items-center gap-2 justify-between mt-3">
          <p>{numberToBRL(product.price)}</p>
          <button
            onClick={() => addItemToCart(product)}
            type="button"
            title="add item to cart"
            className="bg-gray-800 hover:bg-red-500 transition-colors duration-200 add-to-cart-btn px-4 py-0.5 rounded-lg text-white"
          >
            <ShoppingCartIcon size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};
