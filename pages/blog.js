import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Bloglist from "../components/Bloglist";
import Stats from "../components/Stats";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import { getAllPosts } from "../lib/BlogApi";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import LogoTools from "../components/LogoTools";
import InspirationalPopups from "../components/InspirationalPopups";
import Banner from "../components/Banner";
import Modal from "../components/Modal";

export default function Home({ allPosts }) {
  const language = "english";
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Seo title="Blo" description="popupsmart" />
      <Navbar />

      <Bloglist posts={allPosts} />

      <Footer />
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
