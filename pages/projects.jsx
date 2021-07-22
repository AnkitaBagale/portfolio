import Head from 'next/head';
import { Layout } from '../components/layout';
import { ProjectDetailCard } from '../components/projectDetailCard';
import { getProjects } from '../lib/getData';

const Projects = ({ myProjects }) => {
  return (
    <Layout>
      <Head>
        <title>Projects | Ankita Bagale</title>
      </Head>
      <div>
        <h2 className="text-center md:text-left mb-2 text-4xl font-custom">
          Projects
        </h2>
        <p>
          This is my web development journey from a CLI application to a
          Full-stack Application.
          <br />
          Goal Reached:{' '}
          <span className="text-pastelBlue-darker font-medium">25+ Apps</span>
        </p>
        <div>
          {myProjects.map(project => (
            <ProjectDetailCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: {
      myProjects: projects
    }
  };
};
