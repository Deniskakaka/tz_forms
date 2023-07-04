import React, { useEffect } from "react";
import { FormLogin } from "./components/formLogin/FormLogin";
import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import { FormSingIn } from "./components/formSingIn/FormSingIn";
import { FormGenerator } from "./components/formGenerator/FormGenerator";
import { useNavigate } from "react-router-dom";
import { Header } from "./components/header/Header";
import { FormMailVerifier } from "./components/formEmail/FormEmail";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/generator");
    }
  }, []);

  return (
    <div>
      {localStorage.getItem("token") && <Header />}
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/singIn" element={<FormSingIn />} />
        <Route path="/generator" element={<FormGenerator />} />
        <Route
          path="/verifier"
          element={<FormMailVerifier title="Email Verifier" />}
        />
        <Route
          path="/scraper"
          element={<FormMailVerifier title="Email Scraper" />}
        />
      </Routes>
    </div>
  );
}

export default App;
