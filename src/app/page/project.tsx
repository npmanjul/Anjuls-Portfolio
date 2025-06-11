import React, { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";

type Project = {
  _id: string;
  projectname: string;
  projectlink: string;
  githublink: string;
  description: string;
  skillId: string[];
  image: string;
  projectNumber: number;
  visible: boolean;
};

const Project = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProjects = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://portfolio-backend-eight-ashen.vercel.app/api/v1/projects/getAllProjects"
      );
      const data = await response.json();
      setProjects(data.projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-start justify-start gap-8 w-full pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project) => (
          <div
            key={project._id}
            className="group transform transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col border-2 border-neutral-700 rounded-xl overflow-hidden hover:bg-neutral-800/50 transition-all duration-300">
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.projectname}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col gap-1">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                  {project.projectname}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Links */}
                <div className="flex items-center gap-4 mt-2">
                  <a
                    href={project.projectlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-yellow-300 hover:text-yellow-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-yellow-300 hover:text-yellow-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>

                {/* Skills Used */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.skillId.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium text-yellow-300 bg-yellow-300/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
