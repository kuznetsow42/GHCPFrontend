import axios from "axios";

export function createChat(setCookie) {
  axios.post("chat/create/", {}, { withCredentials: true }).then(() => {
    setCookie("chatCreated", true, { path: "/" });
    document.location.href = "/chat";
  });
}

export const sendMessage = (e) => {
  e.preventDefault();
  let formData = new FormData(e.target);
  axios.post("chat/", formData, { withCredentials: true });
};

