import hadis from "assets/images/hadis.jpg";
import roxana from "assets/images/roxana.jpg";
import fatemeh from "assets/images/fatemeh.jpg";
import { FaRobot, FaSearch } from "react-icons/fa";
import { VscTerminalCmd } from "react-icons/vsc";

export const user = [
  {
    name: "حدیث حافظ",
    job: "طراح رابط کاربری",
    nickname: "hadis",
    profile: hadis,
    icon: VscTerminalCmd,
    favourite: "برنامه نویسی",
  },
  {
    name: "فاطمه دلخوش",
    job: "برنامه نویس",
    nickname: "fatemeh",
    profile: fatemeh,
    icon: FaRobot,
    favourite: "هوش مصنوعی",
  },
  {
    name: "رکسانا تیموری",
    job: "دیجیتال مارکتر",
    nickname: "roxana",
    profile: roxana,
    icon: FaSearch,
    favourite: "دیجیتال مارکتینگ",
  },
];
