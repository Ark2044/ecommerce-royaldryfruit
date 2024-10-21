"use client";
import Link from "next/link";
import Bars2 from "../icons/Bars2";
import ShoppingCart from "../icons/ShoppingCart";
import { useState } from "react";
import Image from "next/image";
import { useCartContext } from "@/context/CartContext";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { totalItems } = useCartContext(); // Get totalItems from CartContext

  const handleMobileNavClick = () => {
    setMobileNavOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <Link className="text-primary font-bold text-2xl" href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={32} height={32} />
        </Link>
        <div className="flex gap-4 items-center">
          <Link href={"/cart"} className="relative">
            <span className="sr-only">Cart</span>
            <ShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="p-2 border rounded-md hover:bg-gray-100 transition"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            <Bars2 className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-100 rounded-lg mt-2 flex flex-col gap-4 text-center text-gray-700"
        >
          <Link
            href={"/"}
            className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handleMobileNavClick}
          >
            Home
          </Link>
          <Link
            href={"/#about"}
            className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handleMobileNavClick}
          >
            About
          </Link>
          <Link
            href={"/products"} // Direct link to products page
            className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handleMobileNavClick}
          >
            Products
          </Link>
          <Link
            href={"/corporate-gifting"}
            className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handleMobileNavClick}
          >
            Corporate Gifting
          </Link>
          <Link
            href={"/quality"}
            className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handleMobileNavClick}
          >
            Quality
          </Link>
          <Link
            href={"/#contact"}
            className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handleMobileNavClick}
          >
            Contact
          </Link>
        </div>
      )}

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between py-4 px-8 bg-white">
        <Link className="text-primary font-bold text-3xl" href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={64} height={64} />
        </Link>
        <nav className="flex items-center gap-10 text-gray-600 font-medium">
          <Link
            href={"/"}
            className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Home
          </Link>
          <Link
            href={"/#about"}
            className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            About
          </Link>
          <Link
            href={"/products"} // Direct link to products page
            className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Products
          </Link>
          <Link
            href={"/corporate-gifting"}
            className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Corporate Gifting
          </Link>
          <Link
            href={"/quality"}
            className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Quality
          </Link>
          <Link
            href={"/#contact"}
            className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <Link href={"/cart"} className="relative">
            <span className="sr-only">Cart</span>
            <ShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
