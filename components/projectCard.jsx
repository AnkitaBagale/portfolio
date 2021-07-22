import { Badge } from './badge';

export const ProjectCard = ({ projectDetails }) => {
  return (
    <div className="shadow-md bg-pastelBlue-lightest rounded-lg p-4">
      <h3 className="text-lg font-semibold">{projectDetails.title}</h3>
      <small>
        <time>{projectDetails.date}</time>
      </small>
      <p className="pt-2">{projectDetails.shortDescription}</p>
      {projectDetails.skills.map(skill => (
        <Badge key={skill} text={skill} />
      ))}
      <br />
      <a
        href=""
        className="inline-block cursor-pointer bg-pastelBlue-dark hover:bg-pastelBlue-darker transition delay-100 ease-in-out text-xs font-medium text-white py-1.5 px-4 mt-4 mr-2 rounded-3xl"
      >
        View Live
      </a>
      <a
        href=""
        className="inline-block cursor-pointer border-2 border-pastelBlue-dark hover:bg-pastelBlue-darker hover:border-pastelBlue-darker transition delay-100 ease-in-out text-xs font-medium hover:text-white py-1 px-4 mt-4 rounded-3xl"
      >
        GitHub
      </a>
    </div>
  );
};
