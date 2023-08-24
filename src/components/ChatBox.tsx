import { useEffect, useState } from "react";
import Message from "./Message";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

type Messages = {
  id: number;
  text: string;
  name: string;
}[];

export default function ChatBox() {
  const [messages, setMessages] = useState<Messages>([]);

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages: { id: string }[] = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
