import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import Shipment from "./pages/Shipment";
import RecentLogs from "./pages/RecentLogs";
import Inventory from "./pages/Inventory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles

const App = () => {
  const location = useLocation();

  const hideSidebarPaths = ["/login", "/404"];

  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);

  return (
    <div className="w-full h-screen font-inter flex fixed">
      {" "}
      {/* Use flex for layout */}
      {!shouldHideSidebar && <Sidebar />}
      <div className="flex-1 overflow-y-auto">
        <ToastContainer position="top-right" autoClose={3000} />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Registration />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/shipment" element={<Shipment />} />
          <Route path="/recentlogs" element={<RecentLogs />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
