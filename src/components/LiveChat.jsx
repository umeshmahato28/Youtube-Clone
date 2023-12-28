import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("api polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(10),
        })
      );
    }, 200 );

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="ml-2 mb-4 w-full font-bold p-1 bg-blue-200 shadow-xl   shadow-blue-500/50  rounded-md">
        TOP CHAT
      </div>
      <div className="ml-2 w-full h-[450px] p-2 border border-black  bg-slate-100 rounded-t-md  overflow-y-scroll  flex flex-col-reverse">
        <div>
          {chatMessages.map((c) => (
            <ChatMessage name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 rounded-b-md ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

      //     console.log("On Form Submit", liveMessage);
          dispatch(
            addMessage({
              name: "Umesh Mahato",
              message:  liveMessage ,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          className=" w-[21rem] p-2 border border-slate-400 bg-slate-100"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-4 rounded  shadow-xl shadow-green-500/50 bg-green-400">SEND</button>
      </form>
    </>
  );
};

export default LiveChat;
