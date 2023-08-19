import { inter } from "@styles/fonts";
import Link from "next/link";
import Footer from "./Footer";
import { Header } from "./Header";

function Banner() {
  return (
    <div style={{ backgroundColor: "#EEEAFF" }} className="w-full py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <span className="text-2xl">Upcoming AI Summit </span>
          <span className="text-md font-light">Oct 20th - 21st 2023</span>
        </div>
        <Link
          style={{ backgroundColor: "#dfd6fe" }}
          href="http://summit.tum-ai.com"
          className="mx-2 rounded-lg px-5 py-2"
        >
          Get Tickets
        </Link>
      </div>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div className={inter.className}>
      <Banner />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
