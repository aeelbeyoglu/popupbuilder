import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Bloglist from "../components/Bloglist";
import Stats from "../components/Stats";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import { getAllPosts } from "../lib/BlogApi";
import { getAllPopups } from "../lib/PopupApi";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import LogoTools from "../components/LogoTools";
import InspirationalPopups from "../components/InspirationalPopups";
import Banner from "../components/Banner";
import Modal from "../components/Modal";


export default function Home({ allPosts, allPopups }) {
  const language = "english";
  const [open, setOpen] = useState(false)
  const popups = allPopups.slice(0,3);

  

  return (
    <div>
      <Seo title="Popup Builder" description="popupsmart" />
      <Navbar />
      <Hero setOpen={setOpen}/>
      <InspirationalPopups allPopups={popups}/>
      <LogoTools />
      <Bloglist posts={allPosts} />
      <Faq />
      <Stats />
      <Footer />
     {/* <Modal open={open} setOpen={setOpen}/> */}
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

  const allPopups = getAllPopups([
    "title",
    "description",
    "popupImage",
    "popupImageAlt",
    "videoId",
    "slug",
    "product",
    "category",
    "bullets",
  ]);

  return {
    props: { allPosts, allPopups },
  };
}
