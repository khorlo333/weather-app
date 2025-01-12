"use client";
import { useState } from "react";
import Search from "@/components/Search";
import RightSide from "@/components/Right";
import LeftSide from "@/components/Left";
import Circles from "@/components/Circles";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [nightTemp, setNightTemp] = useState(null);
  const [nightCondition, setNightCondition] = useState("");
  const [date, setDate] = useState(null);
  const [dayTemp, setDayTemp] = useState(null);
  const [dayCondition, setDayCondition] = useState("");

  return (
    <div className="flex w-[100vw] h-[100vh] relative overflow-hidden">
      <Circles />
      <Search
        setDate={setDate}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        setDayTemp={setDayTemp}
        setDayCondition={setDayCondition}
        setNightTemp={setNightTemp}
        setNightCondition={setNightCondition}
      />
      <LeftSide
        date={date}
        selectedCity={selectedCity}
        dayTemp={dayTemp}
        dayCondition={dayCondition}
      />
      <RightSide
        date={date}
        selectedCity={selectedCity}
        nightTemp={nightTemp}
        nightCondition={nightCondition}
      />
    </div>
  );
}
