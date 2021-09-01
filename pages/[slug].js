import Link from "next/link";
import Hero from '../components/Hero'
import Bloglist from '../components/Bloglist'
import Stats from '../components/Stats'
import Faq from '../components/Faq'

export default function Post({ post }) {
  return (
    <div>
        <Hero></Hero>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <h2>{post.Title}</h2>
      <h3>{post.Content}</h3>





    </div>
  );
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await fetch("http://157.230.103.61:1337/posts/");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.Slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`http://157.230.103.61:1337/posts?Slug=${slug}`);
  const data = await res.json();
  const post = data[0];

  return {
    props: { post },
  };
}