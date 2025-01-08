import { useState } from "react";

export default function LeftCard() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCities, setSelectedCities] = useState("");

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomingCities = data.data.map((country) => {
      return country.cities;
    });
    incomingCities = incomingCities.flat();
    setCities(incomingCities);
  }
  getData();
  const searchHandler = (e) => {
    const search = e.target.value;
    const filtered = cities.filter((city) => {
      return city.includes(search);
    });
    setSearched(filtered);
  };
  return (
    <div className="flex justify-between items-center flex-col w-[400px] h-[700px] relative z-0 ">
      <input
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
                console.log(cityy);
                setSelectedCities(cityy);
                setSearched("");
              }}
              className="cursor-pointer flex flex-col gap-4 z-10"
            >
              {cityy}
            </p>
          ))}
      </div>
      <div className="flex justify-around items-center flex-col w-[400px] h-[490px] absolute top-0 z-10 bg-[#ffffff]/40 backdrop-blur-lg rounded-t-[50px]">
        <div className="p-1 pl-9 self-start ">
          <p className="text-black/20">Jan, 7, 2025</p>
          <h1 className="text-[45px] font">{selectedCities}</h1>
        </div>
        <img className=" w-[250px] h-[250px]" src="sun.png" alt="" />
      </div>
      <div className="flex justify-center items-center flex-col w-[400px] h-[210px] absolute bottom-0 z-10 bg-[#ffffff]/40 backdrop-blur-lg rounded-b-[50px]"></div>
      <img
        className="w-[150px] h-[150px] absolute left-[-75px] top-[-75px] z-1"
        src="sun.svg"
        alt=""
      />
    </div>
  );
}
