import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className=" border-b md:border-0 text-base box-border bg-white flex justify-between items-center px-4 py-6 sticky top-0">
      <div className="font-custom text-2xl tracking-wide">Ankita Bagale</div>
      <div
        className={showNav ? 'fixed right-4 top-6 h-auto z-10' : ''}
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

      {showNav && (
        <ul className="flex flex-col items-center py-10 px-5 w-screen h-screen box-border fixed top-0 left-0 bottom-0 bg-white z-0">
          <li className="py-4 uppercase">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="py-4 uppercase">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className="py-4 uppercase">
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
