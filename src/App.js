import React from "react";
import Navbar from "./components/navbar";
import Pagerouter from "./routers/router";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Pagerouter/>
    </div>

  );
}

export default App;
