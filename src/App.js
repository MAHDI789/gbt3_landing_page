import React from "react";
import {
  Blog,
  Features,
  Footer,
  Headers,
  Possiblity,
  Whatgapt,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradienr_bg">
        <Navbar />
        <Headers />
      </div>
      <Brand />
      <Whatgapt />
      <Features />
      <Possiblity />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
