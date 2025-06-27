// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyATiTnYJ81nHNrIeUQbnfqnD-95Ne4ruhQ",
  authDomain: "patientmonitoring-a1801.firebaseapp.com",
  projectId: "patientmonitoring-a1801",
  storageBucket: "patientmonitoring-a1801.firebasestorage.app",
  messagingSenderId: "759820669023",
  appId: "1:759820669023:web:35f69234a0d2a0d86acbea",
  measurementId: "G-D0VD7SWWCB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
