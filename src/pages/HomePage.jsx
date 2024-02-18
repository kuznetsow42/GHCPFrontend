import { useQuery } from "@tanstack/react-query";
import Career from "../components/homepage/Career";
import Header from "../components/homepage/Header";
import Messanger from "../components/homepage/Messanger";
import Skills from "../components/homepage/Skills";
import axios from "axios";

export default function HomePage() {
  const query = useQuery({
    queryKey: ["basics"],
    queryFn: () => axios.get("basics/").then((res) => res.data),
  });

  if (query.isFetched) {
    return (
      <div>
        <Header data={query.data} />
        <div className="bg-purple-900 pb-10">
          <div className="flex flex-row flex-wrap p-2 gap-8 items-stretch justify-between w-full">
            <Skills
              hardSkills={query.data.hard_skills}
              softSkills={query.data.soft_skills}
              languages={query.data.languages}
            />
            <Career />
          </div>
        </div>
        <Messanger />
      </div>
    );
  }
}
