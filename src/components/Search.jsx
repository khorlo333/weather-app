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
  date,
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
  async function getWeatherData() {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=318279fc119b4909ba721334250801&q=${selectedCities}`
    );
    const data = await result.json();

    setDate(data.forecast.forecastday[0].date);
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
    <div className="z-10 w-[450px] h-[39px] absolute flex ">
      <input
        value={inputValue}
        placeholder="Search"
        type="text"
        className="z-10 w-[400px] h-[70px] absolute top-[-400px] left-[-50px] rounded-[70px] p-8 text-[45px] font-[550] border-none"
        onChange={searchHandler}
      />
      <div className="z-10 w-[400px] absolute top-[-325px] left-[-50px] ">
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
              className="cursor-pointer flex flex-col gap-4 z-10 bg-slate-500 rounded-t-[15px]"
            >
              {cityy}
            </p>
          ))}
      </div>
    </div>
  );
}
