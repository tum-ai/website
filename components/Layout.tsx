import { inter } from "@styles/fonts";
import Footer from "./Footer";
import Navbar from "./02_molecules/Navbar";

export default function Layout({ children }) {
  return (
    <div className={inter.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
