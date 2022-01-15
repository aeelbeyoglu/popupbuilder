import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PopupGrid from "../components/Popups/PopupsGrid";
import { getAllPopups } from "../lib/PopupApi";

export default function ReallyGoodPopups({ allPopups }) {
  const [filteredAllPopups, setFilteredAllPopups] = useState(allPopups);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [numbers, setNumbers] = useState({ 0: 3, 1: 3 });
  const [filters, setFilters] = useState([
    {
      id: "category",
      name: "Category",
      options: [
        { value: 1, label: "Grow Email List", checked: true },
        { value: 2, label: "Increase Sales", checked: true },
        { value: 3, label: "Get More Phone Calls", checked: true },
      ],
    },
    {
      id: "product",
      name: "Product",
      options: [
        { value: 1, label: "Popupsmart", checked: true },
        { value: 2, label: "Sleeknote", checked: true },
        { value: 3, label: "Optimonk", checked: true },
      ],
    },
  ]);

  const checkboxOnChange = (e, sectionIdx, optionIdx) => {
    const a = (filters[sectionIdx].options[optionIdx].checked = e);
    setFilters(filters);
    const length = filters[sectionIdx].options.filter(function (s) {
      return s.checked;
    }).length;
    setNumbers((prev) => ({ ...prev, [sectionIdx]: length }));
    console.log(allPopups);

    // category filter
    const ffc = filters.map((f) => {
      return f.options.filter((o) => o.checked);
    });
    console.log(ffc, "**");
    const asd = ffc[0].map((x) => {
      return allPopups.filter((e) => e.category === x.value).shift();
    });
    console.log(asd, 'aasd');
    setFilteredAllPopups(asd);
  };

  return (
    <div className="bg-gray-50">
      <Seo
        title="Really Good Popup Designs"
        description="Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and organization with these sale items before we run out."
      />
      <Navbar />
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 sm:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.name}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                <ChevronDownIcon
                                  className={`
                                    ${open ? "-rotate-180" : "rotate-0"}
                                    h-5 w-5 transform`}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    value={option.value}
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.label} --jj
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main>
          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                #ReallyGoodPopupDesigns
              </h1>
              <p className="mt-4 max-w-xl text-sm text-gray-700">
                Our thoughtfully designed workspace objects are crafted in
                limited runs. Improve your productivity and organization with
                these sale items before we run out.
              </p>
            </div>
          </div>

          {/* Filters */}
          <section aria-labelledby="filter-heading">
            <h2 id="filter-heading" className="sr-only">
              Filters
            </h2>

            <div className="relative z-10 bg-white border-b border-gray-200 pb-4">
              <div className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
                <button
                  type="button"
                  className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  Filters
                </button>

                <div className="hidden sm:block">
                  <div className="flow-root">
                    <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                      {filters.map((section, sectionIdx) => (
                        <Popover
                          key={section.name}
                          className="px-4 relative inline-block text-left"
                        >
                          <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                            <span>{section.name}</span>
                            <span className="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">
                              {numbers[sectionIdx]}
                            </span>
                            <ChevronDownIcon
                              className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Popover.Panel className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <form className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`filter-${section.id}-${optionIdx}`}
                                      defaultChecked={option.checked}
                                      type="checkbox"
                                      onChange={(e) =>
                                        checkboxOnChange(
                                          e.target.checked,
                                          sectionIdx,
                                          optionIdx
                                        )
                                      }
                                      className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </form>
                            </Popover.Panel>
                          </Transition>
                        </Popover>
                      ))}
                    </Popover.Group>
                  </div>
                </div>
              </div>
            </div>

            
          </section>
          <PopupGrid popups={filteredAllPopups} filters={filters} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allPopups = getAllPopups([
    "title",
    "description",
    "popupImage",
    "popupImageAlt",
    "videoId",
    "slug",
    "product",
    "category",
  ]);

  return {
    props: { allPopups },
  };
}
