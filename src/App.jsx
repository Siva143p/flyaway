import React, { useEffect, useState } from "react";
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
import { onMessageListener, requestFCMToken } from "./firebase/Firebase";
import { sendTokenToServer } from "./api/api";
import Search from "./pages/Search";

const App = () => {
  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await requestFCMToken();
        if (token) {
          await sendTokenToServer(token);
        }
      } catch (error) {
        console.error("Error getting FCM token:", error);
      }
    };

    getToken();

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          // console.log("Service Worker registered:", registration);
        })
        .catch((err) =>
          console.log("Service Worker registration failed:", err)
        );
    }

    // Listening for push notifications
    onMessageListener()
      .then((payload) => {
        console.log("Notification received:", payload);
      })
      .catch((err) => console.error("Error receiving notification:", err));
  }, []);

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
            {/*  */}
            <Route path="/Search" element={<Search />} />
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
