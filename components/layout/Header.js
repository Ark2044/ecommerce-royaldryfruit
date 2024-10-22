"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useCartContext } from "@/context/CartContext";
import ShoppingCart from "../icons/ShoppingCart";
import ChevronDown from "../icons/ChevronDown";
import ChevronUp from "../icons/ChevronUp";
import productMenuData from "@/data/productMenuData";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const { totalItems } = useCartContext();
  const dropdownRef = useRef(null);

  // Handle scroll
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  // Handle window resize
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMobileNavOpen(false);
      setProductDropdownOpen(false);
    }
  };

  // Handle click outside for dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setProductDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const ProductSubmenu = ({ mobile = false }) => {
    return (
      <ul
        className={`${
          mobile
            ? "bg-gray-50 pl-4"
            : "absolute top-full left-0 bg-white shadow-lg min-w-[200px] py-2 rounded-lg"
        } transition-transform duration-200 transform ${
          productDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {productMenuData.map((item, index) => (
          <li key={index} className="relative group">
            <Link
              href={item.link}
              className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-200 $ {
                mobile ? "" : "whitespace-nowrap"
              }`}
              onClick={() => mobile && setMobileNavOpen(false)}
            >
              {item.title}
            </Link>
            <ul
              className={`${
                mobile
                  ? "pl-4"
                  : "absolute left-full top-0 bg-white shadow-lg min-w-[200px] py-2 hidden group-hover:block"
              } transition-all duration-200`}
            >
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-colors duration-200"
                    onClick={() => mobile && setMobileNavOpen(false)}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header
      className={`bg-gradient-to-b from-white to-gray-50 shadow-md fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-100" : ""
      }`}
    >
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="logo"
            width={92}
            height={45}
            className="w-auto h-auto"
            priority
          />
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/cart" className="relative">
            <span className="sr-only">Cart</span>
            <ShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="text-gray-800 focus:outline-none transition-transform transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
            aria-expanded={mobileNavOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileNavOpen && (
        <nav className="md:hidden bg-white shadow-lg transition-transform duration-300">
          <ul className="py-2">
            <li className="hover:bg-gray-50 transition-colors duration-200">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-800"
                onClick={() => setMobileNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="hover:bg-gray-50 transition-colors duration-200">
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-800"
                onClick={() => setMobileNavOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={productDropdownOpen}
              >
                Products
                {productDropdownOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
              {productDropdownOpen && <ProductSubmenu mobile />}
            </li>
            <li className="hover:bg-gray-50 transition-colors duration-200">
              <Link
                href="/gifting"
                className="block px-4 py-2 text-gray-800"
                onClick={() => setMobileNavOpen(false)}
              >
                Corporate Gifting
              </Link>
            </li>
            <li className="hover:bg-gray-50 transition-colors duration-200">
              <Link
                href="/quality"
                className="block px-4 py-2 text-gray-800"
                onClick={() => setMobileNavOpen(false)}
              >
                Quality
              </Link>
            </li>
            <li className="hover:bg-gray-50 transition-colors duration-200">
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-800"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:items-center md:justify-between md:p-4">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="logo"
            width={92}
            height={45}
            className="w-auto h-auto"
            priority
          />
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setProductDropdownOpen(!productDropdownOpen)}
              className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors duration-200"
              aria-expanded={productDropdownOpen}
            >
              Products
              {productDropdownOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {productDropdownOpen && <ProductSubmenu />}
          </li>
          <li>
            <Link
              href="/gifting"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Corporate Gifting
            </Link>
          </li>
          <li>
            <Link
              href="/quality"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Quality
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link href="/cart" className="relative text-gray-800">
          <span className="sr-only">Cart</span>
          <ShoppingCart />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
