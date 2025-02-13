import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="hidden lg:block mt-6">
      <nav className="flex items-center justify-start gap-4 px-4 md:px-10 text-[#9795B5] font-yekan text-sm md:text-base">
        <Link
          to="/explorer"
          className="flex items-center gap-1 text-[#494953] font-bold"
        >
          <GiHamburgerMenu className="w-4 h-4" /> دسته‌بندی مهارت‌ها
        </Link>
        <span>|</span>
        <Link to="/explorer" className="flex items-center gap-1">
          <MdOutlineLocalFireDepartment className="w-4 h-4" /> مهارت‌های محبوب
        </Link>
        <span>|</span>
        <Link to="/explorer" className="flex items-center gap-1">
          <CgProfile className="w-4 h-4" /> راهنمایان برتر
        </Link>
        <span>|</span>
        <span>راهنما شوید!</span>
      </nav>
    </div>
  );
}

export default Categories;
