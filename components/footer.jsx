import { useAnchors } from '../pages/_app';

const Footer = () => {
  const { footerRef } = useAnchors();
  return (
    <div
      className="mt-20 py-10 px-4 md:px-0 md:mx-4 border-t flex flex-col md:flex-row justify-between items-center"
      ref={footerRef}
    >
      <span>
        © 2021, Built with <span className="text-pastelBlue-dark">NextJs</span>
      </span>
      <span className="pt-4 md:pb-4">
        <a
          className="px-4 text-gray-400 hover:text-pastelBlue-default"
          target="_blank"
          href="https://github.com/AnkitaBagale"
        >
          <i className="fab fa-github text-2xl" aria-hidden="true"></i>
        </a>
        <a
          className="px-4 text-gray-400 hover:text-pastelBlue-default"
          target="_blank"
          href="https://twitter.com/AnkitaB1108"
        >
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a
          className="px-4 text-gray-400 hover:text-pastelBlue-default"
          target="_blank"
          href="https://www.linkedin.com/in/ankita-bagale1108"
        >
          <i className="fab fa-linkedin-in text-2xl"></i>
        </a>
      </span>
    </div>
  );
};

export default Footer;
