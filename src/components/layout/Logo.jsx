import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="hidden lg:flex items-center gap-3">
      <img src={logo} alt="logo" className="w-10 h-10 hidden md:block" />
      <Link
        to="/explorer"
        className="text-[#6A7EFC] font-yekan text-[24px] md:text-[30px] font-semibold"
      >
        اسکیل‌<span className="text-[#615EFC]">هاب</span>
      </Link>
    </div>
  );
}

export default Logo;
