import { Fragment, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/outline";

export default function Popup({ popup, filters }) {
  const [show, setShow] = useState(false);
  const setShowFunc = (e) => {
    setShow(e);
    if (e) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <Fragment>
      <Script src="https://player.vimeo.com/api/player.js" />
      <div className="relative p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
        <a href={popup.href}>
          <div
            onClick={() => setShowFunc(true)}
            className="relative bg-gray-200 rounded-lg aspect-w-16 aspect-h-9 cursor-zoom-in"
          >
            <Image
              src={popup.popupImage}
              alt={popup.popupImageAlt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3
            className="mt-4 text-2xl font-bold cursor-pointer"
            onClick={() => setShowFunc(true)}
          >
            {popup.title}
          </h3>
          <p className="mt-1 text-md text-gray-600">{popup.description}</p>
        </a>
      </div>
      {show && (
        <div className="fixed inset-0 z-40 overflow-y-scroll">
          <div className="w-8/12 mx-auto my-24 bg-white rounded-lg p-12 shadow-2xl relative z-30">
            <XCircleIcon
              className="absolute left-0 m-4 top-0 h-8 w-8 text-gray-400 cursor-pointer transform transition-all duration-300 hover:rotate-90"
              aria-hidden="true"
              onClick={() => setShowFunc(false)}
            />
            <div className="flex">
              <div className="w-2/3">
                <div className="relative bg-gray-200 rounded-lg aspect-w-16 aspect-h-9">
                  <Image
                    src={popup.popupImage}
                    alt={popup.popupImageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                {popup.popupImage2 && (
                  <div className="relative bg-gray-200 rounded-lg aspect-w-16 aspect-h-9 mt-4">
                    <Image
                      src={popup.popupImage2}
                      alt={popup.popupImage2Alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                )}

                {popup.videoId && (
                  <div className="relative mt-12 aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://player.vimeo.com/video/${popup.videoId}?h=2dc8dd139e&byline=0`}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
              <div className="w-1/3">
                <div className="pl-12">
                  <h3 className="mt-4 text-2xl font-bold">{popup.title}</h3>
                  <p className="mt-1 text-md text-gray-600">
                    {popup.description}
                  </p>
                  {filters && filters[1].options
                    .filter((i) => i.value === popup.product)
                    .map((e) => (
                      <p className="mt-4">Product: {e.label}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="inset-0 w-full h-full fixed bg-gray-700 bg-opacity-50 z-20 cursor-zoom-out"
            onClick={() => setShowFunc(false)}
          ></div>
        </div>
      )}
    </Fragment>
  );
}
