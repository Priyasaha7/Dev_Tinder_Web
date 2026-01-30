const Chat = () => {
  return (
    <div className="flex flex-col h-full w-3/4  bg-base-300 rounded-xl p-4">
      {/* Header */}
      <div className="border-b border-base-content/20 pb-2 mb-3">
        <h2 className="text-lg font-semibold">Chat</h2>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto space-y-4 px-2">
        {/* Incoming Message */}
        <div className="flex flex-col max-w-[70%]">
          <span className="text-xs opacity-60 mb-1">
            Akshay Saini · 2 hours ago
          </span>
          <div className="bg-base-200 rounded-xl px-4 py-2 text-sm">
            You were the Chosen One!
          </div>
          <span className="text-xs opacity-50 mt-1">Seen</span>
        </div>
      </div>

      {/* Input Area */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered w-full bg-base-200"
        />
        <button className="btn btn-primary px-6">Send</button>
      </div>
    </div>
  );
};

export default Chat;
