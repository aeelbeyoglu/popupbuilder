import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Bloglist from "../components/Bloglist";
import Stats from "../components/Stats";
import Faq from "../components/Faq";
import Footerend from "../components/Footerend";
import { getAllPosts } from "../lib/api";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import LogoTools from "../components/LogoTools";
import InspirationalPopups from "../components/InspirationalPopups"

export default function Home({ allPosts }) {
  const language = "english";
  return (
    <div>
      <Seo title="Popup Builder" description="popupsmart" />
      <Navbar />
      <Hero />
      <InspirationalPopups />
      <LogoTools />
      <Bloglist posts={allPosts} />
      <Faq />
      <Stats />
      <Footerend />
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "category",
  ]);

  return {
    props: { allPosts },
  };
}
