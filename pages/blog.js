import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      {/* loop over the posts and show them */}
      {posts &&
        posts.map((post) => (
          <Link href={`/${post.Slug}`} key={post.id}>
            <a>
              <h2>{post.Title}</h2>
          
            </a>
          </Link>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://157.230.103.61:1337/posts/");
  const posts = await res.json();

  return {
    props: { posts },
  };
}