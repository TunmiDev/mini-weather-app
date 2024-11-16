import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="weather-app-data">
        {/*right side */}
        <div>
          <h1 className="weather-app-city"></h1>
          <p className="weather-app-details">
            <span className="time"></span>
            <span className="description"></span>
            <br />
            humidity: <strong className="humidity"></strong>, Wind:
            <strong className="speed"></strong>
          </p>
        </div>

        {/* left side */}
        <div className="weather-app-temperature-container">
          <div className="icon"></div>
          <div className="weather-app-temperature"></div>
          <div className="weather-app-unit">℃</div>
        </div>
      </div>
      <div className="weather-forecast">
        <div className="weather-forecast-date"></div>
        <div className="weather-forecast-icon"> </div>
        <div className="weather-forecast-temperatures"></div>
        <div className="weather-forecast-temperature"></div>
      </div>
    </main>
  );
};

export default Main;
