import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import SendMessage from "./SendMessage";
import { UserAuth } from "../context/AuthContext";
const ChatBox = () => {
  const [MESSAGES, setMESSAGES] = useState([]);
  const scrolltoEnd = useRef();
  const { currentUser } = UserAuth();

  const scroll = () => {
    scrolltoEnd.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scroll();
  }, [MESSAGES]);
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(60)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const MESSAGE_DB = [];
      querySnapshot.forEach((doc) => {
        // cities.push(doc.data());
        MESSAGE_DB.push({ ...doc.data(), id: doc.id });
        // console.log(doc.id);
      });
      setMESSAGES(MESSAGE_DB);
    });
    return () => unsubscribe;
  }, []);
  return (
    <div className="">
      {MESSAGES.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={scrolltoEnd} className="mt-[3px] bg-transparent"></div>
      {currentUser && (
        <div className="sticky bottom-0 z-10 mx-2 my-2">
          <SendMessage />
        </div>
      )}
    </div>
  );
};

export default ChatBox;
