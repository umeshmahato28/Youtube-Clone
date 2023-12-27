import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {

      useEffect(() =>{
           const interval = setInterval(() =>{
            console.log("api polling");
            }, 2000);

            return () => clearInterval(interval);
      }, [])

  return (
    <div className="ml-2 w-full h-[520px] p-2 border border-black  bg-slate-100 rounded-lg">
      <div className="font-bold p-3  shadow-lg border border-black rounded-md">
            TOP CHAT
      </div>
      <ChatMessage name="User" message="Namaste Raect live" />
    </div>
  );
};

export default LiveChat;
