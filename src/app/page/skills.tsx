import React, { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import Image from "next/image";

type Skill = {
  _id: string;
  name: string;
  image: string;
  skillNumber: number;
};

type Experience = {
  _id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
  order: number;
};

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSkills = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-eight-ashen.vercel.app/api/v1/skills/getAllSkills"
      );
      const data = await response.json();
      setSkills(data.skills);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  const getExperiences = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-eight-ashen.vercel.app/api/v1/experiences/getAllExperience"
      );
      const data = await response.json();
      setExperiences(data.experiences);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([getSkills(), getExperiences()]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-col items-start justify-start gap-8 w-full pb-10">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Skills Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="group transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center gap-3 p-3 border-2 border-neutral-700 rounded-xl hover:bg-neutral-800/50 transition-all duration-300">
                  <div className="relative w-5 h-5">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-[14px] text-white group-hover:text-yellow-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="w-full">
            <div className="font-bold text-3xl text-white pb-6">
              Experience
              {/* <div className="w-20 h-1 bg-yellow-400 rounded-full mt-2"></div> */}
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp._id}
                  className="group transform transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="p-6 border-2 border-neutral-700 rounded-xl hover:bg-neutral-800/50 transition-all duration-300">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                          {exp.position}
                        </h3>
                        <span className="text-sm text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                          {formatDate(exp.startDate)} -{" "}
                          {formatDate(exp.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-yellow-300 font-medium">
                          {exp.company}
                        </p>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-400 hover:text-yellow-300 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
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
                        </a>
                      </div>
                      <p className="text-gray-400 mt-2 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Skills;
