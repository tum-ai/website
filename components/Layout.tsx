import { inter } from "@styles/fonts";
import Link from "next/link";
import Footer from "./Footer";
import { Header } from "./Header";

function Banner() {
  return (
    <div style={{ backgroundColor: "#EEEAFF" }} className="w-full py-3 sm:py-5">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4">
          <span className="text-xl">Upcoming AI Summit </span>
          <span className="text-md font-light">Oct 20th - 21st 2023</span>
        </div>
        <Link
          style={{ backgroundColor: "#925cf6" }}
          href="http://summit.tum-ai.com"
          className="mx-2 rounded-lg px-2 py-2 text-center text-white shadow-sm sm:px-5"
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
