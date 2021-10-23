import Popup from "./Popup";
export default function PopupGrid({ popups }) {
  return (
    <section
      aria-labelledby="products-heading"
      className="max-w-2xl mx-auto pt-12 pb-16 px-4 sm:pt-16 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 id="products-heading" className="sr-only">
        Popups
      </h2>

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {popups.map((popup) => (
          <Popup key={popup.title} popup={popup} />
        ))}
      </div>
    </section>
  );
}
