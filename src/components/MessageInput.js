import React, { useState } from "react";
import { IoMicOutline } from "react-icons/io5";
import { PiWaveformBold } from "react-icons/pi";
import { LuArrowUp } from "react-icons/lu";

function MessageInput({ onSendMessage }) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setIsLoading(true);
    onSendMessage(input);
    setInput("");
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto flex items-center gap-2 bg-white rounded-full px-5 py-3 border border-[#E2E2E2] transition duration-200"
    >
      <button
        type="button"
        className="text-black transition duration-200 flex-shrink-0"
        title="New chat"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything"
        disabled={isLoading}
        className="flex-1 bg-transparent text-black outline-none placeholder-gray-500 disabled:opacity-50 text-base text-left"
      />

      <button
        type="button"
        className="text-black hover:text-white transition duration-200 flex-shrink-0"
        title="Voice input"
      >
        <IoMicOutline className="w-5 h-5" />
      </button>

      <button
        type="submit"
        disabled={isLoading || input.trim() === ""}
        className="w-8 h-8 rounded-full bg-black flex items-center justify-center transition duration-200 flex-shrink-0"
        title="Send message"
      >
        {isLoading ? (
          <span className="text-xs text-white">...</span>
        ) : input.trim() === "" ? (
          <PiWaveformBold className="w-5 h-5 text-white" />
        ) : (
          <LuArrowUp className="w-5 h-5 text-white" />
        )}
      </button>
    </form>
  );
}

export default MessageInput;
