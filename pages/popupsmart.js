import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Bloglist from '../components/Bloglist'
import Stats from '../components/Stats'
import Faq from '../components/Faq'
import Footerend from '../components/Footerend'
import { NextSeo } from 'next-seo';

const Page = () => (
  <>
    <NextSeo nofollow={true} />
    <p>This page is not followed</p>
  </>
);



export default function Home() {
    return (
      <div>
      <Hero></Hero>
      <Bloglist></Bloglist>
      <Faq></Faq>
      <Stats></Stats>
      <Footerend></Footerend>
      </div>
    )
  }
  