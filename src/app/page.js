"use client";
import { useState } from "react";

import RightSide from "@/components/Right";
import LeftSide from "@/components/Left";
import Circles from "@/components/Circles";

export default function Home() {
  const [selectedCities, setSelectedCities] = useState("Ulaanbaatar");
  const [dayTemp, setDayTemp] = useState(null);
  const [dayCondition, setDayCondition] = useState(null);
  const [dayIcon, setDayIcon] = useState(null);
  const [nightTemp, setNightTemp] = useState(null);
  const [nightCondition, setNightCondition] = useState(null);
  const [nightIcon, setNightIcon] = useState(null);
  const [date, setDate] = useState(null);
  return (
    <div className="flex w-[100vw] h-[100vh] relative overflow-hidden">
      <Circles />
      <LeftSide
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
        date={date}
        setDate={setDate}
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
        date={date}
        setDate={setDate}
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
