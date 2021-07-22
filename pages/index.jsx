import Head from 'next/head';
import { Layout } from '../components/layout';

import { AboutCard } from '../components/aboutCard';
import {
  getMySkills,
  getFeaturedProjects,
  getFeaturedBlogs
} from '../lib/getData';
import { FeaturedSkills } from '../components/featuredSkills';
import { FeaturedProjects } from '../components/featuredProjects';
import { FeaturedBlogs } from '../components/featuredBlogs';

const Home = ({ myAllSkills, featuredProjects, featuredBlogs }) => {
  return (
    <Layout>
      <Head>
        <title>Home | Ankita Bagale</title>
      </Head>

      <AboutCard />

      <FeaturedProjects projects={featuredProjects} />

      <FeaturedBlogs blogs={featuredBlogs} />

      <FeaturedSkills myAllSkills={myAllSkills} />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const skills = await getMySkills();
  const projects = await getFeaturedProjects();
  const blogs = await getFeaturedBlogs();
  return {
    props: {
      myAllSkills: skills,
      featuredProjects: projects,
      featuredBlogs: blogs
    }
  };
};
