import { NextSeo } from "next-seo";

export default function Seo({title, description}) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical="https://www.canonicalurl.ie/"
      openGraph={{
        url: "https://www.canonicalurl.ie/",
        title: title,
        description: description,
        images: [
          {
            url: "https://www.example.ie/og-image-01.jpg",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
          },
        ],
      }}
    />
  );
}
