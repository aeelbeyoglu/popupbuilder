import Hero from '../components/Hero'
import Bloglist from '../components/Bloglist'
import BlogPost from '../components/BlogPost'

import { getAllPosts, getPostBySlug } from '../lib/ghost';

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const data = await getPostBySlug(slug);
  return { props: { data } };
}

export default function Post({ data }) {
  return (
    <article>
        <BlogPost title={data.title}>
      </BlogPost>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
      
    </article>
  );
}
