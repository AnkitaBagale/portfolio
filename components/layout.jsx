import Head from 'next/head';
import NavBar from './navBar';

const Layout = ({ children }) => {
  return (
    <div className="max-w-4xl w-full mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="px-4 py-8 md:py-16">{children}</main>
    </div>
  );
};

export default Layout;
