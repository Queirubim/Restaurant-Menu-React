import { MinusIcon, PlusIcon } from "lucide-react";
import { useContext } from "react";
import { CartContext, ItemCart } from "../../context/cart";
import { numberToBRL } from "../../utius";
type ModalItemProductProps = {
  item: ItemCart;
};

export const ModalItemProduct = ({ item }: ModalItemProductProps) => {
  const { addItemToCart, removeItemToCart } = useContext(CartContext);

  const handleAdd = () => {
    addItemToCart(item);
  };
  const handleRemove = () => {
    removeItemToCart(item.id);
  };

  return (
    <li className="flex items-center gap-1 justify-between">
      <img
        src={item.image.url}
        alt={item.image.alt}
        className="max-w-20 bg-gray-500 object-cover min-w-20 h-20 rounded-md"
      />
      <div className="w-full h-full">
        <p className="font-bold line-clamp-1">{item.name}</p>
        <p className="text-sm">Qtd: {item.quantity}</p>
        <p>{numberToBRL(item.price)}</p>
      </div>
      <div className="flex gap-2 mr-2 ">
        <button
          type="button"
          className="hover:text-red-500 transition-colors"
          onClick={handleRemove}
        >
          <MinusIcon size={25} />
        </button>
        <button
          type="button"
          className="hover:text-green-500 transition-colors"
          onClick={handleAdd}
        >
          <PlusIcon size={25} />
        </button>
      </div>
    </li>
  );
};
