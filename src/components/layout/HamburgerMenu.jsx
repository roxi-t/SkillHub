import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

function HamburgerMenu() {
  return (
    <div className="sm:hidden mt-4 px-4">
      <nav className="flex flex-col gap-3 text-[#494953] font-yekan text-base bg-[#EDF2F6] p-4 rounded-lg shadow">
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
      </nav>
    </div>
  );
}

export default HamburgerMenu;
