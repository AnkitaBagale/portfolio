export const ProjectDetailCard = ({ project }) => {
  return (
    <div className="shadow-md bg-pastelBlue-lightest rounded-lg p-4 mt-8">
      <h3 className="text-lg font-semibold">
        {project.title}
        {project?.shortDescription && ' - ' + project?.shortDescription}
      </h3>
      <small>
        <time>{project.date}</time>
      </small>
      <p className="pt-2">{project.description}</p>

      <a
        target="_blank"
        rel="noreferrer"
        href={project.link}
        className="inline-block cursor-pointer bg-pastelBlue-dark hover:bg-pastelBlue-darker transition delay-100 ease-in-out text-xs font-medium text-white py-1.5 px-4 mt-4 mr-2 rounded-3xl"
      >
        View Live
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={project.sourceLink}
        className="inline-block cursor-pointer border-2 border-pastelBlue-dark hover:bg-pastelBlue-darker hover:border-pastelBlue-darker transition delay-100 ease-in-out text-xs font-medium hover:text-white py-1 px-4 mt-4 rounded-3xl"
      >
        View Source
      </a>
      {project.link2 && (
        <>
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href={project.link2}
            className="inline-block cursor-pointer bg-pastelBlue-dark hover:bg-pastelBlue-darker transition delay-100 ease-in-out text-xs font-medium text-white py-1.5 px-4 mt-4 mr-2 rounded-3xl"
          >
            ReactJS App
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.sourceLink2}
            className="inline-block cursor-pointer border-2 border-pastelBlue-dark hover:bg-pastelBlue-darker hover:border-pastelBlue-darker transition delay-100 ease-in-out text-xs font-medium hover:text-white py-1 px-4 mt-4 rounded-3xl"
          >
            View Source
          </a>
        </>
      )}
    </div>
  );
};
