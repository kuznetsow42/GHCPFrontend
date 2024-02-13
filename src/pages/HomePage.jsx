import Career from "../components/homepage/Career";
import Header from "../components/homepage/Header";
import Messanger from "../components/homepage/Messanger";
import Projects from "../components/homepage/Skills";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Years old", value: "20" },
  { name: "Years of commercial expirience", value: "0 (yet)" },
  { name: "Employers", value: "0" },
  { name: "Languages", value: "3" },
  { name: "Timezone differense", value: "+6 hrs" },
];

export default function HomePage() {
  return (
    <div>
      <Header />
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
