import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import { IoSend } from "react-icons/io5";
const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();
  const handleSubmit = async (e) => {
    if (value.trim() === "") {
      alert("Enter valid Message");
      e.preventDefault();
      return;
    }
    e.preventDefault();
    try {
      const { displayName, uid, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      <form action="" className="flex">
        <input
        autoFocus
          placeholder="Send now"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input bg-base-200 w-full rounded-none rounded-l-xl focus:outline-none "
        />
        <button onClick={handleSubmit} className="rounded-r-xl text-white bg-primary  px-4">
          <IoSend size={18} />
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
