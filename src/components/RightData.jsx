export default function RightCard({
  selectedCity,
  nightTemp,
  nightCondition,
  nightIcon,
  date,
}) {
  return (
    <div className="flex justify-between items-center flex-col w-[400px] h-[700px] relative z-10 rounded-t-[50px] ">
      <div className="flex justify-around items-center flex-col w-[400px] h-[490px] absolute top-0 z-10 bg-[#111827]/50 backdrop-blur-md rounded-t-[50px]">
        <div className="p-1 pl-9 self-start ">
          <p className="text-white/20">{date}</p>
          <h1 className="text-[45px] text-white">{selectedCity}</h1>
        </div>
        <img className=" w-[250px] h-[250px]" src={nightIcon} alt="" />
      </div>
      <div className="flex justify-center items-center flex-col w-[400px] h-[210px] absolute bottom-0 z-10 bg-[#111827]/30 backdrop-blur-sm rounded-b-[50px] text-white  ">
        <h3 className="text-[110px] font-bold mt-[-95px]">{nightTemp}&deg;</h3>
        <p>{nightCondition}</p>
      </div>
      <img
        className="w-[150px] h-[150px] absolute right-[-75px] bottom-[-75px] z-1"
        src="ellipse.svg"
        alt=""
      />
    </div>
  );
}
