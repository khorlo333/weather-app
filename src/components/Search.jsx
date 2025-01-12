import { useEffect, useState } from "react";

export default function Search({
  selectedCity,
  setSelectedCity,
  setNightTemp,
  setNightCondition,
  setDayTemp,
  setDayCondition,
  setDate,
}) {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [inputValue, setInputValue] = useState("");

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomingCities = data.data.map((country) =>
      country.cities.map((city) => {
        return `${city}, ${country.country}`;
        // return {city:hot, country:country.country}
      })
    );
    // ["ulaanbaatar, mongolia"]
    // {city:"Ulaanbatar", country:"Mongolia"}
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
    setNightTemp(data.forecast.forecastday[0].hour[0].temp_c);
    setNightCondition(data.forecast.forecastday[0].hour[0].condition.text);
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
    <div className="z-10 w-[550px] absolute flex justify-center items-center text-[30px] ">
      <div className="flex z-10 w-[500px] justify-center items-center  h-[70px] bg-[#fff] rounded-[70px] absolute top-7 right-[-24%]">
        <img
          className="z-10 w-[50px] absolute left-3 top-3"
          src="search-icon.svg"
          alt=""
        />
        <input
          value={inputValue}
          placeholder="Search"
          type="text"
          className="z-10 w-[400px] right-10 h-[70px] absolute rounded-[70px] p-8 text-[45px] font-[550] outline-none"
          onChange={searchHandler}
        />
      </div>
      <div className="z-10 w-[500px] absolute top-[110px] right-[-25%] rounded-[30px] overflow-hidden">
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
              className="cursor-pointer flex z-10 bg-[#fff] p-3 text-[25px] font-bold "
            >
              <span>
                <img src="location.svg" alt="" />
              </span>
              {cityy}
            </p>
          ))}
      </div>
    </div>
  );
}
