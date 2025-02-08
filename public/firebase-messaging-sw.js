importScripts(
  "https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAHd38N02Cr74ue_lRGDHk8GP6Lp4X2FLQ",
  authDomain: "freelance-griffin.firebaseapp.com",
  projectId: "freelance-griffin",
  storageBucket: "freelance-griffin.firebasestorage.app",
  messagingSenderId: "47741122236",
  appId: "1:47741122236:web:2f97f719e4d48fe4e842b9",
  measurementId: "G-GTM85ZNDQ4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle Background Messages
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  });
});
