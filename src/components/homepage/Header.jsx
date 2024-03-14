import { Button } from "@material-tailwind/react";
import { Navigate } from "react-router-dom";

export default function Header({ data }) {
  const stats = [
    { name: "Years old", value: data.birth_date },
    {
      name: "My timezone",
      value: "UTC +05:00",
    },
    {
      name: "Years of commercial expirience",
      value: data.greating_message,
    },
    { name: "Employers", value: "0" },
    { name: "Languages", value: "3" },
  ];

  const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];

  return (
    <section class="overflow-hidden bg-green-900 sm:flex sm:flex-row">
      <div class="mx-auto max-w-xl text-center m-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Andrew Smith
            <Button color="green">Free to hire</Button>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {data.greating_message}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex gap-4 flex-wrap justify-center">
            {data.links.map((link) => (
              <a href={link.url} target="_blank">
                <Button
                  color="green"
                  key={link.id}
                  className="flex items-center gap-3 px-4"
                >
                  <img
                    src={link.icon}
                    alt="metamask"
                    className="max-h-8 max-w-20"
                  />
                  {link.name}
                </Button>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse ">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <img
        alt="My photo"
        src="src/assets/photos/me.jpg"
        className="max-h-screen w-1/2 object-cover object-center shadow-xl shadow-blue-gray-900/50"
      />
    </section>
  );
}
