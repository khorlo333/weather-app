export default function LeftCard() {
  return (
    <div className="flex justify-between items-center flex-col w-[400px] h-[700px] relative z-10 ">
      <div className="flex justify-around items-center flex-col w-[400px] h-[490px] absolute top-0 z-10 bg-[#ffffff]/40 backdrop-blur-lg rounded-t-[50px]">
        <div className="p-1 pl-9 self-start ">
          <p className="text-black/20">Jan, 7, 2025</p>
          <h1 className="text-[45px] font">Tokyo</h1>
        </div>
        <img className=" w-[250px] h-[250px]" src="sun.png" alt="" />
      </div>
      <div className="flex justify-center items-center flex-col w-[400px] h-[210px] absolute bottom-0 z-10 bg-[#ffffff]/40 backdrop-blur-lg rounded-b-[50px]"></div>
    </div>
  );
}
