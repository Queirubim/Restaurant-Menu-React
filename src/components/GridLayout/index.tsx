import { ReactNode } from "react";

type GridLayoutProps = {
  children: ReactNode;
};
export const GridLayout = ({ children }: GridLayoutProps) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
      {children}
    </main>
  );
};
