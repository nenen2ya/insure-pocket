import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";
import Auth from "./pages/Auth";
import Report from "./pages/Report";
import SubReport from "./pages/SubReport";
import Favorites from "./pages/Favorites";
import Insurance from "./pages/Insurance";
import Diagnose from "./pages/Diagnose";
import TopBanner from "./components/TopBanner";
import Myinsur from "./pages/Myinsur";
import Inmypocket from "./pages/Inmypocket";

import "./App.css"

const App: React.FC = () => {
  return (
    <div className="app-container">
      <TopBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/report" element={<Report />} />
        <Route path="/subreport" element={<SubReport />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/diagnose" element={<Diagnose />} />
        <Route path="/myinsur" element={<Myinsur />} />
        <Route path="/inmypocket" element={<Inmypocket />} />
      </Routes>
    </div>
  );
};

export default App;
