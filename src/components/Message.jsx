import React from "react";
import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();
  return (
    <div className="px-6 ">
      <div
        className={` chat chat-start ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="profile picture" src={message.avatar} />
          </div>
        </div>
        <div className="chat-header">{message.name}</div>
        <div className="chat-bubble">{message.text}</div>
        <div className="chat-footer opacity-50">
          <time className="text-xs opacity-50">12:45</time>
        </div>
      </div>
    </div>
  );
};

export default Message;
