// import { useParams } from "react-router-dom";

// const Chat = () => {
//   const { targetUserId } = useParams();
//   console.log(targetUserId);

//   return (
//     <div className="flex flex-col h-[70vh] w-3/4 mx-auto bg-base-300 rounded-xl shadow-lg">
//       {/* Header */}
//       <div className="border-b border-base-content/20 px-6 py-4">
//         <h2 className="text-lg font-semibold">Chat · Priya</h2>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
//         {/* Other user message */}
//         <div className="chat chat-start">
//           <div className="chat-header text-xs opacity-60 mb-1">
//             Akshay Saini
//             <time className="ml-2">2 hours ago</time>
//           </div>
//           <div className="chat-bubble bg-base-200 text-sm">
//             You were the Chosen One!
//           </div>
//         </div>

//         {/* Priya message */}
//         <div className="chat chat-end">
//           <div className="chat-header text-xs opacity-60 mb-1">
//             Priya
//             <time className="ml-2">1 hour ago</time>
//           </div>
//           <div className="chat-bubble bg-primary text-primary-content text-sm">
//             I know, right 😄
//           </div>
//           <div className="chat-footer text-xs opacity-50 mt-1">Seen</div>
//         </div>
//       </div>

//       {/* Input */}
//       <div className="border-t border-base-content/20 px-4 py-3 flex gap-3">
//         <input
//           placeholder="Type a message..."
//           className="input input-bordered w-full bg-base-200"
//         />
//         <button className="btn btn-primary px-6">Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chat;

import { useState } from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { targetUserId } = useParams();

  const [messages, setMessages] = useState([
    { text: "You were the Chosen One!" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  console.log("Target User ID:", targetUserId);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    setMessages([...messages, { text: newMessage }]);
    setNewMessage("");
  };

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
              <time className="text-xs opacity-50 ml-2">2 hours ago</time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-gray-500 text-white rounded p-2 bg-transparent"
          placeholder="Type a message..."
        />
        <button className="btn btn-secondary">Send</button>
      </div>
    </div>
  );
};

export default Chat;
