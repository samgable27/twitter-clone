import Sidebar from "./Components/Sidebar";
import React from "react";
import Feed from "./Components/Feed";
import "./App.css";
import Widgets from "./Components/Widgets";

function App() {
  return (
    <div className="App">
      <h1></h1>

      <Sidebar />

      {/* FEED */}
      <Feed />

      {/* WIDGETS */}
      <Widgets />
    </div>
  );
}

export default App;
