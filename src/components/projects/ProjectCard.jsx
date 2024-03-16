import { Button, ButtonGroup, Tooltip } from "@material-tailwind/react";
import { UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

export function ProjectCard({ project }) {
  return (
    <div class=" rounded-md bg-gray-900 shadow-lg sm:mx-4 my-6">
      <div class="md:flex">
        <div class="flex-none">
          <img
            src={project.image}
            alt="pic"
            class="h-72 w-96 rounded-md shadow-2xl transform  border-4 border-gray-300 shadow-lg"
          />
        </div>
        <div class="flex-col text-gray-300">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h3 class="text-2xl font-bold flex gap-2">
              {project.pet ? (
                <Tooltip content="My own project">
                  <UserIcon width={22} color="yellow" />
                </Tooltip>
              ) : (
                <Tooltip content="Company's project">
                  <UserGroupIcon width={22} color="green" />
                </Tooltip>
              )}
              {project.name}

            </h3>
            <ButtonGroup color="red">
              {!project.demo && (
                <a href={project.demo} target="_blank">
                  <Button >Demo</Button>
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank">
                  <Button >GitHub</Button>
                </a>
              )}
            </ButtonGroup>
          </div>
          <hr class="hr-text" data-content="" />
          <p class="md:block px-4 my-4 text-sm text-left">
            In Gotham City, mentally troubled comedian Arthur Fleck is
            disregarded and mistreated by society. He then embarks on a downward
            spiral of revolution and bloody crime. This path brings him
            face-to-face with his alter-ego: the Joker.{" "}
          </p>

          <div class="text-xs self-end">
            {project.tools.map((tool) => (
              <button
                key={tool.id}
                type="button"
                class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                {tool.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
