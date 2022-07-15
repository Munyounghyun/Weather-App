import Button from "react-bootstrap/Button";
import React, { useState } from "react";

const WeatherButton = ({ cities }) => {
  console.log(cities);
  const [city, setCity] = useState("");
  const searchByCity = async (cityName) => {
    setCity(cityName);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=48&lon=2&appid=81108c4766ca0c9c3a08a325d468663e&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
  };
  return (
    <div>
      <Button variant="primary">Current Location</Button>
      {cities.map((item) => (
        <Button variant="primary" onClick={() => searchByCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
