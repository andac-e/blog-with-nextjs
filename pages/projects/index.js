import ProjectCard from "../../components/projectCard";
import { getAllProjects } from "../api/projects";

export default function ProjectsPage({ projects }) {
  return (
    <div className="site-container">
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
};
