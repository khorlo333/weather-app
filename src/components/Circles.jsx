export default function Circles() {
  return (
    <div>
      <div className="flex justify-center content-center w-[1340px] h-[1340px] absolute rounded-full border border-[#ffffff, 0,06] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <img
        className="w-[106px] h-[106px] absolute left-[100px] top-[50px] z-1"
        src="sun.svg"
        alt=""
      />
      <img
        className="w-[106px] h-[106px] absolute right-[100px] bottom-[50px] z-1"
        src="ellipse.svg"
        alt=""
      />
      <div className=" flex justify-center items-center w-[940px] h-[940px] absolute rounded-full border border-[#ffffff, 0,06] z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center content-center w-[540px] h-[540px] absolute rounded-full border border-[#ffffff, 0,06] z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center content-center w-[340px] h-[340px] absolute rounded-full border border-[#ffffff, 0,06] z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-center content-center w-[140px] h-[140px] absolute rounded-full border border-[#ffffff, 0,06] z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
