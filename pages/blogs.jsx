import Head from 'next/head';
import { BlogDetailCard } from '../components/blogDetailCard';
import { Layout } from '../components/layout';
import { getBlogs } from '../lib/getData';

const Blogs = ({ myBlogs }) => {
  return (
    <Layout>
      <Head>
        <title>Blogs | Ankita Bagale</title>
      </Head>
      <div>
        <h2 className="text-center md:text-left mb-2 text-4xl font-custom">
          Blogs
        </h2>

        <div>
          {myBlogs.map(blog => (
            <BlogDetailCard key={blog.title} blog={blog} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const blogs = await getBlogs();
  return {
    props: {
      myBlogs: blogs
    }
  };
};
