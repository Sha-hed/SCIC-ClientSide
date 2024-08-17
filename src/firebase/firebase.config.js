import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDylzQNn7RQO8lbGasXg0l6PSYz4PbiLkk",
  authDomain: "scic-job-task-c2222.firebaseapp.com",
  projectId: "scic-job-task-c2222",
  storageBucket: "scic-job-task-c2222.appspot.com",
  messagingSenderId: "115069715523",
  appId: "1:115069715523:web:b48f4ed72315843b1d00f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

