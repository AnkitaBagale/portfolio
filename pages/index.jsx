import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import ProjectCard from '../components/projectCard';
import BlogCard from '../components/blogCard';
import { useState } from 'react';

const featuredProjects = [
  {
    title: 'U&I Store',
    description: 'Ecommerce Application for Sketching Related Products',
    date: '6th May 2021',
    skills: ['React', 'Express', 'JWT', 'MongoDB', 'Paypal']
  },
  {
    title: 'U&I Talks',
    description: 'A Social Media App to Post Learnings',
    date: '15th Jun 2021',
    skills: ['React', 'Redux', 'Express', 'JWT', 'MongoDB', 'ChakraUi']
  },
  {
    title: 'U&I Video Library',
    description: 'YouTube Inspired Learning App for Artists',
    date: '17th May 2021',
    skills: ['React', 'Express', 'JWT', 'MongoDB']
  }
];

const featuredBlogs = [
  {
    title: 'Reconciliation in React 🤯',
    description:
      'This blog gives you basic understanding of how React works behind the hood.',
    date: '15th Jun 2021',
    duration: '4 min read'
  },
  {
    title: 'JavaScript: Errors, Types, Properties 🐞',
    description:
      'This blogs tells about types of errors in Javascript, how to read them, understand and use those errors in our code.',
    date: '21st Mar 2021',
    duration: '13 min read'
  },
  {
    title: 'Introduction to JavaScript Selectors 🔍',
    description: `Let's learn how we can select elements more specifically using "querySelector" method.`,
    date: '14th Jan 2021',
    duration: '5 min read'
  }
];

const myAllSkills = [
  {
    image: '/images/js.svg',
    title: 'Javascript'
  },
  {
    image: '/images/react.svg',
    title: 'React'
  },
  {
    image: '/images/ts.svg',
    title: 'TypeScript'
  },
  {
    image: '/images/next.svg',
    title: 'NextJs'
  },
  {
    image: '/images/redux.svg',
    title: 'Redux'
  },
  {
    image: '/images/jest.svg',
    title: 'Jest'
  },
  {
    image: '/images/nodejs.svg',
    title: 'Node Js'
  },
  {
    image: '/images/express.svg',
    title: 'Express'
  },
  {
    image: '/images/mongoose.svg',
    title: 'Mongoose JS'
  },
  {
    image: '/images/mongodb.svg',
    title: 'MongoDB'
  },
  {
    image: '/images/jwt.svg',
    title: 'JWT'
  },
  {
    image: '/images/chakra.svg',
    title: 'ChakraUi'
  },
  {
    image: '/images/tailwind.svg',
    title: 'Tailwind'
  },
  {
    image: '/images/html.svg',
    title: 'HTML5'
  },
  {
    image: '/images/css.svg',
    title: 'CSS3'
  },
  {
    image: '/images/github.svg',
    title: 'Github'
  },
  {
    image: '/images/git.svg',
    title: 'Git'
  },
  {
    image: '/images/jira.svg',
    title: 'Jira'
  }
];

const Home = () => {
  const [showMoreSkills, setShowSkills] = useState(false);

  const loadSkills = () => {
    setShowSkills(flag => !flag);
  };
  return (
    <Layout>
      <Head>
        <title>Home | Ankita Bagale</title>
      </Head>
      <div className="text-center md:text-left md:w-6/7">
        <h1 className="text-4xl leading-normal font-custom">
          <span className="inline-block text-gray-500 pr-4">Hi there!</span>
          <br className="hidden md:block" />
          <span className="pr-3">I'm Ankita</span>
          <br className="md:hidden" />
          <span className="text-pastelBlue-dark">A Full Stack Developer</span>
        </h1>
        <p className="text-justify text-lg pt-3">
          I have 3 years of work experience as a QA Tester. I started learning
          web development out of curiosity. Now I want to pursue my career in
          this field as it's said -<br />
          <em>
            “If passion drives you, let reason hold the reins.” – Benjamin
            Franklin
          </em>
        </p>
      </div>

      <div>
        <h2 className="text-center md:text-left mt-24 mb-8 text-4xl font-custom">
          My Work
        </h2>

        <div className="grid grid-col-1 md:grid-cols-3 gap-8">
          {featuredProjects.map(projectDetails => (
            <ProjectCard
              key={projectDetails.title}
              projectDetails={projectDetails}
            />
          ))}
        </div>
        <div className="text-center">
          <Link href="/projects">
            <a className="inline-block bg-pastelBlue-dark hover:bg-pastelBlue-darker transition delay-100 ease-in-out text-base font-medium text-white py-1 px-4 mt-7 rounded-3xl">
              View All
            </a>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-center md:text-left mt-24 mb-8 text-4xl font-custom">
          My Blogs
        </h2>

        <div className="grid grid-col-1 md:grid-cols-3 gap-8">
          {featuredBlogs.map(blogDetails => (
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

      <div>
        <h2 className="text-center md:text-left mt-24 mb-8 text-4xl font-custom">
          My Skills
        </h2>

        <div
          className={`grid grid-cols-3 md:grid-cols-6 gap-8 md:justify-items-start  overflow-hidden ${
            showMoreSkills ? '' : 'max-h-40 md:max-h-20'
          }`}
        >
          {myAllSkills.map(skill => (
            <div key={skill.title} className="flex flex-col items-center">
              <Image width={50} height={50} src={skill.image} />
              <p className="text-sm pt-1.5 font-custom">{skill.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={loadSkills}
            className="inline-block bg-pastelBlue-dark hover:bg-pastelBlue-darker transition delay-100 ease-in-out text-base font-medium text-white py-1 px-4 mt-7 rounded-3xl"
          >
            {showMoreSkills ? 'View Less' : 'View All'}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
