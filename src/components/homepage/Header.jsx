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

export default function Header() {
  return (
    <section class="overflow-hidden bg-green-900 sm:grid sm:grid-cols-2 sm:items-center">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Andrew Smith
              <span class="p-4 bg-green-600  text-2xl font-semibold  py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                Free to hire
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
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
      </div>

      <img
        alt="My photo"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F6826%2Fffddd1a30433b2bb4a8df39328f256d1fbe2a8eev2_hq.jpg&f=1&nofb=1&ipt=4189dea2e4c47de35e36279d181106619d0e5ccbcc0a19eb2d0254948e5fa51c&ipo=images"
        class="h-full w-full object-cover "
      />
    </section>
  );
}
