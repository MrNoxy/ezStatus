// firebase.js (Firebase v9 modular) - shared by status.html + dashboard.html
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

/**
 * IMPORTANT:
 * Replace this config with YOUR Firebase project config.
 * You can keep this file private if needed (but config alone is not a secret;
 * security comes from Realtime Database Rules).
 */
const firebaseConfig = {
  apiKey: "AIzaSyDtiptRZy-PojAiq3rue_xEULa5daqiz3M",
  authDomain: "ezstats-52ed3.firebaseapp.com",
  databaseURL: "https://ezstats-52ed3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ezstats-52ed3",
  storageBucket: "ezstats-52ed3.firebasestorage.app",
  messagingSenderId: "212661588786",
  appId: "1:212661588786:web:3768e50364c20b6013bd2b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
