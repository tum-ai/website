import { ibm_plex_sans } from "@styles/fonts";
import Footer from "./Footer";
import { Header } from "./Header";

export default function Layout({ children }) {
  return (
    <div className={ibm_plex_sans.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
