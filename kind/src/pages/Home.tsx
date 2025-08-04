import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "antd";

const Home = () => {
  const navigate = useNavigate();

  const handleStartChat = () => {
    navigate("/chat");
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8 flex flex-col items-center">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-blue-900 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Senior Chat AI 👋
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-blue-800 text-center max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        This is a friendly AI chat assistant designed to help older adults with daily tips,
        conversations, motivation, and more.
      </motion.p>

      {/* Start Chat Button */}
      <Button
        type="primary"
        size="large"
        className="mb-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg"
        onClick={handleStartChat}
      >
        Start Chat 💬
      </Button>

      {/* AI Tips */}
      <div className="w-full max-w-xl bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3 text-blue-900">AI Daily Tips 🌞</h2>
        <ul className="list-disc pl-5 text-blue-800 space-y-2 text-base">
          <li>Smile and greet someone today 😊</li>
          <li>Try a 10-minute stretch 🧘</li>
          <li>Listen to your favorite music 🎵</li>
          <li>Reflect on one positive thing 💭</li>
          <li>Drink a glass of water 💧</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
