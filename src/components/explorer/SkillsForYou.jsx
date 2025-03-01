import Card from "./Card";
import { VscTerminalCmd } from "react-icons/vsc";
import { GrAnnounce } from "react-icons/gr";
import { GiAtom } from "react-icons/gi";

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
          user="حدیث حافظ"
          logo={
            <VscTerminalCmd className="w-[30px] mx-auto h-[30px] text-white" />
          }
          job="طراح رابط کاربری"
          name="hadis"
        />
        <Card
          skill="کتابخانه React"
          tags={["کتابخانه", "وب"]}
          user="فاطمه دلخوش"
          logo={<GiAtom className="w-[30px] mx-auto h-[30px] text-white" />}
          job="برنامه نویس وب"
          name="fatemeh"
        />
        <Card
          skill="دیجیتال مارکتینگ"
          tags={["محتوا", "دیجیتال"]}
          user="رکسانا تیموری"
          logo={<GrAnnounce className="w-[30px] mx-auto h-[30px] text-white" />}
          job="دیجیتال مارکتر"
          name="roxana"
        />
      </div>
    </div>
  );
}

export default SkillsForYou;
