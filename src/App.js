import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import MessageInput from "./components/MessageInput";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [conversations, setConversations] = useState([
    { id: 1, title: "New Conversation", active: true },
  ]);

  const handleSendMessage = (text) => {
    const userMessage = {
      id: messages.length + 1,
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "This is a sample response. Connect this to your backend API.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleNewConversation = () => {
    const newConv = {
      id: conversations.length + 1,
      title: `Conversation ${conversations.length + 1}`,
      active: false,
    };

    setConversations((prev) => [...prev, newConv]);
    setMessages([]);
  };

  return (
    <div className="flex h-screen bg-[#F9F9F9] text-black">

      {sidebarOpen && (
        <Sidebar
          conversations={conversations}
          onNewConversation={handleNewConversation}
          onCloseSidebar={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-col flex-1">

        {/* {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-3 text-xl"
          >
            ☰
          </button>
        )} */}

        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-4">

            <div className="text-center mb-8">
              <h2 className="text-5xl font-bold mb-4">🤖</h2>
              <h1 className="text-5xl font-bold mb-6">
                How can I help?
              </h1>

              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Ask me anything or start a conversation about topics
                that interest you.
              </p>
            </div>

            <MessageInput onSendMessage={handleSendMessage} />
          </div>
        ) : (
          <>
            <ChatArea messages={messages} />

            <div className="bg-white border-t border-[#E2E2E2] px-4 py-6 flex justify-center">
              <MessageInput onSendMessage={handleSendMessage} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;