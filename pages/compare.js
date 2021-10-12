import Navbar from "../components/Navbar";
import { Fragment } from "react";
import { CheckIcon, MinusIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Footer from "../components/Footer";

/* This example requires Tailwind CSS v2.0+ */
const features = [
  { name: "Targeting", description: "Designed by Good Goods, Inc." },
  {
    name: "Customization",
    description:
      "Solid walnut base with rare earth magnets and polycarbonate add-ons.",
  },
  { name: "Dimensions", description: '15" x 3.75" x .75"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  {
    name: "Includes",
    description:
      "Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder",
  },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

const tiers = [
  {
    name: "Popupsmart",
    href: "#",
    priceMonthly: 9,
    description: "Quis suspendisse ut fermentum neque vivamus non tellus.",
  },
  {
    name: "Sleeknote",
    href: "#",
    priceMonthly: 29,
    description: "Quis eleifend a tincidunt pellentesque. A tempor in sed.",
  },
  {
    name: "Getsitecontrol",
    href: "#",
    priceMonthly: 59,
    description:
      "Orci volutpat ut sed sed neque, dui eget. Quis tristique non.",
  },
];
const sections = [
  {
    name: "Features",
    features: [
      {
        name: "Molestie lobortis massa.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Urna purus felis.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Tellus pulvinar sit dictum.",
        tiers: { Essential: true, Premium: true },
      },
      {
        name: "Convallis.",
        tiers: { Essential: "Up to 20 users", Premium: "Up to 50 users" },
      },
    ],
  },
  {
    name: "Reporting",
    features: [
      {
        name: "Adipiscing.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Eget risus integer.",
        tiers: { Essential: true, Premium: true },
      },
      { name: "Gravida leo urna velit.", tiers: { Premium: true } },
      {
        name: "Elementum ut dapibus mi feugiat cras nisl.",
        tiers: { Premium: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Sit dignissim.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      { name: "Congue at nibh et.", tiers: { Essential: true, Premium: true } },
      {
        name: "Volutpat feugiat mattis.",
        tiers: { Essential: true, Premium: true },
      },
      {
        name: "Tristique pellentesque ornare diam sapien.",
        tiers: { Premium: true },
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function compare() {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Popupsmart vs Sleeknote</span>
            <span className="block text-indigo-600">Comparison</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/popupsmart-vs-sleeknote">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Start the Battle
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
          {/* xs to lg */}
          <div className="max-w-2xl mx-auto space-y-16 lg:hidden">
            {tiers.map((tier, tierIdx) => (
              <section key={tier.name}>
                <div className="px-4 mb-8">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    {tier.name}
                  </h2>
                  <p className="mt-4">
                    <span className="text-4xl font-extrabold text-gray-900">
                      ${tier.priceMonthly}
                    </span>{" "}
                    <span className="text-base font-medium text-gray-500">
                      /mo
                    </span>
                  </p>
                  <p className="mt-4 text-sm text-gray-500">
                    {tier.description}
                  </p>
                  <a
                    href={tier.href}
                    className="mt-6 block border border-gray-800 rounded-md bg-gray-800 w-full py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                  >
                    Buy {tier.name}
                  </a>
                </div>

                {sections.map((section) => (
                  <table key={section.name} className="w-full">
                    <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                      {section.name}
                    </caption>
                    <thead>
                      <tr>
                        <th className="sr-only" scope="col">
                          Feature
                        </th>
                        <th className="sr-only" scope="col">
                          Included
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {section.features.map((feature) => (
                        <tr
                          key={feature.name}
                          className="border-t border-gray-200"
                        >
                          <th
                            className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                            scope="row"
                          >
                            {feature.name}
                          </th>
                          <td className="py-5 pr-4">
                            {typeof feature.tiers[tier.name] === "string" ? (
                              <span className="block text-sm text-gray-700 text-right">
                                {feature.tiers[tier.name]}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    className="ml-auto h-5 w-5 text-green-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <MinusIcon
                                    className="ml-auto h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true
                                    ? "Yes"
                                    : "No"}
                                </span>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}

                <div
                  className={classNames(
                    tierIdx < tiers.length - 1 ? "py-5 border-b" : "pt-5",
                    "border-t border-gray-200 px-4"
                  )}
                >
                  <a
                    href={tier.href}
                    className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                  >
                    Buy {tier.name}
                  </a>
                </div>
              </section>
            ))}
          </div>

          {/* lg+ */}
          <div className="hidden lg:block">
            <table className="w-full h-px table-fixed">
              <caption className="sr-only">Pricing plan comparison</caption>
              <thead>
                <tr>
                  <th
                    className="pb-4 px-6 text-sm font-medium text-gray-900 text-left"
                    scope="col"
                  >
                    <span className="sr-only">Feature by</span>
                    <span>Plans</span>
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                      scope="col"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="border-t border-gray-200 divide-y divide-gray-200">
                <tr>
                  <th
                    className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top"
                    scope="row"
                  >
                    Pricing
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="h-full py-8 px-6 align-top">
                      <div className="relative h-full table">
                        <p>
                          <span className="text-4xl font-extrabold text-gray-900">
                            ${tier.priceMonthly}
                          </span>{" "}
                          <span className="text-base font-medium text-gray-500">
                            /mo
                          </span>
                        </p>
                        <p className="mt-4 mb-16 text-sm text-gray-500">
                          {tier.description}
                        </p>
                        <a
                          href={tier.href}
                          className="absolute bottom-0 flex-grow block w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                        >
                          Buy {tier.name}
                        </a>
                      </div>
                    </td>
                  ))}
                </tr>
                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        className="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left"
                        colSpan={4}
                        scope="colgroup"
                      >
                        {section.name}
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th
                          className="py-5 px-6 text-sm font-normal text-gray-500 text-left"
                          scope="row"
                        >
                          {feature.name}
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.name} className="py-5 px-6">
                            {typeof feature.tiers[tier.name] === "string" ? (
                              <span className="block text-sm text-gray-700">
                                {feature.tiers[tier.name]}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    className="h-5 w-5 text-green-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <MinusIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-gray-200">
                  <th className="sr-only" scope="row">
                    Choose your plan
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="pt-5 px-6">
                      <a
                        href={tier.href}
                        className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                      >
                        Buy {tier.name}
                      </a>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="relative">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg"
          alt=""
          className="w-full h-96 object-center object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Honor Comparison Features
          </h2>
          <p className="mt-4 text-gray-500">
            Organize is a system to keep your desk tidy and photo-worthy all day
            long. Procrastinate your work while you meticulously arrange items
            into dedicated trays.
          </p>
        </div>

        <dl className="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <Footer />

    </div>
  );
}
