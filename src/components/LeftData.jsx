export default function LeftCard({
  selectedCity,
  dayTemp,
  dayCondition,
  dayIcon,
  date,
}) {
  return (
    <div className="flex justify-between items-center flex-col w-[400px] h-[700px] relative z-0 ">
      <div className="flex justify-around items-center flex-col w-[400px] h-[490px] absolute top-0 z-10 bg-[#ffffff]/40 backdrop-blur-lg rounded-t-[50px]">
        <div className="p-1 pl-9 self-start ">
          <p className="text-black/20">{date}</p>
          <h1 className="text-[45px]">{selectedCity}</h1>
        </div>
        <img className=" w-[250px] h-[250px]" src={dayIcon} alt="" />
      </div>
      <div className="flex justify-center items-center flex-col w-[400px] h-[210px] absolute bottom-0 z-10 bg-[#ffffff]/20 rounded-b-[50px] ">
        <h3 className="text-[110px] font-bold mt-[-95px]">{dayTemp}&deg;</h3>
        <p>{dayCondition}</p>
      </div>
      <img
        className="w-[150px] h-[150px] absolute left-[-75px] top-[-75px] z-1"
        src="sun.svg"
        alt=""
      />
    </div>
  );
}
