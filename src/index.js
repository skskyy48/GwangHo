import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate, render } from 'react-dom'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DDayCalc from './pages/DDayCalc';
import LoanCalc from './pages/LoanClac';
import Conversion from './pages/Conversions';

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

const router = createBrowserRouter([
  {
    path: "/",
    element:<LoanCalc />,
  },
  {
    path : "/d-day",
    element : <DDayCalc />
  },
  {
    path : '/loan-calc',
    element : <LoanCalc />
  },
  {
    path : '/conversion',
    element : <Conversion />
  }
]);

if(root.hasChildNodes()){
  hydrate(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  ,root)
}else {
  render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    ,root)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
