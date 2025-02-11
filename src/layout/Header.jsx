import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import HamburgerMenu from "components/layout/HamburgerMenu";
import Categories from "components/layout/Categories";
import Buttons from "components/layout/Buttons";
import Logo from "components/layout/Logo";
import { FiSearch } from "react-icons/fi";
import ActiveSearchBar from "components/layout/ActiveSearchBar";

function Header() {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  return (
    <>
      {searchActive && (
        <div className="fixed lg:top-[140px] top-[80px] left-0 right-0 bottom-0 bg-gray-500 bg-opacity-60 backdrop-blur-[2px] z-30" />
      )}

      <header className="mt-5 w-full z-30 relative">
        <div className="flex items-center justify-between flex-wrap px-4 md:px-10">
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <Logo />
            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <GiHamburgerMenu className="w-7 h-7 text-[#494953]" />
              </button>
            </div>
            <div className="relative mx-4 font-yekan w-full lg:w-[550px]">
              <FiSearch className="absolute w-[18px] h-[18px] right-3 top-1/2 transform -translate-y-1/2 text-[#615EFC]" />
              <input
                type="text"
                placeholder="جست‌وجوی مهارت‌ها..."
                className="w-full px-10 py-2 rounded-[10px] h-[40px] bg-[#EDF2F6] focus:outline-none"
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}
              />
              {searchActive && (
                <div className="absolute top-full left-0 w-full z-50">
                  <ActiveSearchBar />
                </div>
              )}
            </div>
          </div>
          <Buttons data={data} />
        </div>
        <div className="relative z-40">
          <Categories />
        </div>
        {menuOpen && <HamburgerMenu data={data} />}
        <div className="w-full border bg-[#9795B5] mt-5" />
      </header>
    </>
  );
}

export default Header;
