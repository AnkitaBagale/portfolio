import { ProjectCard } from '../components/projectCard';
import Link from 'next/link';

export const FeaturedProjects = ({ projects }) => {
  return (
    <div>
      <h2 className="text-center md:text-left mt-24 mb-8 text-4xl">My Work</h2>

      <div className="grid grid-col-1 md:grid-cols-3 gap-8">
        {projects.map(projectDetails => (
          <ProjectCard
            key={projectDetails.title}
            projectDetails={projectDetails}
          />
        ))}
      </div>
      <div className="text-center">
        <Link href="/projects">
          <a className="inline-block bg-pastelBlue-dark hover:bg-pastelBlue-darker transition delay-100 ease-in-out text-base font-medium text-white py-1 px-4 mt-7 rounded-3xl">
            View All
          </a>
        </Link>
      </div>
    </div>
  );
};
