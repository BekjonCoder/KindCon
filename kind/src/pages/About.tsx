import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-8 flex items-center justify-center">
      <motion.div
        className="max-w-3xl bg-white rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          About KindConnect
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>KindConnect</strong> is a friendly AI chat platform built to reduce social
          isolation, especially for seniors and individuals who may feel alone. Whether you
          want to talk about health, motivation, humor, or just say hello — we're here for you.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Our mission is to create a safe, simple, and meaningful space where technology
          becomes a companion — not a replacement — for human interaction. KindConnect uses
          modern AI (Gemini) to keep conversations fun, thoughtful, and encouraging.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          You don't need to be tech-savvy to use it. We designed the experience to be
          easy, clear, and joyful. Whether you're 17 or 77, you can enjoy the magic of a
          good conversation.
        </p>

        <hr className="my-6 border-blue-200" />

        <h2 className="text-2xl font-semibold text-blue-800 mb-3 text-center">
          Let's Laugh Together! 😂
        </h2>

        <ul className="list-disc pl-6 text-gray-800 space-y-3 text-base">
          <li>Why don’t skeletons fight each other? Because they don’t have the guts! 🦴</li>
          <li>I told my computer I needed a break, and now it won’t stop sending me beach photos. 🏖️</li>
          <li>Why did the scarecrow win an award? Because he was outstanding in his field! 🌾</li>
          <li>I asked the AI for a joke… it replied: "You mean besides my battery life?" 🔋</li>
          <li>They say laughter is the best medicine. Just don’t try paying your doctor with a joke. 💊</li>
        </ul>

        <p className="mt-6 text-center text-blue-700 font-medium">
          Stay happy, stay connected — with KindConnect 💙
        </p>
      </motion.div>
    </div>
  );
};

export default About;
