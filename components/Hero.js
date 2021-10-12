/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example({setOpen}) {
  return (
    <div className="bg-white">
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-400 sm:text-base lg:text-sm xl:text-base">
                  Save 2,000+ hours of market research
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">
                    Are you looking for
                  </span>
                  <span className="block text-blue-600">popup builder?</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-black-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Inspire, explore and compare best popup builder in the market to
                find which is suitable for you.
              </p>
            </div>
            <div className="mt-12 justify-items-center sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <Image onClick={()=>setOpen(true)} className="w-full" src="/assets/img/hero.svg" alt="" width="650" height="450"/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
