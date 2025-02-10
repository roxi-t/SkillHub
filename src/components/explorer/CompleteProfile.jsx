import { Link } from "react-router-dom";

function CompleteProfile() {
  return (
    <div className="px-4 md:px-10">
      <div className="w-full px-4 md:px-6 flex flex-col md:flex-row justify-between items-center mt-8 bg-[#EDF2F6] rounded-md py-4 gap-3">
        <div className="flex flex-col w-full md:w-auto text-center md:text-right">
          <h3 className="font-yekan text-[18px] sm:text-[20px] text-[#494953]">
            شما {75}% پروفایل خود را تکمیل کرده‌اید.
          </h3>
          <div className="w-full h-[6px] bg-[#D9D9D9] rounded-[10px] mx-auto md:mx-0 mt-2">
            <div
              className="h-full bg-[#615EFC] rounded-[10px]"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>

        <Link
          to={"/profile"}
          className="bg-[#FF5656] w-full sm:w-[150px] h-[40px] flex items-center justify-center font-yekan font-bold text-white text-[16px] rounded-md"
        >
          تکمیل پروفایل
        </Link>
      </div>
    </div>
  );
}

export default CompleteProfile;
