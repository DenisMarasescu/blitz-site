"use client";

import React, { useState } from "react";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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", // Replace with your actual API key
  dangerouslyAllowBrowser: true,
});

export default function Chatbot() {
  const [messages, setMessages] = useState<
    { role: "assistant" | "user"; content: string }[]
  >([
    { role: "assistant", content: "Salut! Cu ce te putem ajuta?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add the user's message to the chat
    const newMessages = [
      ...messages,
      { role: "user" as "user", content: inputValue },
    ];
    setMessages(newMessages);

    // Clear the input field
    setInputValue("");

    try {
      const response = await groq.chat.completions.create({
        messages: [
          ...newMessages,
          { role: "system" as "system", content: "You are Denis, the AI made by Blitz Software Development. You are a romanian assistant that must answer in romanian kindly to possible customer's questions on short." },
        ],
        model: "llama-3.1-70b-versatile", // Replace with your desired model
      });

      // Add the chatbot's response to the chat
      const botMessage = response.choices[0]?.message?.content || "No response from bot";
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: botMessage },
      ]);
    } catch (error) {
      console.error("Error calling Groq API:", error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 h-[70vh] flex flex-col my-24">
      <div className="flex-grow overflow-y-auto flex flex-col space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start ${msg.role === "user" ? "justify-end" : ""}`}>
            <div className={`w-14 h-14 rounded-full bg-white border-2 border-solid border-black mr-4 ${msg.role === "user" ? "order-2 ml-4" : ""}`}></div>
            <div
              className={`p-4 rounded-lg shadow-sm max-w-[50vw] ${
                msg.role === "user"
                  ? "bg-[#FFFAF2] self-end text-right"
                  : "bg-gray-100 self-start"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center bg-white p-2 rounded-full shadow-xl">
  <input
    type="text"
    className="flex-grow p-2 rounded-full focus:outline-none focus:border-none"
    placeholder="Scrie un mesaj..."
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") handleSendMessage();
    }}
  />
  <button
    onClick={handleSendMessage}
    className="bg-[#E5B762] p-3 rounded-full shadow-md flex items-center justify-center hover:bg-[#D4A653] transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  </button>
</div>


    </div>
  );
}
