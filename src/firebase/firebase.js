import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import firebaseConfig from "./firebase.config";

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyAHd38N02Cr74ue_lRGDHk8GP6Lp4X2FLQ",
  authDomain: "freelance-griffin.firebaseapp.com",
  projectId: "freelance-griffin",
  storageBucket: "freelance-griffin.firebasestorage.app",
  messagingSenderId: "47741122236",
  appId: "1:47741122236:web:2f97f719e4d48fe4e842b9",
  measurementId: "G-GTM85ZNDQ4",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request Notification Permission and Get Token
export const requestFCMToken = async () => {
  try {
    const permission = Notification.permission;

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "YourFirebaseVapidKeyHereBI4aZeo_a9WkQF2BdYm7e6JlojEzAn_aWt6-jw4MA8EzwBh-FaayG25k9hr0ozpmJ3GG2uAODwuiwJO8l420ndE", // Replace with your Firebase VAPID key
      });

      if (token) {
        console.log("FCM Token:", token);
        return token;
      } else {
        console.log("No FCM token received.");
        return null;
      }
    } else if (permission === "default") {
      // Ask for permission
      const newPermission = await Notification.requestPermission();
      if (newPermission === "granted") {
        return requestFCMToken();
      } else {
        console.warn("User denied notifications.");
        return null;
      }
    } else {
      console.error(
        "Notifications are blocked! Enable them in browser settings."
      );
      return null;
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
    return null;
  }
};

// Listen for Incoming Messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Message received:", payload);
      resolve(payload);
    });
  });

export default app;
