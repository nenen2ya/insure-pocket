import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Auth from "./pages/Auth";
import Report from "./pages/Report";
import Favorites from "./pages/Favorites";
import Insurance from "./pages/Insurance";
import Diagnose from "./pages/Diagnose";
import TopBanner from "./components/TopBanner";
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="app-container">
      <TopBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/report" element={<Report />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/diagnose" element={<Diagnose />} />
      </Routes>
    </div>
  );
};

export default App;
