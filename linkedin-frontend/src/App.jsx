import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar1 from "./components/navbar1/navbar1";
import LandingPage from "./pages/landing-page/landingPage";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/sign-up/sign-up";
import Login from "./pages/sign-in/sign-in";
import Navbar2 from "./components/navbar2/navbar2";
import Feeds from "./pages/feeds/feeds";

function App() {

  const isLoggedIn = true

  return (
    <div className="bg-gray-100 w-[100%] h-screen box-border">
      {
        isLoggedIn ? <Navbar2/>:<Navbar1/>
      }
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feeds />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
