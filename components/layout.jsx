import Head from 'next/head';
import { useAnchors } from '../pages/_app';
import { Footer } from './footer';
import { NavBar } from './navBar';

export const Layout = ({ children }) => {
  const { topRef } = useAnchors();
  return (
    <div className="max-w-4xl w-full mx-auto">
      <div ref={topRef}></div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="px-4 py-8 md:py-16 min-h-80vh">{children}</main>

      <Footer />
    </div>
  );
};
