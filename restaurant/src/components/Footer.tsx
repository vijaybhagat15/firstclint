"use client";
import Image from 'next/image';
import Link from "next/link";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20 border-t-4 border-gray-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Services */}
        <div className="">
      <Link href="/" className="flex items-center justify-center">
        <div className="relative w-32 h-28 md:h-32 md:w-36">
          <Image
            src="/images/logo.png"
            alt="Maison Flavour Logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>
      <div className="text-2xl font-bold text-ternary flex justify-center">
          Maison Flavour
      </div>
        </div>

        {/* Head Office */}
        <div className="space-y-2 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold border-b-2 pb-1 border-yellow-600">HEAD OFFICE</h3>
          <p className="mt-2">1234 Culinary Blvd</p>
          <p>Gourmet City, NY 10230</p>
          <p className="mt-2 font-semibold">+1 (800) 555-1234</p>
          <p className="text-sm text-gray-300">Mon - Fri: 9am - 6pm</p>
        </div>

        {/* Partnerships */}
        <div className="space-y-2 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold border-b-2 pb-1 border-yellow-600">PARTNERSHIPS</h3>
          <ul className="mt-2 space-y-2 ">
            <li><a href="#" className="hover:underline">Supplier Onboarding</a></li>
            <li><a href="#" className="hover:underline">Distribution Network</a></li>
            <li><a href="#" className="hover:underline">Culinary Alliance</a></li>
            <li><a href="#" className="hover:underline">FoodTech Solutions</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="space-y-2 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold border-b-2 pb-1 border-yellow-600">SUPPORT & SOCIAL</h3>
          <p className="mt-2 text-gray-300">support@maisonflavour.com</p>
          <p className="text-gray-300">For inquiries & partnerships</p>

          <h3 className="text-lg font-semibold">Connect With Us</h3>
          <div className="mt-1 flex space-x-4">
            <FaFacebook className="w-6 h-6 cursor-pointer hover:scale-110 text-blue-500 transition-transform" />
            <FaInstagram className="w-6 h-6 cursor-pointer hover:scale-110 text-pink-500 transition-transform" />
            <FaLinkedin className="w-6 h-6 cursor-pointer hover:scale-110 text-blue-600 transition-transform" />
            <FaTwitter className="w-6 h-6 cursor-pointer hover:scale-110 text-blue-400 transition-transform" />
            <FaYoutube className="w-6 h-6 cursor-pointer hover:scale-110 text-red-500 transition-transform" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
