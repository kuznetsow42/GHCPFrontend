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
  LanguageIcon,
} from "@heroicons/react/24/solid";
import { HardSkill } from "./skills/HardSkill";
import SoftSkill from "./skills/SoftSkill";
import { Language } from "./skills/Language";

export default function Skills({ hardSkills, softSkills, languages }) {
  const data = [
    {
      label: "Hard skills",
      value: "hardSkills",
      icon: Square3Stack3DIcon,
      desc: (
        <div>
          {hardSkills.map((skill) => (
            <HardSkill skill={skill} />
          ))}
        </div>
      ),
    },
    {
      label: "Languages",
      value: "languages",
      icon: LanguageIcon,
      desc: <div className="flex flex-col gap-3">{languages.map((lang) => <Language lang={lang} />)}</div>,
    },
    {
      label: "Soft Skills",
      value: "softSkills",
      icon: UserCircleIcon,
      desc: (
        <div className="bg-white p-10">
          {softSkills.map((skill) => (
            <SoftSkill skill={skill} />
          ))}
        </div>
      ),
    },
  ];
  return (
    <Tabs value="hardSkills" className="flex-1">
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
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
