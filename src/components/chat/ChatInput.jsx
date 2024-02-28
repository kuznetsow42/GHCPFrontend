import React, { useState } from "react";
import axios from "axios";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function ChatInput() {
  const sendMessage = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    axios.post("chat/", formData, { withCredentials: true });
  };

  return (
    <form onSubmit={sendMessage} className="flex mt-10">
      <label className="text-gray-700 w-full" for="message">
        <textarea
          className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          id="message"
          placeholder="Enter your message"
          name="message"
          rows="5"
          cols="40"
        />
        <div className="max-w-2xl mx-auto">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            for="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            name="attachment"
            type="file"
          />
        </div>
      </label>
      <button type="submit">
        <PaperAirplaneIcon
          height={48}
          className="w-12 ml-1 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        />{" "}
      </button>
    </form>
  );
}
