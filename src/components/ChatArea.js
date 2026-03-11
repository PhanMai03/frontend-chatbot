import React, { useEffect, useRef } from "react";
import Message from "./Message";

function ChatArea({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Auto scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto bg-white px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-4">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default ChatArea;
