export default function Circles() {
  return (
    <div>
      <div className=" w-[1340px] h-[1340px] absolute rounded-full border border-muted-foreground/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <img
        className="w-[150px] h-[150px] absolute left-[250px] top-[100px] z-1"
        src="sun.svg"
        alt=""
      />
      <img
        className="w-[150px] h-[150px] absolute right-[250px] bottom-[100px] z-1"
        src="ellipse.svg"
        alt=""
      />
      <div className=" w-[940px] h-[940px] absolute rounded-full border border-muted-foreground/20 z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" w-[540px] h-[540px] absolute rounded-full border border-muted-foreground/20 z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className=" w-[340px] h-[340px] absolute rounded-full border border-muted-foreground/20 z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-center content-center w-[140px] h-[140px] absolute rounded-full border border-muted-foreground/20 z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
