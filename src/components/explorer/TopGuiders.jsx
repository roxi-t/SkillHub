import GuideCard from "./GuideCard";
import ali from "assets/images/ali.jpg";
import sina from "assets/images/sina.jpg";
import amir from "assets/images/amir.jpg";

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
        <GuideCard name="علی جانشاهی" skill="دیجیتال مارکتر" image={ali} />
        <GuideCard name="سینا رضایی" skill="طراح محصول" image={sina} />
        <GuideCard name="امیرمحمد ملازمی" skill="برنامه نویس" image={amir} />
      </div>
    </div>
  );
}

export default TopGuiders;
