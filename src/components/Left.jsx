import LeftCard from "./LeftData";
export default function LeftSide({
  selectedCity,
  dayTemp,
  dayCondition,
  date,
}) {
  return (
    <div className="bg-[#F3F4F6] w-[50%] h-[100%] flex justify-center items-center">
      <LeftCard
        date={date}
        selectedCity={selectedCity}
        dayTemp={dayTemp}
        dayCondition={dayCondition}
      />
    </div>
  );
}
