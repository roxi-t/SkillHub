import amir from "assets/images/amir.jpg";
import roxana from "assets/images/roxana.jpg";
import matin from "assets/images/matin.jpg";
import { FaRobot, FaSearch } from "react-icons/fa";
import { VscTerminalCmd } from "react-icons/vsc";

export const user = [
  {
    name: "امیرمحمد ملازمی",
    job: "برنامه نویس",
    nickname: "amir",
    profile: amir,
    icon: VscTerminalCmd,
    favourite: "برنامه نویسی",
  },
  {
    name: "متین قربانی",
    job: "هوش مصنوعی",
    nickname: "matin",
    profile: matin,
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
