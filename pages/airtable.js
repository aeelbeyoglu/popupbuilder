import { useEffect, useState } from "react";
import Airtable from "airtable";
import AirtableTable from "../components/AirtableTable";
const base = new Airtable({ apiKey: "keyh1SR0BR1T5dF2N" }).base(
  "appCMLmv9QyVhmQwH"
);

export default function Home({ nocodetools }) {
  return (
    <div>
      <AirtableTable nocodetools={nocodetools} />
    </div>
  );
}

export async function getStaticProps() {
  const result = await base("No-Code Tools")
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 10,
      view: "Grid view",
    })
    .all();

  const products = result.map((product) => {
    return {
      product: product.get("Product"),
      description: product.get("Description"),
      link: product.get("Producthunt Link"),
      category: product.get("Categories"),
      images: product.get("Image").map((e)=>e.url),
      id: product.id,
    };
  });
  console.log(products);
  return {
    props: {
      nocodetools: products,
    }, // will be passed to the page component as props
  };
}
