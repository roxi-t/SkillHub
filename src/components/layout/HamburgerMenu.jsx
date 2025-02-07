import { CgProfile } from "react-icons/cg";
import anonymous from "assets/images/anonymous.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { LuBellRing } from "react-icons/lu";
import { Link } from "react-router-dom";

function HamburgerMenu({ data }) {
  return (
    <div className="lg:hidden mt-4 px-4">
      <nav className="flex flex-col gap-3 text-[#494953] font-yekan text-base bg-[#EDF2F6] p-4 rounded-lg shadow">
        <div className="flex gap-4 md:gap-6 items-center justify-end">
          {data && (
            <>
              <FaSave className="w-[22px] h-[22px] md:w-[28px] md:h-[28px] cursor-pointer" />
              <LuBellRing className="w-[22px] h-[22px] md:w-[28px] md:h-[28px] cursor-pointer" />
              <img
                src={data.data.Avatar ? data.data.Avatar : anonymous}
                alt="Profile"
                className="w-[36px] h-[36px] md:w-[50px] md:h-[50px] rounded-full cursor-pointer"
              />
            </>
          )}
        </div>
        <span className="flex items-center gap-2 cursor-pointer">
          <GiHamburgerMenu className="w-5 h-5" /> دسته‌بندی مهارت‌ها
        </span>
        <span className="flex items-center gap-2 cursor-pointer">
          <MdOutlineLocalFireDepartment className="w-5 h-5" /> مهارت‌های محبوب
        </span>
        <span className="flex items-center gap-2 cursor-pointer">
          <CgProfile className="w-5 h-5" /> راهنمایان برتر
        </span>
        <span>راهنما شوید!</span>

        {!data && (
          <Link
            className="bg-[#FF5656] rounded-lg w-full h-[50px] text-white font-yekan font-bold flex items-center justify-center text-base mt-4"
            to="/auth"
          >
            ورود به حساب کاربری
          </Link>
        )}
      </nav>
    </div>
  );
}

export default HamburgerMenu;
