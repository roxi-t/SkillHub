import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { links } from "constants/links";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-[#EDF2F6] sm:w-full lg:pl-16 p-4">
      <div className="flex items-center">
        <img src={logo} alt="SkillHub Logo" className="w-8 mr-2 ml-4" />
        <span className="text-1.8xl font-yekan font-bold text-[#6A7EFC] lg:text-2xl">
          اسکیل<span className="text-[#615EFC]"> هاب</span>
        </span>
      </div>
      <button
        className="md:hidden text-[#494953] text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
      <nav className="hidden md:flex gap-6 items-center font-yekan">
        {links.map((link) => {
          return (
            <Link
              key={link.route}
              to={link.route}
              className={`text-[#494953] text-lg transition-colors duration-300 hover:text-[#6A7EFC] ${
                link.isBlue
                  ? "px-6 py-3 text-lg rounded-full border border-[#7161ef] text-[#494953] transition-all duration-300 hover:bg-[#6A7EFC] hover:text-white"
                  : null
              } ${
                link.isRed
                  ? "px-6 py-3 ml-3 text-lg rounded-full bg-[#FF5656] text-white transition-all duration-300 hover:bg-[#e13b3d]"
                  : null
              }`}
            >
              {link.text}
            </Link>
          );
        })}
      </nav>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#EDF2F6] p-4 shadow-lg flex flex-col gap-4 text-center md:hidden z-10">
          {links.map((link) => {
            return (
              <Link
                key={link.route}
                to={link.route}
                onClick={() => setMenuOpen(false)}
                className={`text-[#494953] text-lg transition-colors font-yekan duration-300 hover:text-[#6A7EFC] ${
                  link.isBlue
                    ? "w-full px-6 py-3 text-sm rounded-full border border-[#7161ef] text-[#494953] transition-all duration-300 hover:bg-[#6A7EFC] hover:text-white"
                    : null
                } ${
                  link.isRed
                    ? "w-full px-6 py-3 text-sm rounded-full bg-[#FF5656] text-white transition-all duration-300 hover:bg-[#e13b3d]"
                    : null
                }`}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
