import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import tools from "../lib/tools";
import Footer from "../components/Footer";

export default function Example() {
  return (
    <div>
      <Navbar />
      {tools.map((item) => (
        <div key={item.id} className="relative py-16 bg-white">
          <div
            className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block"
            aria-hidden="true"
          />
          <div className="max-w-4xl mx-auto bg-blue-600 lg:bg-transparent lg:px-8">
            <div className="lg:grid lg:grid-cols-12">
              <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                <div
                  className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
                  aria-hidden="true"
                />
                <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                  <div>
                    <img
                      className="object-cover object-center rounded-3xl shadow-2xl bg-white p-12"
                      src={item.img}
                      alt={item.title + " Logo"}
                    />
                  </div>
                </div>
              </div>

              <div className="relative bg-blue-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
                <div
                  className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-indigo-500"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={384}
                      fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    />
                  </svg>
                  <svg
                    className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-indigo-500"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={384}
                      fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    />
                  </svg>
                </div>
                <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                  <h2
                    className="text-3xl font-extrabold text-white"
                    id="join-heading"
                  >
                    {item.title}
                  </h2>
                  <p className="text-lg text-white">{item.description}</p>
                  <Link href={item.link}>
                    <a className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-indigo-700 hover:bg-gray-50 sm:inline-block sm:w-auto">
                      {item.buttontext}{" "}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}
