import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Language({ lang }) {
  return (
    <article class="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-6">
      <div class="flex items-center gap-4">
        <span class="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
          <img src={lang.icon} width={48} />
        </span>

        <p class="text-2xl font-medium text-gray-900">{lang.name}</p>
      </div>

      <div class="flex flex-col gap-2 rounded p-1 text-green-600">
        <p className="flex flex-col">
          <p>Reading</p> {lang.reading}
        </p>
        <p className="flex flex-col">
          <p>Reading</p> {lang.speaking}
        </p>
      </div>
    </article>
  );
}
