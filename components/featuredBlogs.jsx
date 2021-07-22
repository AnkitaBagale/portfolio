import { BlogCard } from '../components/blogCard';
import Link from 'next/link';
export const FeaturedBlogs = ({ blogs }) => {
  return (
    <div>
      <h2 className="text-center md:text-left mt-24 mb-8 text-4xl">My Blogs</h2>

      <div className="grid grid-col-1 md:grid-cols-3 gap-8">
        {blogs.map(blogDetails => (
          <BlogCard key={blogDetails.title} blogDetails={blogDetails} />
        ))}
      </div>
      <div className="text-center">
        <Link href="/blogs">
          <a className="inline-block bg-pastelBlue-dark hover:bg-pastelBlue-darker transition delay-100 ease-in-out text-base font-medium text-white py-1 px-4 mt-7 rounded-3xl">
            View All
          </a>
        </Link>
      </div>
    </div>
  );
};
