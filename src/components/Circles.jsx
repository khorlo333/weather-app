export default function Circles() {
  return (
    <div>
      <img
        className="w-[106px] h-[106px] absolute left-[250px] top-[250px] z-1"
        src="sun.svg"
        alt=""
      />
      <img
        className="w-[106px] h-[106px] absolute right-[250px] bottom-[250px] z-1"
        src="ellipse.svg"
        alt=""
      />
      <div className=" flex justify-center content-center w-[1750px] h-[1750px] absolute rounded-full border border-[#ffffff, 0,06] z-1 mt-[-250px] ml-[250px]">
        <div className="flex justify-center content-center w-[1500px] h-[1500px] absolute rounded-full border border-[#ffffff, 0,06] z-1 mt-[250px] ml-[50px]"></div>
      </div>
    </div>
  );
}
