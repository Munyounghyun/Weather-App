import React from "react";

const WeatherBox = ({ weather }) => {
  //props에서 접근 안해도됨
  var fa = weather?.main.temp * (9 / 5) + 32;
  fa = fa.toFixed(2); //소수점 2자리까지만 나오게함

  return (
    <div className="weather-box">
      <h4 className="cityName">{weather?.name}</h4>
      {/* weather 초기값이 null이기때문에 weather?.해줌*/}
      <h2>
        {weather?.main.temp}도 / {fa}화씨
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
