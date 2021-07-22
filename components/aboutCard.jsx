export const AboutCard = () => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-4xl leading-normal font-custom">
        <span className="inline-block text-gray-500 pr-4">Hi there!</span>
        <br className="hidden md:block" />
        <span className="pr-3">I'm Ankita</span>
        <br className="md:hidden" />
        <span className="text-pastelBlue-dark">A Full Stack Developer</span>
      </h1>
      <p className="text-justify text-lg pt-3">
        I have 3 years of work experience as a QA Tester. I started learning web
        development out of curiosity. Now I want to pursue my career in this
        field as it's said -<br />
        <em>
          “If passion drives you, let reason hold the reins.” – Benjamin
          Franklin
        </em>
      </p>
    </div>
  );
};
