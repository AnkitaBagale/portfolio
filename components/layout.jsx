import Head from 'next/head';
import Footer from './footer';
import NavBar from './navBar';

const Layout = ({ children }) => {
  return (
    <div className="max-w-4xl w-full mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="px-4 py-8 md:py-16 min-h-80vh">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
