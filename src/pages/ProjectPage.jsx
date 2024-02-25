import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProjectCard } from "../components/projects/ProjectCard";
import {
  Button,
  Checkbox,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  IconButton,
} from "@material-tailwind/react";

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

  return (
    <div>
      {projectsQuery.isFetched && skillsQuery.isFetched && (
        <section className="bg-gray-50">
          <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="md:flex md:items-end md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Read trusted reviews from our customers
                </h2>

                <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur praesentium natus sapiente commodi. Aliquid sunt
                  tempore iste repellendus explicabo dignissimos placeat, autem
                  harum dolore reprehenderit quis! Quo totam dignissimos earum.
                </p>
              </div>
            </div>
            <List className="flex-row-reverse flex-wrap" id="skillList">
              {skillsQuery.data.map((skill) => (
                <ListItem className="p-0 w-28" key={skill.id}>
                  <label
                    htmlFor={skill.id}
                    className="flex cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Checkbox
                        id={skill.id}
                        ripple={false}
                        defaultChecked
                        className="hover:before:opacity-0 checbox"
                        containerProps={{
                          className: "p-0",
                        }}
                        onChange={(e) => {
                          const updatedSkills = e.target.checked
                            ? [...selectedSkills, skill.id]
                            : selectedSkills.filter((id) => id !== skill.id);

                          setSelectedSkills(updatedSkills);
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      {skill.name}
                    </Typography>
                  </label>
                </ListItem>
              ))}
            </List>
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </section>
      )}
      {selectedSkills.length > 0 && (
        <div className="fixed z-90 bottom-12 right-8">
          <IconButton
            onClick={() =>
              document.getElementById("skillList")?.scrollIntoView(false)
            }
          >
            {selectedSkills.join(", ")}
          </IconButton>
        </div>
      )}
    </div>
  );
}
