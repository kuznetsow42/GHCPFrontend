import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button
} from "@material-tailwind/react";
import { ClipboardDocumentListIcon, DocumentTextIcon } from "@heroicons/react/16/solid";

export default function Header({ data }) {
  const stats = [
    {
      name: "Phone number",
      value: (
        <Popover placement="right">
          <PopoverHandler onClick={() => navigator.clipboard.writeText(data.phone)}>
            <button className="text-lg p-0 flex">{data.phone}<ClipboardDocumentListIcon width={14} /></button>
          </PopoverHandler>
          <PopoverContent className="bg-black p-2 text-white">Copied!</PopoverContent>
        </Popover>
      ),
    },
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
    {
      name: "Languages",
      value: data.languages.map((lang) => lang.name + ", "),
    },
  ];

  return (
    <section className="overflow-hidden bg-green-900 text-white flex flex-col md:flex-row items-center">
      <div className="mx-auto max-w-xl text-center m-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight   sm:text-6xl">
            {`${data.first_name} ${data.last_name}`}
          </h2>
          <div className="flex gap-4 flex-wrap justify-center py-4">
            <a href={data.resume} target="_blank">
              <Button color="red" className="grid grid-cols-2 items-center">
                <DocumentTextIcon className="max-h-8 max-w-20" />
                Resume
              </Button>
            </a>
            {data.links.map((link) => (
              <a href={link.url} target="_blank">
                <Button
                  color="green"
                  key={link.id}
                  className="flex items-center gap-3"
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
          <p className="mt-6 text-lg leading-8">
            {data.greating_message}
          </p>
        </div>
          <ul className="mt-7 list-inside">
            {stats.map((stat) => (
              <li
                key={stat.id}
                className="flex mt-1 leading-normal   transition duration-100 ease-in  text-md print:"
              >
                <span className="mr-2 text-lg font-semibold text-yellow-900 leading-snugish">
                  {stat.name}
                </span>
                {stat.value}
              </li>
            ))}
          </ul>
      </div>

      <div class="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                <img src="src/assets/photos/main.jpg" alt="Hero Image" class="rounded-lg shadow-lg" />
            </div>
    </section>
  );
}

