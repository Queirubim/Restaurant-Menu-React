export type Product = {
  image: {
    url: string;
    alt: string;
  };
  id: number;
  name: string;
  price: number;
  desc?: string;
};

export type SectionProducts = {
  title: string;
  products: Product[];
};

export type MenuPage = {
  menuProducts: SectionProducts[];
};
