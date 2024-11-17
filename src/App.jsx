import React from "react";
import "./App.css";
import Weather from "./Components/Weather/Weather";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
      </div>
    </div>
  );
};

export default App;
