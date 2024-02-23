import { useQuery } from "@tanstack/react-query";
import Career from "../components/homepage/Career";
import Header from "../components/homepage/Header";
import Messanger from "../components/homepage/Messanger";
import Skills from "../components/homepage/Skills";
import axios from "axios";
import { ProjectCard } from "../components/projects/ProjectCard";

export default function ProjectPage() {
  const query = useQuery({
    queryKey: ["projects"],
    queryFn: () => axios.get("projects/").then((res) => res.data),
  });

  if (query.isFetched) {
    return (
      <div>
        <section class="bg-gray-50">
          <div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div class="md:flex md:items-end md:justify-between">
              <div class="max-w-xl">
                <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Read trusted reviews from our customers
                </h2>

                <p class="mt-6 max-w-lg leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur praesentium natus sapiente commodi. Aliquid sunt
                  tempore iste repellendus explicabo dignissimos placeat, autem
                  harum dolore reprehenderit quis! Quo totam dignissimos earum.
                </p>
              </div>

              <a
                href="#"
                class="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
              >
                <span class="font-medium"> Read all reviews </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 rtl:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
              {query.data.map((project) => (
                <ProjectCard project={project} />
              ))}
          </div>
        </section>
      </div>
    );
  }
}
