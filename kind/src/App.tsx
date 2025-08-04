import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ChatLog from "./pages/ChatLog";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-blue-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<ChatLog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
