import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const { targetUserId } = useParams();
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const firstName = user?.firstName;

  const [messages, setMessages] = useState([
    { text: "You were the Chosen One!" },
  ]);

  console.log("Target User ID:", targetUserId);

  useEffect(() => {
    if (!userId) return;

    const socket = createSocketConnection();
    // as sson as the page loads , the socket connection is made and the joinChat is emitted
    socket.emit("joinChat", { firstName, userId, targetUserId });

    return () => {
      socket.disconnect();
    };
  }, [firstName, userId, targetUserId]);

  return (
    <div className="w-1/2 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      {/* Header */}
      <h1 className="p-5 border-b border-gray-600 text-lg font-semibold">
        Chat
      </h1>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className="chat chat-start">
            <div className="chat-header">
              Priya Saha
              <time className="text-xs opacity-50 ml-2">1 sec ago</time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          className="flex-1 border border-gray-500 text-white rounded p-2 bg-transparent"
          placeholder="Type a message..."
        />
        <button className="btn btn-secondary">Send</button>
      </div>
    </div>
  );
};

export default Chat;
