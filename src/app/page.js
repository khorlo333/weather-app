"use client";
import { useState } from "react";

import RightSide from "@/components/Right";
import LeftSide from "@/components/Left";
import Circles from "@/components/Circles";

export default function Home() {
  const [selectedCities, setSelectedCities] = useState("Ulaanbaatar");
  const [dayTemp, setDayTemp] = useState("");
  const [dayCondition, setDayCondition] = useState("");
  const [dayIcon, setDayIcon] = useState("");
  const [nightTemp, setNightTemp] = useState("");
  const [nightCondition, setNightCondition] = useState("");
  const [nightIcon, setNightIcon] = useState("");
  return (
    <div className="flex w-[100vw] h-[100vh] relative overflow-hidden">
      <Circles />
      <LeftSide
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
        dayTemp={dayTemp}
        setDayTemp={setDayTemp}
        dayCondition={dayCondition}
        setDayCondition={setDayCondition}
        dayIcon={dayIcon}
        setDayIcon={setDayIcon}
        nightIcon={nightIcon}
        setNightIcon={setNightIcon}
        nightTemp={nightTemp}
        setNightTemp={setNightTemp}
        nightCondition={nightCondition}
        setNightCondition={setNightCondition}
      />
      <RightSide
        nightTemp={nightTemp}
        setNightTemp={setNightTemp}
        nightCondition={nightCondition}
        setNightCondition={setNightCondition}
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
        nightIcon={nightIcon}
        setNightIcon={setNightIcon}
      />
    </div>
  );
}
