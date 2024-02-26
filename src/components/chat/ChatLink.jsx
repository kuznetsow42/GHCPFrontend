import { Typography, MenuItem } from "@material-tailwind/react";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function ChatLink() {
  const [cookies, setCookie] = useCookies(["chat"]);

  const create_chat = () =>
    axios
      .post("chat/create/")
      .then((response) => setCookie("chat", response.data.UUID, { path: "/" }));

  if (!cookies.chat) {
    return (
      <MenuItem
        className="flex items-center gap-3 rounded-lg"
        onClick={create_chat}
      >
        <ChatBubbleBottomCenterIcon color="red" width={48} />
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            StartChat
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
          >
            descr
          </Typography>
        </div>
      </MenuItem>
    );
  } else {
    return (
      <Link to="/chat">
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <ChatBubbleBottomCenterIcon color="green" width={48} />
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              Open chat
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              description
            </Typography>
          </div>
        </MenuItem>
      </Link>
    );
  }
}
