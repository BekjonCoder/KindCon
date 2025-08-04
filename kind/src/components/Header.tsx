import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/chat", label: "Chats" },
  { to: "/about", label: "About" },
];

const Header = () => {
  return (
    <motion.header
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="text-blue-700 font-bold text-xl flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Sparkles className="text-yellow-500" />
          KindConnect
        </motion.div>

        {/* Nav Links */}
        <nav className="flex space-x-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-md font-medium transition duration-300 ${
                  isActive
                    ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                    : "text-gray-600 hover:text-blue-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
