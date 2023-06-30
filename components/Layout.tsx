import { inter } from "@styles/fonts";
import Footer from "./Footer";
import { Header } from "./Header";

export default function Layout({ children }) {
  return (
    <div className={inter.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
