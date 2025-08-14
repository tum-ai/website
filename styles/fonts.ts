import { Bitter, Inter, Archivo } from "next/font/google";

const inter = Inter({
  weight: "variable",
  subsets: ["latin"],
});
const bitter = Bitter({
  weight: "variable",
  subsets: ["latin"],
});
const archivoLight = Archivo({
  weight: "300",
  subsets: ["latin"],
});
const archivoRegular = Archivo({
  weight: "400",
  subsets: ["latin"],
});
const archivoMedium = Archivo({
  weight: "500",
  subsets: ["latin"],
});
const archivoSemiBold = Archivo({
  weight: "600",
  subsets: ["latin"],
});
const archivoBold = Archivo({
  weight: "700",
  subsets: ["latin"],
});
const archivoSemiExpandedBold = Archivo({
  weight: "700",
  subsets: ["latin"],
});
const archivoExpandedBlack = Archivo({
  weight: "900",
  subsets: ["latin"],
});

export { inter, bitter, archivoLight, archivoRegular, archivoMedium, archivoSemiBold, archivoBold, archivoSemiExpandedBold, archivoExpandedBlack };
