import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About Us and Contact Section */}
        <div className="text-center">
          <h3 className="text-2xl font-thin">ABOUT US</h3>
          <p className="mt-2 text-gray-400">
            We are unequivocally dedicated to providing quality products and
            operations to our customers. Our experienced team is in charge of
            the growth and success of the organization.
          </p>

          <h3 className="text-xl font-thin mt-6">CONTACT</h3>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/" passHref>
              <div className="flex flex-col items-center text-gray-400 hover:text-green-400 transition cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
                <span className="text-sm">LIKE US</span>
              </div>
            </Link>
            <Link href="/" passHref>
              <div className="flex flex-col items-center text-gray-400 hover:text-green-400 transition cursor-pointer">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                <span className="text-sm">FOLLOW US</span>
              </div>
            </Link>
            <Link href="/" passHref>
              <div className="flex flex-col items-center text-gray-400 hover:text-green-400 transition cursor-pointer">
                <FontAwesomeIcon icon={faGlobe} className="h-5 w-5" />
                <span className="text-sm">VISIT US</span>
              </div>
            </Link>
            <Link href="/" passHref>
              <div className="flex flex-col items-center text-gray-400 hover:text-green-400 transition cursor-pointer">
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
                <span className="text-sm">FOLLOW US</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="text-center">
          <h3 className="text-2xl font-thin">QUICK LINKS</h3>
          <div className="flex flex-col items-center mt-4 space-y-2">
            {["Home", "About Us", "Products", "Quality", "Contact Us"].map(
              (link) => (
                <Link key={link} href="/" passHref>
                  <div className="text-gray-400 hover:text-green-400 transition cursor-pointer">
                    {link}
                  </div>
                </Link>
              )
            )}
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div className="text-center">
          <h3 className="text-2xl font-thin">ENQUIRY FORM</h3>
          <form className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="p-2 border border-gray-600 rounded"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="p-2 border border-gray-600 rounded"
                type="text"
                placeholder="Your Phone"
              />
            </div>
            <div className="mt-4">
              <input
                className="w-full p-2 border border-gray-600 rounded"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="mt-4">
              <textarea
                className="w-full p-2 border border-gray-600 rounded"
                rows="3"
                placeholder="Message"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button className="px-5 py-2 rounded-sm bg-green-400 text-white font-semibold">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">
          © Copyrights{" "}
          <span className="text-green-400">
            Royaldivine Produce Products LLP
          </span>{" "}
          2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
