import { FC, PropsWithChildren } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

interface Props {}

export const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen h-full px-3">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};
