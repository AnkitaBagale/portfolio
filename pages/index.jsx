import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Home | Ankita Bagale</title>
        </Head>
        <div className="md:flex justify-between">
          <h1 className="text-4xl leading-normal">
            <span className="inline-block text-gray-500">Hi there!</span>
            <br />
            <span className="pr-3">I'm Ankita</span>
            <span className="text-pastelBlue-dark">A Web Developer</span>
          </h1>
          <div className="ml-3 relative">
            <div className="bg-pastelBlue-lightest rounded-full -top-3 -left-3 w-32 h-32 absolute "></div>
            <div className="bg-pastelBlue-lighter rounded-full absolute -top-2 -left-2  w-31 h-31"></div>
            <div className="bg-pastelBlue-light rounded-full absolute -top-1 -left-1 w-30 h-30"></div>
            <Image
              className="rounded-full absolute top-0"
              src="/images/twitter-pic.jpg"
              width={150}
              height={150}
            />
            <div className="bg-pastelBlue-transparent rounded-full absolute -top-1 -left-1 w-30 h-30"></div>
          </div>
        </div>

        <p></p>
      </div>
    </Layout>
  );
};

export default Home;
