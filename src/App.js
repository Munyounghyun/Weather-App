import "./App.css";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import WeatherBox from "./component/WeatherBox";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherButton from "./component/WeatherButton";
//1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다.
//2. 날씨정보에는 도시, 섭씨 , 화씨 날씨상태
//3. 5개의 버튼이 있다(1개는 현재위치 , 4개는 다른 도시)
//4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
//5. 현재위치 날씨 버튼을 클릭하면 다시 현재위치 기반의 날씨가 나온다
//6. 데이터를 들고오는 동안 로딩 스피너가 돈다
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cities = ["paris", "new york", "tokyo", "seoul"];
  //현재위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getweatherByCurrentLocation(lat, lon);
    });
  };
  const getweatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=81108c4766ca0c9c3a08a325d468663e&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getweatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81108c4766ca0c9c3a08a325d468663e&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getweatherByCity();
    }
  }, [city]);

  //useEffect실행
  //1.UI가 처음 그려질때
  //2.배열에 있는 state값이 바뀔때 마다 호출
  //오류 나는 이유는 위의 useEffect실행 하지만 밑의 주석 useEffect또 실행
  //여기서 배열에있는 city가 처음 빈값이기때문에 오류발생
  //그러므로 useEffect 두번 실행하면 안됨 위의 useEffect에 통일
  // useEffect(() => {
  //   console.log("city?", city);
  //   getweatherByCity();
  // }, [city]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader
            color="#f88c6b"
            loading={loading} //loading이라는 props를 통해 보이고 안보이고 조절가능
            //cssOverride={override}
            size={150}
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            selectedCity={city}
          />
        </div>
      )}
    </div>
  );
}

export default App;
