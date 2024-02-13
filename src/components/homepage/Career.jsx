import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function Career() {
  return (
    <Timeline className="md:w-1/3">
      <h3 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl pb-4">
        Companies
      </h3>
      <TimelineItem className="h-28">
        <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-blue-200 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
          <TimelineIcon className="p-3" variant="ghost">
            <PlusCircleIcon className="h-5 w-5" />
          </TimelineIcon>
          <div className="flex flex-col gap-1">
            <Typography variant="h6" color="blue-gray">
              You can be my first employer!
            </Typography>
          </div>
        </TimelineHeader>
      </TimelineItem>
    </Timeline>
  );
}
