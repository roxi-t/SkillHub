import logo from "assets/images/logo.png";

function Logo() {
  return (
    <div className="hidden sm:flex items-center gap-3">
      <img src={logo} alt="logo" className="w-10 h-10 hidden md:block" />
      <h1 className="text-[#6A7EFC] font-yekan text-[24px] md:text-[30px] font-semibold">
        اسکیل‌<span className="text-[#615EFC]">هاب</span>
      </h1>
    </div>
  );
}

export default Logo;
