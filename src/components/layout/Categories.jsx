import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

function Categories() {
  return (
    <div className="hidden lg:block mt-6">
      <nav className="flex items-center justify-start gap-4 px-4 md:px-10 text-[#9795B5] font-yekan text-sm md:text-base">
        <span className="flex items-center gap-1 text-[#494953] font-bold">
          <GiHamburgerMenu className="w-4 h-4" /> دسته‌بندی مهارت‌ها
        </span>
        <span>|</span>
        <span className="flex items-center gap-1">
          <MdOutlineLocalFireDepartment className="w-4 h-4" /> مهارت‌های محبوب
        </span>
        <span>|</span>
        <span className="flex items-center gap-1">
          <CgProfile className="w-4 h-4" /> راهنمایان برتر
        </span>
        <span>|</span>
        <span>راهنما شوید!</span>
      </nav>
    </div>
  );
}

export default Categories;
