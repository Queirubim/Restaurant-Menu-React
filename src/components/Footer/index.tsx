import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/cart";

export const Footer = () => {
  const { toggleCart, totalItems } = useContext(CartContext);
  return (
    <footer
      onClick={() => {
        toggleCart();
      }}
      className="w-full bg-red-500 py-3 fixed bottom-0 z-20 flex items-center justify-center"
    >
      <button
        id="cart-btn"
        className="flex items-center gap-2 text-white font-bold relative"
      >
        Ver carrinho
        <ShoppingCartIcon size={25} />(<samp>{totalItems}</samp>)
      </button>
    </footer>
  );
};
