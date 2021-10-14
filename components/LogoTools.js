/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Popup Builder Tool Reviews
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Check out our evaluation content, which is the result of hours of work.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <Link href="/popup-builder-tools/">
                  <a className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Explore Popup Builders
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="assets/img/sleeknote.svg"
                alt="Sleeknote"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-16 bg-gray-50">
              <img
                className="max-h-12"
                src="assets/img/optimonk.svg"
                alt="Optimonk"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-16 bg-gray-50">
              <img
                className="max-h-12"
                src="assets/img/wisepops.svg"
                alt="Wisepops"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="assets/img/popupsmart.svg"
                alt="Popupsmart"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-16 bg-gray-50">
              <img
                className="max-h-12"
                src="assets/img/sumo.png"
                alt="Sumo"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-16 bg-gray-50">
              <img
                className="max-h-12"
                src="assets/img/optinmonster.png"
                alt="Optinmonster"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
