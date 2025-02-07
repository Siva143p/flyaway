import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./styles/App.css";
import Navbar from "./pages/Navbar";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/home";
import TawkToChat from "./chat-bot/TawkToChat";
import Analytics from "./SEO/Analytics";

const App = () => {
  return (
    <Router>
      <AppProvider>
        <div className="App">
          <Analytics />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          {/* Chat bot */}
          <TawkToChat />
          <Footer />
        </div>
      </AppProvider>
    </Router>
  );
};

export default App;
