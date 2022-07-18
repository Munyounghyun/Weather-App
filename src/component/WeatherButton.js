import Button from "react-bootstrap/Button";

const WeatherButton = ({ cities, setCity, selectedCity }) => {
  return (
    <div>
      <Button
        variant={`${selectedCity === "" ? "primary" : "outline-primary"}`}
        onClick={() => setCity("")}
      >
        Current Location
      </Button>
      {cities.map((item) => (
        <Button
          variant={`${selectedCity == item ? "primary" : "outline-primary"}`}
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
