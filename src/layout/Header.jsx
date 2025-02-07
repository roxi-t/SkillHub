import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import HamburgerMenu from "components/layout/HamburgerMenu";
import Categories from "components/layout/Categories";
import Buttons from "components/layout/Buttons";
import Logo from "components/layout/Logo";
function Header() {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mt-5 w-full">
      <div className="flex items-center justify-between flex-wrap px-4 md:px-10">
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <Logo />
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <GiHamburgerMenu className="w-7 h-7 text-[#494953]" />
            </button>
          </div>
          <div className="mx-4 font-yekan w-full lg:w-[550px]">
            <input
              type="text"
              placeholder="جست‌وجوی مهارت‌ها..."
              className="w-full px-4 py-2 rounded-[10px] h-[40px] bg-[#EDF2F6] focus:outline-none"
            />
          </div>
        </div>
        <Buttons data={data} />
      </div>
      <Categories />
      {menuOpen && <HamburgerMenu data={data} />}
      <div className="w-full border bg-[#9795B5] mt-5" />
    </header>
  );
}

export default Header;
