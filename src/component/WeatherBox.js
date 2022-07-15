import React from "react";

const WeatherBox = ({ weather }) => {
  //props에서 접근 안해도됨
  console.log("weather?", weather);
  return (
    <div className="weather-box">
      <h4>{weather?.name}</h4>
      {/* weather 초기값이 null이기때문에 weather?.해줌*/}
      <h2>
        {weather?.main.temp}도 / {weather?.main.temp * (9 / 5) + 32}화씨
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
