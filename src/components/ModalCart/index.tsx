import { X } from "lucide-react";
import { CartContext } from "../../context/cart";
import { useContext, useRef } from "react";
import { ModalItemProduct } from "../ModalItemProduct";
import { numberToBRL, restaurantIsOpen } from "../../utius";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

type dataProps = {
  name: string;
};

export const ModalCart = () => {
  const { hiddenCart, toggleCart, cartItems, totalPrice, resetCart } =
    useContext(CartContext);

  const cartModal = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<dataProps>();

  const hasItemCart = () => cartItems.length >= 1;

  const onSubmit = (data: dataProps) => {
    if (!restaurantIsOpen()) {
      toast.error("Não estamos online agora");
    } else {
      const itemsMsg = cartItems
        .map((item) => {
          return `${item.name}, Quantidade: (${item.quantity}) Preço ${numberToBRL(item.price)}`;
        })
        .join(" | ");

      const completedMsg = `${itemsMsg} | TOTAL: ${numberToBRL(totalPrice)} | Endereço: ${data.name}`;

      console.log(completedMsg);
      console.log();
      toast.success("Pedido Enviado com Sucesso");
    }
    reset();
    resetCart();
  };

  return (
    <div
      ref={cartModal}
      onClick={(event) => {
        if (event.target === cartModal.current) {
          toggleCart();
        }
      }}
      className={`bg-black/90 fixed top-0 left-0 w-full h-full z-30 ${hiddenCart} items-center justify-center`}
    >
      <form className="bg-white z-50 p-5 rounded-md min-w-[90%] md:min-w-[600px] relative">
        <button
          type="button"
          title="close modal"
          onClick={() => {
            toggleCart();
          }}
          className="font-bold absolute right-0 top-0 m-3 hover:text-red-500 transition-colors"
        >
          <X size={25} />
        </button>
        <h2 className="text-center font-bold text-2xl mb-2">Carrinho</h2>
        <ul className="flex justify-between max-h-[47vh] overflow-y-scroll gap-1 flex-col mb-2">
          {cartItems.map((item) => (
            <ModalItemProduct key={item.id} item={item} />
          ))}
        </ul>
        <p className="font-bold font-mono mt-4">Endereço de entrega:</p>
        <input
          type="text"
          placeholder="Digite seu endereço completo..."
          className="w-full border-2 p-1 rounded my-1 focus:outline-none focus:ring-2 ring-black"
          {...register("name", { required: true })}
        />
        {errors?.name?.type === "required" && (
          <p className="text-red-500">Prencha o endereço...</p>
        )}
        <div className="w-full flex items-center justify-between mt-4">
          <p className="font-bold font-mono">
            Total: <samp>{numberToBRL(totalPrice)}</samp>
          </p>
          <button
            disabled={!hasItemCart()}
            onClick={() => handleSubmit(onSubmit)()}
            type="button"
            className="bg-green-500 hover:bg-green-600 transition-colors text-white px-4 py-2 rounded"
          >
            Finalizar pedido
          </button>
        </div>
      </form>
    </div>
  );
};
