import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import Report from "./pages/Report";
import SubReport from "./pages/SubReport";
import Diagnose from "./pages/Diagnose";
import TopBanner from "./components/TopBanner";
import Myinsur from "./pages/Myinsur";
import Inmypocket from "./pages/Inmypocket";
import Login from "./pages/Login";
import { UserProvider } from "./context/UserContext";


import "./App.css"

const App: React.FC = () => {
  return (
    <div className="app-container">
      <UserProvider>
      <TopBanner />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:user_id" element={<Home />} />
        <Route path="/mypage/:user_id" element={<Mypage />} />
        <Route path="/report" element={<Report />} />
        <Route path="/subreport" element={<SubReport />} />
        <Route path="/diagnose" element={<Diagnose />} />
        <Route path="/myinsur" element={<Myinsur />} />
        <Route path="/inmypocket" element={<Inmypocket />} />
        <Route path="/login" element={<Login />} />        
      </Routes>
      </UserProvider>
    </div>
  );
};

export default App;
