"use client";
import RightSide from "@/components/Right";
import LeftSide from "@/components/Left";
import Circles from "@/components/Circles";

export default function Home() {
  return (
    <div className="flex w-[100vw] h-[100vh] relative">
      <Circles />
      <LeftSide />
      <RightSide />
    </div>
  );
}
