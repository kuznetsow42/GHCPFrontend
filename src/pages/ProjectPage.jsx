import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProjectCard } from "../components/projects/ProjectCard";
import { Button, IconButton } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function ProjectPage() {
  const projectsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: () => axios.get("projects/").then((res) => res.data),
  });

  const skillsQuery = useQuery({
    queryKey: ["skills"],
    queryFn: () => axios.get("basics/").then((res) => res.data.hard_skills),
  });

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (projectsQuery.isFetched && skillsQuery.isFetched) {
      setSelectedSkills(skillsQuery.data.map((skill) => skill.id));
    }
  }, [projectsQuery.isFetched, skillsQuery.isFetched]);

  useEffect(() => {
    if (projectsQuery.isFetched) {
      setProjects(
        projectsQuery.data?.filter((project) =>
          project.tools.some((tool) => selectedSkills.includes(tool.id))
        )
      );
    }
  }, [projectsQuery.data, selectedSkills]);

  if (projectsQuery.isFetched && skillsQuery.isFetched)
    return (
        <div className="mx-auto p- bg-black">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-10 sm:mb-20">
            My (mostly personal) projects
          </h2>
          {selectedSkills.length !== skillsQuery.data.length && (
            <div className="fixed z-50 bottom-12 right-8">
              <Button
                onClick={() =>
                  setSelectedSkills(skillsQuery.data.map((skill) => skill.id))
                }
                color="blue"
              >
                See all
              </Button>
            </div>
          )}
          <ul
            className="hidden sm:flex flex-col sm:flex-row sm:items-end mb-1"
            id="skillList"
          >
            {skillsQuery.data.map((skill) => (
              <li key={skill.id}>
                <input
                  type="checkbox"
                  id={skill.id}
                  className="hidden peer"
                  checked={selectedSkills.includes(skill.id)}
                  onChange={(e) => {
                    const updatedSkills = e.target.checked
                      ? [...selectedSkills, skill.id]
                      : selectedSkills.filter((id) => id !== skill.id);
                    setSelectedSkills(updatedSkills);
                  }}
                />
                <label
                  htmlFor={skill.id}
                  className="inline-flex items-center justify-between w-full p-5  bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:text-red-900 peer-checked:border-blue-900"
                >
                  <div className="block">
                    <img src={skill.icon} width={42} />
                    <div className="w-full text-lg font-semibold">
                      {skill.name}
                    </div>
                    <div className="w-full text-sm">{skill.description}</div>
                  </div>
                </label>
              </li>
            ))}
          </ul>

          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
          </div>
    );
}
