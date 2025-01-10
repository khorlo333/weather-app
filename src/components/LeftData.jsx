export default function LeftCard({
  selectedCity,
  dayTemp,
  dayCondition,
  dayIcon,
  date,
}) {
  function changeWeatherIcon(dayCondition) {
    console.log(dayCondition);
    const condition = dayCondition.toLowerCase();

    switch (true) {
      case condition.includes("sun"):
        return "sun.png";
      case condition.includes("rain"):
        return "dayRain.png";
      case condition.includes("cloudy"):
        return "dayClouds.png";
      case condition.includes("wind"):
        return "dayWind.png";
      case condition.includes("snow"):
        return "daySnow.png";
      case condition.includes("thunder"):
        return "dayThunder.png";
      case true:
        return "Sun.png";
    }
  }
  return (
    <div className="flex justify-between items-center flex-col w-[400px] h-[700px] relative z-0 ">
      <div className="flex justify-around items-center flex-col w-[400px] h-[490px] absolute top-0 z-10 bg-[#ffffff]/40 backdrop-blur-lg rounded-t-[50px]">
        <div className="p-1 pl-9 self-start ">
          <p className="text-black/20">{date}</p>
          <h1 className="text-[45px]">{selectedCity}</h1>
        </div>
        <img
          className=" w-[250px] h-[250px]"
          src={changeWeatherIcon(dayCondition)}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center flex-col w-[400px] h-[210px] absolute bottom-0 z-10 bg-[#ffffff]/20 rounded-b-[50px] ">
        <h3 className="text-[110px] font-bold mt-[-95px]">{dayTemp}&deg;</h3>
        <p className="font-extrabold text-orange-400 text-[25px] mt-[-20px]">
          {dayCondition}
        </p>
      </div>
      <div className="flex justify-between w-[300px] h-[40px] absolute bottom-4 p-2 z-10">
        <img src="home.svg" alt="" />
        <img src="Pin.svg" alt="" />
        <img src="Heart.svg" alt="" />
        <img src="User.svg" alt="" />
      </div>
      <img
        className="w-[150px] h-[150px] absolute left-[-75px] top-[-75px] z-1"
        src="sun.svg"
        alt=""
      />
    </div>
  );
}
