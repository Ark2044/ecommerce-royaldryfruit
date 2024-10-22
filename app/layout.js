import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ProductProvider } from "@/context/ProductContext";
import { CartProvider } from "@/context/CartContext";

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the page
export const metadata = {
  title: "Royaldivine Produce Products LLP",
  description:
    "Your trusted source for high-quality produce and products. Explore our diverse range of items tailored for your needs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen antialiased`}
      >
        <ProductProvider>
          <CartProvider>
            <Header />
            <main className="flex-grow mt-20">{children}</main>
            <Footer />
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
