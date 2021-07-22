import { useAnchors } from '../pages/_app';

export const Footer = () => {
  const { topRef, footerRef } = useAnchors();
  return (
    <>
      <button
        onClick={() =>
          topRef?.current?.scrollIntoView({
            behavior: 'smooth'
          })
        }
        className="mt-10 flex mx-auto justify-center items-center flex-col"
      >
        <i className="fas fa-chevron-up text-2xl"></i>
        <span>Top</span>
      </button>

      <div
        className="mt-10 py-4 px-4 md:px-0 md:mx-4 border-t flex flex-col md:flex-row justify-between items-center"
        ref={footerRef}
      >
        <span>
          © 2021, Built with{' '}
          <span className="text-pastelBlue-darker font-medium">NextJs</span> and
          <span className="text-pastelBlue-darker font-medium"> Tailwind</span>
        </span>
        <span className="pt-4 md:pb-4">
          <a
            className="px-4 text-gray-400 hover:text-pastelBlue-default"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AnkitaBagale"
          >
            <i className="fab fa-github text-2xl" aria-hidden="true"></i>
          </a>
          <a
            className="px-4 text-gray-400 hover:text-pastelBlue-default"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/AnkitaB1108"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            className="px-4 text-gray-400 hover:text-pastelBlue-default"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ankita-bagale1108"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
        </span>
      </div>
    </>
  );
};
