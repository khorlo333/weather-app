import RightCard from "./RightData";

export default function RightSide({
  selectedCity,
  nightTemp,
  nightCondition,
  nightIcon,
  date,
}) {
  return (
    <div className="bg-[#0F141E] w-[50%] h-[100%] flex justify-center items-center">
      <RightCard
        date={date}
        selectedCity={selectedCity}
        nightTemp={nightTemp}
        nightCondition={nightCondition}
        nightIcon={nightIcon}
      />
    </div>
  );
}
