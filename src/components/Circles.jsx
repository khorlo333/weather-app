export default function Circles() {
  return (
    <div>
      <div className=" w-[1340px] h-[1340px] absolute rounded-full border border-muted-foreground/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className=" w-[940px] h-[940px] absolute rounded-full border border-muted-foreground/20 z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" w-[540px] h-[540px] absolute rounded-full border border-muted-foreground/20 z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col justify-center  gap-[140px] items-center w-[340px] h-[340px] absolute rounded-full border border-muted-foreground/20 z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[100px] w-[70px] outline-none border-none bg-[#F3F4F6] ml-[70px] mt-[20px] relative overflow-hidden mb-[-75px] z-10 flex justify-center content-center">
              <div className="h-[100px] w-[70px] bg-[#0F141E] outline-none border-none rounded-bl-[70px] absolute flex justify-center content-center"></div>
            </div>
            <div className="h-[100px] w-[70px] outline-none border-none bg-[#F3F4F6] ml-[70px] mb-[20px] relative overflow-hidden mt-[66px] z-10 flex justify-center content-center">
              <div className=" h-[100px] w-[70px] bg-[#0F141E] rounded-tl-[70px] flex absolute justify-center content-center"></div>
            </div>

            <div className="flex justify-center content-center w-[140px] h-[140px] bg-[#F3F4F6] absolute rounded-full outline-r-none border border-muted-foreground/20 z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex justify-center content-center">
                <img
                  className="z-10 mr-[-25px] p-7"
                  src="leftVector.svg"
                  alt=""
                />
                <img className="z-20 p-7" src="rightVector.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
