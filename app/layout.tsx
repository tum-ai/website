import { inter } from "@styles/fonts";
import { Providers } from "./providers";
import "../styles/globals.css";
import { Header } from "@components/Header";
import Footer from "@components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className={inter.className}>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
