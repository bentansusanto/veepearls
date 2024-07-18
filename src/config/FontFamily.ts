import { Playfair_Display, Lato } from "next/font/google";

export const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal"],
  });

export const heading = Playfair_Display({
    subsets: ["latin"],
    weight: ['700', '600', '700'],
    style: ["normal"],
  });