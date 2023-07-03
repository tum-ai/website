import { Inter, Bitter } from "@next/font/google";

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
});
const bitter = Bitter({
  weight: "variable",
  subsets: ["latin"],
});
const interBold = Inter({
  weight: "700",
  subsets: ["latin"],
});

export { inter, interBold, bitter };
