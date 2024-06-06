import React from "react";

import Dictionary from "./Dictionary";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="music" />
        <Footer />
      </div>
    </div>
  );
}
