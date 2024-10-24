// pages/index.js
"use client";
import ProductList from "@/components/product/ProductsList";
import Carousel from "@/components/home/Carousel";
import { useState } from "react";

const carouselItems = [
  {
    src: "/carousel/almond.png",
    alt: "almond",
    caption: "Premium Quality Grade A Almond Nuts",
  },
  {
    src: "/carousel/dryfruits.png",

    alt: "fryfruits",
    caption: "Exclusive Dry Fruits Collection",
  },
  {
    src: "/carousel/herbs.png",
    alt: "herbs",
    caption: "Best Exporter of Herbs",
  },
];
export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-center font-bold mt-6 mb-4 text-gray-800">
        Welcome to Royaldivine Produce Products LLP!
      </h1>
      <p className="text-center text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
        Your trusted source for high-quality produce and products. Explore our
        diverse range of items tailored for your needs!
      </p>

      {/* Use the Carousel component */}
      <Carousel items={carouselItems} />

      <section className="p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-center text-green-700">
          Featured Products
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Check out our latest arrivals and best sellers, handpicked just for
          you!
        </p>
        <ProductList />
      </section>

      <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-8 rounded-lg mb-8 shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li className="mb-2">
            ✔ High-quality products that meet your needs.
          </li>
          <li className="mb-2">✔ Exceptional customer service and support.</li>
          <li className="mb-2">✔ Easy and secure checkout process.</li>
          <li className="mb-2">✔ Fast and reliable shipping.</li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-lg mb-8 shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
          Customer Testimonials
        </h2>
        <div className="flex flex-col space-y-4">
          <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
            &quot;Absolutely loved the quality of the products! Will definitely
            shop again.&quot; - Jane D.
          </blockquote>
          <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
            &quot;Great customer service and fast delivery!&quot; - John S.
          </blockquote>
          <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
            &quot;A fantastic shopping experience! Highly recommend.&quot; -
            Emily R.
          </blockquote>
        </div>
      </section>
    </div>
  );
}
