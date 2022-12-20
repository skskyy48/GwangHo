import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate, render } from 'react-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd8pmHpr0xlDpACCk3WawKh9vGjb_ss4o",
  authDomain: "d-day-calc.firebaseapp.com",
  projectId: "d-day-calc",
  storageBucket: "d-day-calc.appspot.com",
  messagingSenderId: "500264620438",
  appId: "1:500264620438:web:2b82d1542e198ca054cdb7",
  measurementId: "G-F2DK2HVMSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = document.getElementById('root');

if(root.hasChildNodes()){
  hydrate(<App/>,root)
}else {
  render(<App/>,root)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
