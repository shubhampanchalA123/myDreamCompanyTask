import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import "./App.css"
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import About from "./component/About";
export default function App() {
  // agar kisi viewdetails me data nhi he tp vha par dummy text show krvaya gya he
  return (
    <Router>
      <div>
        <Navbar />
        <h6>agr kiisi card me data nhi he to dummy data text he </h6>
        <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/About" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
