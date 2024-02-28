import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import ChatInput from "../components/chat/ChatInput";

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function ChatPage() {
  const chatQuery = useQuery({
    queryKey: ["chat"],
    queryFn: () =>
      axios.get("chat/", { withCredentials: true }).then((res) => res.data),
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (chatQuery.isFetched) {
    return (
      <div className="flex flex-col p-4  sm:mx-56">
        <div className="flex flex-col sm:mx-20">
          {chatQuery.data.map((message) => (
            <div
              className={`flex w-full my-2 justify-${
                message.is_reply ? "end" : "start"
              }`}
              key={message.id}
            >
              <div>
                <div
                  className={
                    message.is_reply
                      ? "bg-green-600 text-white"
                      : "bg-blue-600 text-white "
                  }
                >
                  <p className="text-sm p-3">{message.text}</p>
                  {message.attachment && (
                      <DocViewer
                        documents={[{ uri: message.attachment }]}
                        pluginRenderers={DocViewerRenderers}
                      />
                  )}
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  {message.timestamp}
                </span>
              </div>
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            </div>
          ))}
        </div>
        <ArrowUpCircleIcon
          className="fixed w-12 sm:bottom-4 bottom-12 right-4"
          color="blue"
          onClick={scrollToTop}
        />
        <ChatInput />
      </div>
    );
  } else return "Load";
}
