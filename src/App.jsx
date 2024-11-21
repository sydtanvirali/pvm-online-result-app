import React from "react";
import "../src/index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Result from "./components/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { ResultProvider } from "./context/ResultContext";

const App = () => {
  return (
    <>
      <Toaster position="top-right" theme="system" richColors={true} />
      <Navbar />
      <ResultProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </ResultProvider>
      <Footer />
    </>
  );
};

export default App;
