import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="weather-app">
      <SearchBar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
