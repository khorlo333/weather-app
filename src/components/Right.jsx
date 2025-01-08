import RightCard from "./RightData";

export default function RightSide({
  selectedCities,
  setSelectedCities,
  nightTemp,
  setNightTemp,
  nightCondition,
  setNightCondition,
  nightIcon,
  setNightIcon,
}) {
  return (
    <div className="bg-[#0F141E] w-[50%] h-[100%] flex justify-center items-center">
      <RightCard
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
        nightTemp={nightTemp}
        setNightTemp={setNightTemp}
        nightCondition={nightCondition}
        setNightCondition={setNightCondition}
        nightIcon={nightIcon}
        setNightIcon={setNightIcon}
      />{" "}
    </div>
  );
}
