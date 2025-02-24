import GuideCard from "./GuideCard";
import roxana from "assets/images/roxana.jpg";
import hadis from "assets/images/hadis.jpg";
import fatemeh from "assets/images/fatemeh.jpg";

function TopGuiders() {
  return (
    <div className="px-4 md:px-10 mb-[90px]">
      <div className="flex justify-between mt-6 mb-4">
        <h1 className="font-yekan font-medium text-[20px] sm:text-[24px] text-[#494953]">
          راهنمایان برتر
        </h1>
        <p className="text-[#615EFC] cursor-pointer underline text-[16px] sm:text-[18px] font-yekan">
          دیدن همه
        </p>
      </div>
      <div className="flex flex-wrap gap-4 lg:justify-between justify-center">
        <GuideCard
          name="رکسانا تیموری"
          skill="دیجیتال مارکتر"
          image={roxana}
          user="roxana"
        />
        <GuideCard
          name="حدیث حافظ"
          skill="طراح رابط کاربری"
          image={hadis}
          user="hadis"
        />
        <GuideCard
          name="فاطمه دلخوش"
          skill="برنامه نویس"
          image={fatemeh}
          user="fatemeh"
        />
      </div>
    </div>
  );
}

export default TopGuiders;
