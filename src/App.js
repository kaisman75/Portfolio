import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Hero from "./Components/hero/Hero"
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero />
    </div>)
}
export default App;

 