import amir from "assets/images/amir.jpg";
import sina from "assets/images/sina.jpg";
import ali from "assets/images/ali.jpg";
import { FaProductHunt, FaSearch } from "react-icons/fa";
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
    name: "سینا رضایی",
    job: "طراح محصول",
    nickname: "sina",
    profile: sina,
    icon: FaProductHunt,
    favourite: "طراحی محصول",
  },
  {
    name: "علی جانشاهی",
    job: "دیجیتال مارکتر",
    nickname: "ali",
    profile: ali,
    icon: FaSearch,
    favourite: "دیجیتال مارکتینگ",
  },
];
