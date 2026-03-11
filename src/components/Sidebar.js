import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdImages } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdApps } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";
import { SiCodeigniter } from "react-icons/si";
import { FiFolder } from "react-icons/fi";
import { MdClose } from "react-icons/md";

function Sidebar({ conversations, onNewConversation, onCloseSidebar }) {
  return (
    <div className="w-64 bg-[#F9F9F9] border-r border-[#E2E2E2] flex flex-col h-screen">

      {/* Header */}
      <div className="p-4 border-b border-[#E2E2E2] space-y-2">
        {/* Close Button */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-500 px-2">SIDEBAR</span>
          <button 
            onClick={onCloseSidebar}
            className="p-2 hover:bg-[#E2E2E2] rounded-lg transition text-gray-500 hover:text-black">
            <MdClose className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={onNewConversation}
          className="w-full bg-[#F9F9F9] hover:bg-[#E2E2E2] text-black rounded-lg py-3 px-4 transition duration-200 flex items-center justify-start gap-2"
        >
          <FiEdit />
          <span>New Chat</span>
        </button>

        <button
          className="w-full bg-[#F9F9F9] hover:bg-[#E2E2E2] text-black rounded-lg py-3 px-4 transition duration-200 flex items-center justify-start gap-2"
        >
          <CiSearch />
          <span>Search chats</span>
        </button>

        <button
          className="w-full bg-[#F9F9F9] hover:bg-[#E2E2E2] text-black rounded-lg py-3 px-4 transition duration-200 flex items-center justify-start gap-2"
        >
          <IoMdImages />
          <span>Images</span>
        </button>

   
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto px-2 py-4">
       <span className="text-gray-500">Your chats</span>
        <div className="space-y-2">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`p-3 rounded-lg cursor-pointer transition duration-200 truncate ${
                conv.active
                  ? "bg-[#E2E2E2] text-black"
                  : "text-black hover:bg-[#E2E2E2]"
              }`}
              title={conv.title}
            >
              <p className="text-sm truncate">{conv.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#E2E2E2] p-4">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition duration-200">
          <div className="w-8 h-8 bg-[#E2E2E2] rounded-full flex items-center justify-center">
            <span className="text-sm">👤</span>
          </div>
          <div className="text-sm flex-1 min-w-0">
            <p className="font-semibold truncate">User</p>
            <p className="text-black text-xs truncate">Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
