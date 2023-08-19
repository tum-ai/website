import { inter } from "@styles/fonts";
import Link from "next/link";
import Footer from "./Footer";
import { Header } from "./Header";
import Button from "@components/ui/Button";

function Banner() {
  return (
    <div className="w-full bg-purple-100/70 py-3 sm:py-5">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4">
          <h2 className="text-xl">Upcoming AI Summit </h2>
          <p className="text-md font-light">Oct 20th - 21st 2023</p>
        </div>
        <Button asChild>
          <Link href="http://summit.tum-ai.com">Get Tickets</Link>
        </Button>
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
