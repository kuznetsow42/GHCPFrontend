import { useQuery } from "@tanstack/react-query";
import Career from "../components/homepage/Career";
import Header from "../components/homepage/Header";
import Messanger from "../components/homepage/Messanger";
import Projects from "../components/homepage/Skills";
import axios from "axios";

export default function HomePage() {
  const query = useQuery({
    queryKey: ["basics"],
    queryFn: () => axios.get("basics/").then((res) => res.data),
  });
  if (query.isError) return <h4>{query.error}</h4>;

  return (
    <div>
      {query.isLoading ? (
        <p className="bg-yellow-700 text-center text-7xl p-10">Loading</p>
      ) : (
        <Header data={query.data} />
      )}
      <div className="bg-purple-900 pb-10">
        <div className="flex flex-col md:flex-row p-2 gap-8">
          <Projects />
          <Career />
        </div>
      </div>
      <Messanger />
    </div>
  );
}
