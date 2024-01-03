
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB26tTvSXLjXxZT9TscWSQ83Kq2jt2N87Q",
    authDomain: "perosnalportfolio-9510e.firebaseapp.com",
    projectId: "perosnalportfolio-9510e",
    storageBucket: "perosnalportfolio-9510e.appspot.com",
    messagingSenderId: "955101856674",
    appId: "1:955101856674:web:ff9c17b14281b21ba9a8fb",
    measurementId: "G-T5EGM0S0CX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
