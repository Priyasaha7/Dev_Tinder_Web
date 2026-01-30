const Chat = () => {
  return (
    <div className="flex flex-col h-[70vh] w-3/4 mx-auto bg-base-300 rounded-xl shadow-lg">
      {/* Header */}
      <div className="border-b border-base-content/20 px-6 py-4">
        <h2 className="text-lg font-semibold">Chat · Priya</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {/* Other user message */}
        <div className="chat chat-start">
          <div className="chat-header text-xs opacity-60 mb-1">
            Akshay Saini
            <time className="ml-2">2 hours ago</time>
          </div>
          <div className="chat-bubble bg-base-200 text-sm">
            You were the Chosen One!
          </div>
        </div>

        {/* Priya message */}
        <div className="chat chat-end">
          <div className="chat-header text-xs opacity-60 mb-1">
            Priya
            <time className="ml-2">1 hour ago</time>
          </div>
          <div className="chat-bubble bg-primary text-primary-content text-sm">
            I know, right 😄
          </div>
          <div className="chat-footer text-xs opacity-50 mt-1">Seen</div>
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-base-content/20 px-4 py-3 flex gap-3">
        <input
          placeholder="Type a message..."
          className="input input-bordered w-full bg-base-200"
        />
        <button className="btn btn-primary px-6">Send</button>
      </div>
    </div>
  );
};

export default Chat;
