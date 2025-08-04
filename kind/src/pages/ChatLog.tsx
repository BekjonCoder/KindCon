import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { motion } from "framer-motion";
import { getGeminiResponse } from "../utils/gemini";
import { speakText } from "../utils/speak";
import type { Message } from "../types";

const ChatLog = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("chat_messages");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            text: "Hello! What would you like to ask? 😊",
            fromUser: false,
          },
        ];
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: Date.now(),
      text: trimmed,
      fromUser: true,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const replyText = await getGeminiResponse(trimmed);

      const botMsg: Message = {
        id: Date.now() + 1,
        text: replyText,
        fromUser: false,
      };

      setMessages((prev) => [...prev, botMsg]);
      speakText(replyText); // AI javob ovozda o‘qiladi
    } catch (err) {
      const errorText = "Sorry, the AI could not respond. Please try again later.";
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          text: errorText,
          fromUser: false,
        },
      ]);
      speakText(errorText);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col max-w-3xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-6 text-blue-800 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Chat AI for Seniors 🤝
      </motion.h1>

      <div className="flex-grow bg-white rounded-xl shadow p-6 overflow-y-auto mb-4 max-h-[60vh] flex flex-col gap-4">
        {messages.map(({ id, text, fromUser }) => (
          <div
            key={id}
            className={`max-w-xl p-5 text-lg rounded-2xl whitespace-pre-wrap break-words leading-relaxed ${
              fromUser
                ? "bg-blue-600 text-white self-end"
                : "bg-gray-200 text-gray-900 self-start"
            }`}
          >
            {text}
          </div>
        ))}
      </div>

      <div className="flex gap-3 items-end">
        <Input.TextArea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={3}
          placeholder="Type your message..."
          className="resize-none text-lg"
          maxLength={500}
          showCount
          onPressEnter={(e) => {
            if (!e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <Button
          type="primary"
          onClick={handleSend}
          disabled={!input.trim() || loading}
          loading={loading}
          size="large"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatLog;
