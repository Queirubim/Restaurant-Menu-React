import { Footer } from "./components/Footer";
import { GridLayout } from "./components/GridLayout";
import { HeaderMenu } from "./components/Header-Menu";
import { ItemProductMenu } from "./components/ItemProductMenu";
import { ModalCart } from "./components/ModalCart";
import { TitleSection } from "./components/TitleSection";
import { CartProvider } from "./context/cart";
import { Toaster } from "react-hot-toast";
import { menuProducts } from "./menu_mock";

function App() {
  return (
    <CartProvider>
      <Toaster />
      <HeaderMenu />
      <h2 className="text-2xl md:text-5xl font-bold text-center mt-9 mb-6">
        Conheça Nosso Menu
      </h2>
      {menuProducts?.map((section) => (
        <div key={section.title}>
          <TitleSection title={section.title} />
          <GridLayout>
            {section.products.map((product) => (
              <ItemProductMenu key={product.id} product={product} />
            ))}
          </GridLayout>
        </div>
      ))}
      <ModalCart />
      <Footer />
    </CartProvider>
  );
}

export default App;
