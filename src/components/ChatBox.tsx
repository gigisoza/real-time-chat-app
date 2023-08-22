import Message from "./Message";

type Messages = {
  id: number;
  text: string;
  name: string;
}[];

export default function ChatBox() {
  const messages: Messages = [
    {
      id: 1,
      text: "Hello there!",
      name: "User-2",
    },
    {
      id: 2,
      text: "Hi!",
      name: "John Doe",
    },
  ];

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
