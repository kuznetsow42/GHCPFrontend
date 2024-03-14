import { Typography, MenuItem } from "@material-tailwind/react";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { createChat } from "../../utils/chatAPI";

export default function ChatBitton() {
  const [cookies, setCookie] = useCookies(["chatCreated"]);

  if (!cookies.chatCreated) {
    return (
      <MenuItem
        className="flex items-center gap-3 rounded-lg"
        onClick={() => createChat(setCookie)}
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
