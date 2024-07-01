"use client";
import { socket } from "@/socket";
import { useState } from "react";

export default function Home() {
  const [SID, setSID] = useState<string>("no id set yet");
  const handleSendMessage = () => {
    console.log("in the handler");
    socket.emit("messageSent", "send me the socket id");
    socket.on("messageReceived", (ID) => {
      console.log(ID, "it is shown in the client");
      setSID(ID);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-9">
      <button
        className="text-green-500 border bg-green-700"
        onClick={handleSendMessage}
      >
        send message to server
      </button>
      <div className="text-5xl text-blue-500">{SID}</div>
    </div>
  );
}
