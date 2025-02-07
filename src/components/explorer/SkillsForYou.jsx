import Card from "./Card";
import { VscTerminalCmd } from "react-icons/vsc";
import { IoCubeOutline } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";

function SkillsForYou() {
  return (
    <div className="px-4 md:px-10">
      <div className="flex justify-between mt-6 mb-4">
        <h1 className="font-yekan font-medium text-[20px] sm:text-[24px] text-[#494953]">
          مهارت‌هایی برای شما
        </h1>
        <p className="text-[#615EFC] cursor-pointer underline text-[16px] sm:text-[18px] font-yekan">
          دیدن همه
        </p>
      </div>
      <div className="flex flex-wrap gap-4 lg:justify-between justify-center">
        <Card
          skill="شی‌گرایی در پایتون"
          tags={["برنامه نویسی", "پایتون"]}
          user="امیرمحمد ملازمی"
          logo={
            <VscTerminalCmd className="w-[30px] mx-auto h-[30px] text-white" />
          }
          job="برنامه‌نویس"
          name="amir"
        />
        <Card
          skill="طراحی محصول"
          tags={["طراح محصول", "محصول"]}
          user="سینا رضایی"
          logo={
            <IoCubeOutline className="w-[30px] mx-auto h-[30px] text-white" />
          }
          job="طراح محصول"
          name="sina"
        />
        <Card
          skill="دیجیتال مارکتینگ"
          tags={["محتوا", "دیجیتال"]}
          user="علی جانشاهی"
          logo={<GrAnnounce className="w-[30px] mx-auto h-[30px] text-white" />}
          job="دیجیتال مارکتر"
          name="ali"
        />
      </div>
    </div>
  );
}

export default SkillsForYou;
