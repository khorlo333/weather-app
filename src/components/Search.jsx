import { useEffect, useState } from "react";
export default function Search({
  selectedCities,
  setSelectedCities,
  nightTemp,
  setNightTemp,
  nightCondition,
  setNightCondition,
  dayTemp,
  setDayTemp,
  dayCondition,
  setDayCondition,
  dayIcon,
  setDayIcon,
  nightIcon,
  setNightIcon,
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
  async function getWeatherData() {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=318279fc119b4909ba721334250801&q=${selectedCities}`
    );
    const data = await result.json();

    setDayTemp(data.current.temp_c);
    setDayCondition(data.current.condition.text);
    setDayIcon(data.current.condition.icon);
    setNightTemp(data.forecast.forecastday[0].hour[0].temp_c);
    setNightCondition(data.forecast.forecastday[0].hour[0].condition.text);
    setNightIcon(data.forecast.forecastday[0].hour[0].condition.icon);
  }

  useEffect(() => {
    getData();
    getWeatherData();
  }, []);
  const searchHandler = (e) => {
    const search = e.target.value;
    setInputValue(search);
    const filtered = cities.filter((city) => {
      return city.includes(search);
    });
    setSearched(filtered);
  };
  return (
    <div className="z-10 w-[400px] h-[39px] absolute flex justify-center">
      <input
        value={inputValue}
        type="text"
        className="z-10 w-[400px] h-[39px] absolute top-[-120px] left-[150px] pl-5"
        onChange={searchHandler}
      />
      <div className="z-10 w-[400px] h-[39px] absolute top-[-80px] left-[150px] ">
        {searched.length > 0 &&
          searched.slice(0, 10).map((cityy) => (
            <p
              key={cityy}
              onClick={() => {
                setSelectedCities(cityy);
                setSearched([]);
                setInputValue("");
                getWeatherData();
              }}
              className="cursor-pointer flex flex-col gap-4 z-10 bg-slate-50"
            >
              {cityy}
            </p>
          ))}
      </div>
    </div>
  );
}
