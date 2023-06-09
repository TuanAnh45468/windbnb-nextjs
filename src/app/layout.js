import "./globals.css";
import { Montserrat, Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mulish"
});

const montserrat = Montserrat({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat"
})

export const metadata = {
  title: "Windbnb DevChallenge",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.className} flex flex-col items-center`}>{children}</body>
    </html>
  );
}
