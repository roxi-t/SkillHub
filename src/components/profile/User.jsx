import { FaStar } from "react-icons/fa6";
import amirali from "assets/images/amirali.jpg";
import anonymous from "assets/images/anonymous.png";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaRegCalendarAlt, FaRegEdit } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import EditUser from "./edit/EditUser";
import useUserFromParams from "hooks/useUserFromParams";

function User({ data, isMyself, isEditUser, setIsEditUser, setIsEditAbout }) {
  const { name, job, profile } = useUserFromParams();

  return (
    <div className="flex my-5 flex-col items-center mt-6 w-full xl:w-[15%] p-6">
      {isEditUser && isMyself ? (
        <EditUser
          setIsEditUser={setIsEditUser}
          Avatar={data.Avatar ? data.Avatar : anonymous}
          username={data.username}
          email={data.email}
          skill={data.user_profile_title ? data.user_profile_title : ""}
        />
      ) : (
        <>
          <img
            src={isMyself ? (data.Avatar ? data.Avatar : anonymous) : profile}
            alt="profile"
            className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] object-cover rounded-full"
          />
          <h1 className="font-yekan text-[20px] md:text-[25px] font-semibold mt-5 text-[#494953]">
            {isMyself ? data.username : name}
          </h1>
          <p className="font-yekan text-[18px] md:text-[22px] mt-3 text-[#494953] font-light">
            {isMyself
              ? data.user_profile_title
                ? data.user_profile_title
                : "-"
              : job}
          </p>
          <div className="flex mt-5">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="w-[16px] h-[16px] md:w-[20px] md:h-[19px] text-[#615EFC]"
              />
            ))}
          </div>
          <div className="flex gap-5 md:gap-7 mt-10">
            <button className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-[#EDF2F6] flex justify-center cursor-pointer items-center">
              {isMyself ? (
                <CiBookmark className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] text-[#615EFC]" />
              ) : (
                <TbDeviceAnalytics className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] text-[#615EFC]" />
              )}
            </button>
            <button
              className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-[#EDF2F6] flex justify-center cursor-pointer items-center"
              onClick={isMyself ? () => setIsEditUser(true) : null}
            >
              {isMyself ? (
                <FaRegEdit className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] text-[#615EFC]" />
              ) : (
                <CiShare2 className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] text-[#615EFC]" />
              )}
            </button>
            <button className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-[#EDF2F6] flex justify-center cursor-pointer items-center">
              {isMyself ? (
                <CiShare2 className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] text-[#615EFC]" />
              ) : (
                <FaRegCalendarAlt className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] text-[#615EFC]" />
              )}
            </button>
          </div>
          <div className="mt-6 md:mt-9 w-full flex flex-col gap-3">
            <button className="w-full h-[35px] md:h-[40px] bg-[#FF5656] rounded-[5px] font-yekan text-white">
              {isMyself ? "مشاهده فعالیت‌ها" : "تبادل مهارت"}
            </button>
            <button
              className="w-full h-[35px] md:h-[40px] border border-[#494953] rounded-[5px] font-yekan text-[#494953]"
              onClick={isMyself ? () => setIsEditAbout(true) : null}
            >
              {isMyself ? "ویرایش درباره" : "صحبت کنید"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default User;
