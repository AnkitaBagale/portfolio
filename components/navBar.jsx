import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useState } from 'react';
import { useAnchors } from '../pages/_app';

const navlinks = [
  {
    link: '/',
    title: 'Home'
  },
  {
    link: '/projects',
    title: 'Projects'
  },
  {
    link: '/blogs',
    title: 'Blogs'
  }
];

export const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const { footerRef } = useAnchors();
  const router = useRouter();

  return (
    <nav className=" border-b text-base box-border bg-white flex justify-between items-center md:px-0 md:mx-4 px-4 py-6 sticky top-0 md:static z-20">
      <div className="font-brand text-2xl tracking-wide text-pastelBlue-default">
        <Link href="/">
          <a>ankita bagale</a>
        </Link>
      </div>
      <div
        className={`md:hidden ${
          showNav ? 'fixed right-4 top-6 h-auto z-10' : ''
        }`}
        onClick={() => setShowNav(showNav => !showNav)}
      >
        <div
          className={`bg-black w-7 h-1 mb-1 transition duration-200 ease-in-out ${
            showNav ? 'w-6 relative -bottom-2 rotate-45' : ''
          }`}
        ></div>
        <div
          className={`bg-black w-7 h-1 mb-1 transition duration-200 ease-in-out ${
            showNav ? 'w-6 relative -rotate-45' : ''
          }`}
        ></div>
        <div className={showNav ? 'hidden' : 'bg-black w-4 h-1'}></div>
      </div>

      {
        <ul
          className={`md:flex md:h-auto md:w-auto md:static items-center font-custom ${
            showNav
              ? 'flex flex-col py-10 px-5 w-screen h-screen box-border fixed top-0 left-0 bottom-0 bg-white'
              : 'hidden'
          }`}
        >
          {navlinks.map(({ link, title }) => {
            return (
              <li
                key={title}
                className={`py-4 md:py-0 md:px-4 text-sm uppercase hover:text-black ${
                  router.pathname === link ? 'text-black' : 'text-gray-500'
                }`}
              >
                <Link href={link}>
                  <a>{title}</a>
                </Link>
              </li>
            );
          })}
          <li className="py-4 md:py-0 md:px-4 md:pr-0 text-gray-500 hover:text-black">
            <button
              onClick={() =>
                footerRef?.current?.scrollIntoView({
                  behavior: 'smooth'
                })
              }
              className="text-sm uppercase"
            >
              Contact
            </button>
          </li>
        </ul>
      }
    </nav>
  );
};
