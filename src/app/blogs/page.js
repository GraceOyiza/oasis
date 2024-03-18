import LatestPosts from '../components/latest-posts';
import { getBlogsData } from '../utils/data';
import BlogBanner from '../components/BlogBanner';
import '../styles/blog.css';


async function Blog () {
  const posts = await getBlogsData();
  const firstPost = posts[0]
  return (
    <div>
      <BlogBanner frontmatter={firstPost.frontmatter} slug={firstPost.slug} />
      <div className="lg:pt-[20rem]">
        <LatestPosts posts={posts.slice(1)} />
      </div>
    </div>
  );
};

export default Blog;