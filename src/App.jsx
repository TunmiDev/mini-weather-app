import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <div className="weather-app">
      <SearchBar />
      <Main />
    </div>
  );
};

export default App;
