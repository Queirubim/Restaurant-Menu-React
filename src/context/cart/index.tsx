import { createContext, useEffect, useState } from "react";
import { Product } from "../../types/typesMenuPage";

type HiddenCart = "flex" | "hidden";
export type ItemCart = {
  image: {
    url: string;
    alt: string;
  };
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartContextProps = {
  hiddenCart: HiddenCart;
  toggleCart: () => void;
  cartItems: ItemCart[];
  addItemToCart: (product: Product) => void;
  removeItemToCart: (id: number) => void;
  totalPrice: number;
  totalItems: number;
  resetCart: () => void;
};

// Cria o Context
const CartContext = createContext<CartContextProps>({} as CartContextProps);

// Prover o Context
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [hiddenCart, setHiddenCart] = useState<HiddenCart>("hidden");
  const [cartItems, setCartItems] = useState<ItemCart[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const totPrice = cartItems.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0,
    );
    const totItems = cartItems.reduce((acc, item) => (acc += item.quantity), 0);
    setTotalPrice(totPrice);
    setTotalItems(totItems);
  }, [cartItems]);

  const toggleCart = () => {
    if (hiddenCart === "flex") {
      setHiddenCart("hidden");
      return;
    }
    setHiddenCart("flex");
  };

  const addItemToCart = (product: Product | ItemCart) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (!existingItem) {
      setCartItems([
        ...cartItems,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          quantity: 1,
          price: product.price,
        },
      ]);
      return;
    }
    existingItem.quantity += 1;
    setCartItems([
      ...cartItems.map((item) =>
        item.id === existingItem.id ? existingItem : item,
      ),
    ]);
  };

  const removeItemToCart = (id: number) => {
    const itemToRemove = cartItems.find((item) => id === item.id);
    if (!itemToRemove) return;

    if (itemToRemove.quantity <= 1) {
      setCartItems([...cartItems.filter((item) => item !== itemToRemove)]);
      return;
    }
    itemToRemove.quantity -= 1;
    setCartItems([
      ...cartItems.map((item) =>
        item.id === itemToRemove.id ? itemToRemove : item,
      ),
    ]);
  };

  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        hiddenCart,
        toggleCart,
        cartItems,
        addItemToCart,
        removeItemToCart,
        totalPrice,
        totalItems,
        resetCart,
      }}
    >
      <>{children}</>
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
