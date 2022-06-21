/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty-pattern */
import React, { useEffect } from "react";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import Orders from './Orders';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";



function App() {
  const [{}, dispatch] = useStateValue('');

  //runs only once with app component loads
  useEffect(() => {   

    auth.onAuthStateChanged(authUser => {
      console.log("The user is  >>>>> ", authUser);
      
      //user logs in or was logged in (puts user in Data Layer)
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      
        //user is logged out
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  }, []);
  
  return (
    <Router>
      <div className="app">
      <Routes>
        <Route path = "/" element={[<Header />, <Home />]} />
        <Route path = "/orders" element={[<Header />, <Orders />]} />
        <Route path="/checkout" element={[<Header />, <Checkout />]} />
        <Route path="/login" element={[<Login />]} />
        <Route path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements> ]} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
