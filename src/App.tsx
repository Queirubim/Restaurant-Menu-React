import { Footer } from "./components/Footer";
import { GridLayout } from "./components/GridLayout";
import { HeaderMenu } from "./components/Header-Menu";
import { ItemProductMenu } from "./components/ItemProductMenu";
import { ModalCart } from "./components/ModalCart";
import { TitleSection } from "./components/TitleSection";
import { CartProvider } from "./context/cart";
import { MenuPage } from "./types/typesMenuPage";
import { Toaster } from "react-hot-toast";

async function getMenuData(): Promise<MenuPage> {
  const response = await fetch("menu_mock.json");
  return await response.json();
}

const { menuProducts } = await getMenuData();

function App() {
  return (
    <CartProvider>
      <Toaster />
      <HeaderMenu />
      <h2 className="text-2xl md:text-5xl font-bold text-center mt-9 mb-6">
        Conheça Nosso Menu
      </h2>
      {menuProducts.map((section) => (
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
