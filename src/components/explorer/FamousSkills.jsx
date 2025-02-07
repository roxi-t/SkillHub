import Card from "./Card";

function FamousSkills() {
  return (
    <div className="px-4 md:px-10">
      <div className="flex justify-between mt-6 mb-4">
        <h1 className="font-yekan font-medium text-[20px] sm:text-[24px] text-[#494953]">
          مهارت‌های محبوب
        </h1>
        <p className="text-[#615EFC] cursor-pointer underline text-[16px] sm:text-[18px] font-yekan">
          دیدن همه
        </p>
      </div>
      <div className="flex flex-wrap gap-4 lg:justify-between justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default FamousSkills;
