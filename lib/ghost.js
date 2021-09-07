import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://www.artzstudio.com',
  key: 'b044a64852ac3a38900356f06e',
  version: 'v3'
});


export async function getAllPosts() {
    const posts = await api.posts.browse({ limit: '10' });
    return posts;
  }
  


  export async function getPostBySlug(slug) {
    const post = await api.posts.read(
      { slug },
      { formats: ['html'] }
    );
    return post
  }
  