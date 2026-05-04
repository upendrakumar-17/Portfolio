import React from "react";
import Home from "./pages/Home";
import "./App.css";
import "./layouts/Section.css"
import "./styles/Scrollbar.css"
import NotFound from "./utilities/NotFound";
const App = () => {
  return (
    <div className="app">
      <Home/>
      <NotFound/>
    </div>
  )
}

export default App;