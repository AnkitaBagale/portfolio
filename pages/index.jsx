import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home | Ankita Bagale</title>
      </Head>
      <div className="md:flex text-center md:text-left justify-center md:justify-between">
        <div className="md:w-6/7 md:pr-6">
          <h1 className="text-4xl leading-normal">
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
        <div className="ml-3 mt-8 md:mt-0 w-30 h-30 relative inline-block">
          <span className="inline-block bg-pastelBlue-lightest rounded-full -top-3 -left-3 w-32 h-32 absolute "></span>
          <span className="inline-block bg-pastelBlue-lighter rounded-full absolute -top-2 -left-2  w-31 h-31"></span>
          <span className="inline-block bg-pastelBlue-light rounded-full absolute -top-1 -left-1 w-30 h-30"></span>
          <Image
            className="rounded-full absolute top-0"
            src="/images/dp2.jpg"
            width={150}
            height={150}
          />
          <span className="inline-block bg-pastelBlue-transparent rounded-full absolute -top-1 -left-1 w-30 h-30"></span>
        </div>
      </div>
      <div>
        <h2 className="mt-16 mb-8 text-4xl inline-block text-pastelBlue-dark">
          My Work
        </h2>
        <div className="grid grid-col-1 md:grid-cols-3">
          <div className="bg-pastelBlue-lighter rounded-lg p-4">
            <h3 className="text-lg font-semibold">U&I Store</h3>
            <p>Ecommerce application for Sketching related products</p>
            <span className="text-sm py-0.5 px-4 mr-2 bg-pastelBlue-default text-white rounded-2xl inline-block">
              React
            </span>
            <span className="text-sm py-0.5 px-4 mr-2 bg-pastelBlue-default text-white rounded-2xl inline-block">
              Express
            </span>
            <span className="text-sm py-0.5 mt-2 px-4 mr-2 bg-pastelBlue-default text-white rounded-2xl inline-block">
              MongoDB
            </span>
            <span className="text-sm py-0.5 mt-2 px-4 bg-pastelBlue-default text-white rounded-2xl inline-block">
              Paypal
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
