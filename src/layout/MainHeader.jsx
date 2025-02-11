import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { links } from "constants/links";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";

const MainHeader = ({ isLogin }) => {
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
        {links.map((link) => (
          <Link
            key={link.route}
            to={link.isBlue ? (isLogin ? "/explorer" : link.route) : link.route}
            className={`text-[#494953] text-lg transition-colors duration-300 hover:text-[#6A7EFC] ${
              link.isBlue
                ? "px-6 py-3 text-lg rounded-full border border-[#7161ef] text-[#494953] transition-all duration-300 hover:bg-[#6A7EFC] hover:text-white"
                : ""
            } ${
              link.isRed
                ? "px-6 py-3 ml-3 text-lg rounded-full bg-[#FF5656] text-white transition-all duration-300 hover:bg-[#e13b3d] hover:text-white"
                : ""
            }`}
          >
            {link.text}
          </Link>
        ))}
      </nav>
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className={`absolute top-0 left-0 w-full bg-[#EDF2F6] p-4 shadow-lg flex flex-col gap-4 text-center md:hidden z-40 transition-transform duration-300 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <button
              className="md:hidden text-[#494953] text-2xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX />
            </button>

            {links.map((link) => (
              <Link
                key={link.route}
                to={
                  link.isBlue
                    ? isLogin
                      ? "/explorer"
                      : link.route
                    : link.route
                }
                onClick={() => setMenuOpen(false)}
                className={`text-[#494953] text-lg transition-colors font-yekan duration-300 hover:text-[#6A7EFC] ${
                  link.isBlue
                    ? "w-full px-6 py-3 text-sm rounded-full border border-[#7161ef] text-[#494953] transition-all duration-300 hover:bg-[#6A7EFC] hover:text-white"
                    : ""
                } ${
                  link.isRed
                    ? "w-full px-6 py-3 text-sm rounded-full mb-3 bg-[#FF5656] text-white transition-all duration-300 hover:bg-[#e13b3d] hover:text-white"
                    : ""
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </>
      )}
    </header>
  );
};

export default MainHeader;
