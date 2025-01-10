export default function RightCard({
  selectedCity,
  nightTemp,
  nightCondition,
  nightIcon,
  date,
}) {
  function changeWeatherIcon(nightCondition) {
    const condition = nightCondition.toLowerCase();

    switch (true) {
      case condition.includes("clear"):
        return "Moon.png";
      case condition.includes("rain"):
        return "nightRain.png";
      case condition.includes("cloudy"):
        return "nightClouds.png";
      case condition.includes("wind"):
        return "nightWind.png";
      case condition.includes("snow"):
        return "nightSnow.png";
      case condition.includes("thunder"):
        return "nightThunder.png";
      case true:
        return "Moon.png";
    }
  }
  return (
    <div className="flex justify-between items-center flex-col w-[400px] h-[700px] relative z-10 rounded-t-[50px] ">
      <div className="flex justify-around items-center flex-col w-[400px] h-[490px] absolute top-0 z-10 bg-[#111827]/50 bg-gradient-to-r-[bg-[#111827], bg-[]] backdrop-blur-md rounded-t-[50px]">
        <div className="p-1 pl-9 self-start ">
          <p className="text-white/20">{date}</p>
          <h1 className="text-[45px] relative text-white">
            {selectedCity}{" "}
            <img
              className="absolute top-3 right-[-25px]"
              src="location.svg"
              alt=""
            />
          </h1>
        </div>
        <img
          className=" w-[250px] h-[250px]"
          src={changeWeatherIcon(nightCondition)}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center flex-col w-[400px] h-[210px] absolute bottom-0 z-10 bg-[#111827]/30 backdrop-blur-sm rounded-b-[50px] text-white  ">
        <div>
          <h3 className="text-[110px] font-bold mt-[-95px]">
            {nightTemp}&deg;
          </h3>
          <p className="font-extrabold text-purple-400 text-[25px] mt-[-20px]">
            {nightCondition}
          </p>
        </div>
      </div>
      <div className="flex justify-between w-[300px] h-[40px] absolute bottom-4 p-2 z-10">
        <img src="home.svg" alt="" />
        <img src="Pin.svg" alt="" />
        <img src="Heart.svg" alt="" />
        <img src="User.svg" alt="" />
      </div>
      <img
        className="w-[150px] h-[150px] absolute right-[-75px] bottom-[-75px] z-1"
        src="ellipse.svg"
        alt=""
      />
    </div>
  );
}
