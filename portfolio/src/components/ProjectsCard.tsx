import { Github, ExternalLink } from "lucide-react";
import projects from "../data/projects";

export const ProjectsCard = () => {
  return (
    <div id="projects" className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects?.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors"
            >
              {/* Image Section */}
              <div className="aspect-video bg-gray-800">
                {project?.img ? (
                  <img
                    src={project.img}
                    alt={`Project ${project.id}`}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    No Image Available
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project {project.id}</h3>
                <p className="text-gray-400 mb-4">
                  {project.description || "Coming Soon..."}
                </p>

                {/* Technologies */}
                {project?.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {/* Links */}
                {project?.links && <div className="flex items-center gap-4">
                  <a
                    href={project?.links?.[0]?.url || "#"}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project?.links?.[1]?.url || "#"}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>}
              </div>
            </div>
          ))
        ) : (
          <div key={"no-projects"} className="text-gray-400 text-center col-span-3">No projects available.</div>
        )}
      </div>
    </div>
  );
};
