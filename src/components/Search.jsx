import { useEffect, useState } from "react";

export default function Search({
  selectedCity,
  setSelectedCity,
  setNightTemp,
  setNightCondition,
  setDayTemp,
  setDayCondition,
  setDayIcon,
  setNightIcon,
  setDate,
}) {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [inputValue, setInputValue] = useState("");

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomingCities = data.data.map((country) => {
      return country.cities;
    });
    incomingCities = incomingCities.flat();
    setCities(incomingCities);
  }
  async function getWeatherData(cityy) {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=318279fc119b4909ba721334250801&q=${cityy}`
    );
    const data = await result.json();

    setDayTemp(data.current.temp_c);
    setDayCondition(data.current.condition.text);
    setDayIcon(data.current.condition.icon);
    setNightTemp(data.forecast.forecastday[0].hour[0].temp_c);
    setNightCondition(data.forecast.forecastday[0].hour[0].condition.text);
    setNightIcon(data.forecast.forecastday[0].hour[0].condition.icon);
    setDate(data.forecast.forecastday[0].date);
  }

  useEffect(() => {
    getData();
    getWeatherData(selectedCity);
  }, []);

  const searchHandler = (e) => {
    const search = e.target.value;
    setInputValue(search);
    const filtered = cities.filter((city) => {
      if (!search) {
        return false;
      }
      return city.toLowerCase().includes(search.toLowerCase());
    });
    setSearched(filtered);
  };
  return (
    <div className="z-10 w-[450px] h-[39px] absolute flex ">
      <input
        value={inputValue}
        placeholder="Search"
        type="text"
        className="z-10 w-[400px] h-[70px] absolute rounded-[70px] p-8 text-[45px] font-[550] top-5 left-5 outline-none"
        onChange={searchHandler}
      />
      <div className="z-10 w-[400px] absolute top-[100px] left-5 ">
        {searched.length > 0 &&
          searched.slice(0, 10).map((cityy, index) => (
            <p
              key={index}
              onClick={() => {
                setSelectedCity(cityy);
                setSearched([]);
                setInputValue("");
                getWeatherData(cityy);
              }}
              className="cursor-pointer flex flex-col gap-4 z-10 bg-slate-500 "
            >
              {cityy}
            </p>
          ))}
      </div>
    </div>
  );
}
