"use client";
import ProductList from "@/components/product/ProductsList";
import Carousel from "@/components/home/Carousel";
import { Leaf } from "lucide-react";

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
    <div className="min-h-screen bg-white">
      {/* Hero Section with gradient overlay */}
      <div className="relative bg-gradient-to-b from-green-50 to-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Welcome to{" "}
              <span className="text-green-700">
                Royaldivine Produce Products
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your trusted source for high-quality produce and products. Explore
              our diverse range of items tailored for your needs!
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="my-12">
        <Carousel items={carouselItems} />
      </div>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Leaf className="text-green-600 w-6 h-6" />
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Check out our latest arrivals and best sellers, handpicked just for
            you!
          </p>
          <ProductList />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Premium Quality",
                desc: "High-quality products that meet your needs",
                icon: "✦",
              },
              {
                title: "Expert Support",
                desc: "Exceptional customer service and support",
                icon: "★",
              },
              {
                title: "Secure Checkout",
                desc: "Easy and secure checkout process",
                icon: "⚡",
              },
              {
                title: "Fast Shipping",
                desc: "Fast and reliable shipping worldwide",
                icon: "♢",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-300"
              >
                <div className="text-3xl text-green-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Absolutely loved the quality of the products! Will definitely shop again.",
                author: "Jane D.",
              },
              {
                quote: "Great customer service and fast delivery!",
                author: "John S.",
              },
              {
                quote: "A fantastic shopping experience! Highly recommend.",
                author: "Emily R.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-green-600 text-4xl mb-4">&quot;</div>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <p className="text-gray-900 font-semibold">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
