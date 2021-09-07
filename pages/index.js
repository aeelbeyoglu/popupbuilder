import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Bloglist from "../components/Bloglist";
import Stats from "../components/Stats";
import Faq from "../components/Faq";
import Footerend from "../components/Footerend";
import { getAllPosts } from "../lib/api";
import Seo from "../components/Seo";

export default function Home({ allPosts }) {
  return (
    <div>
      <Seo title="Popup Builder" description="popupsmart"/>
      <Hero></Hero>
      <Bloglist posts={allPosts} />
      <Faq></Faq>
      <Stats></Stats>
      <Footerend></Footerend>
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
