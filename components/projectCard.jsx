const ProjectCard = ({ projectDetails }) => {
  return (
    <div className="shadow-md bg-pastelBlue-lightest rounded-lg p-4">
      <h3 className="text-lg font-semibold">{projectDetails.title}</h3>
      <small>
        <time>{projectDetails.date}</time>
      </small>
      <p className="pt-2">{projectDetails.description}</p>
      {projectDetails.skills.map(skill => (
        <span
          key={skill}
          className="text-xs tracking-wide py-0.5 mt-2 px-4 mr-2 bg-pastelBlue-default font-medium text-white rounded-2xl inline-block"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default ProjectCard;
