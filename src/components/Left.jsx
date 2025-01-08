import LeftCard from "./LeftData";
import Search from "./Search";
export default function LeftSide({
  selectedCities,
  setSelectedCities,
  dayTemp,
  setDayTemp,
  dayCondition,
  setDayCondition,
  nightTemp,
  setNightTemp,
  nightCondition,
  setNightCondition,
  dayIcon,
  setDayIcon,
  nightIcon,
  setNightIcon,
}) {
  return (
    <div className="bg-[#F3F4F6] w-[50%] h-[100%] flex justify-center items-center">
      <Search
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
        dayTemp={dayTemp}
        setDayTemp={setDayTemp}
        dayCondition={dayCondition}
        setDayCondition={setDayCondition}
        nightTemp={nightTemp}
        setNightTemp={setNightTemp}
        nightCondition={nightCondition}
        setNightCondition={setNightCondition}
        dayIcon={dayIcon}
        setDayIcon={setDayIcon}
        nightIcon={nightIcon}
        setNightIcon={setNightIcon}
      />
      <LeftCard
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
        dayTemp={dayTemp}
        setDayTemp={setDayTemp}
        dayCondition={dayCondition}
        setDayCondition={setDayCondition}
        nightTemp={nightTemp}
        setNightTemp={setNightTemp}
        nightCondition={nightCondition}
        setNightCondition={setNightCondition}
        dayIcon={dayIcon}
        setDayIcon={setDayIcon}
        nightIcon={nightIcon}
        setNightIcon={setNightIcon}
      />
    </div>
  );
}
