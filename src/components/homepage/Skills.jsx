import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

export default function Projects() {
  const data = [
    {
      label: "Hard skills",
      value: "hardSkills",
      icon: Square3Stack3DIcon,
      desc: (
        <button
          type="button"
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
        >
          Django
        </button>
      ),
    },
    {
      label: "Soft Skills",
      value: "softSkills",
      icon: UserCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Projects",
      value: "projects",
      icon: CodeBracketIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <Tabs value="dashboard" className="w-full">
      <h3 className="text-4xl font-bold tracking-tight text-white sm:text-6xl pb-4">
        Skills
      </h3>
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
