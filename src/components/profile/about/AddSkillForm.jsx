import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";

function AddSkillForm({ isNormalSkill }) {
  const [skillDomain, setSkillDomain] = useState("");
  const [skillDescription, setSkillDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      <h1 className="text-[24px] text-[#494953] text-right font-yekan font-semibold mb-9">
        مهارت جدید
      </h1>

      <div className="w-full h-[501px] bg-[#EDF2F6] rounded-[10px] p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 flex flex-col gap-1">
            <label className="text-[#494953] text-right text-[14px] font-yekan">
              عنوان مهارت*
            </label>
            <select
              onChange={(e) => setSkillDomain(e.target.value)}
              className="w-full h-[35px] text-[#494953] text-[14px] px-1 rounded-[5px] border border-[#CED4DA] font-yekan"
              required
            >
              <option value="کسب و کار">کسب و کار</option>
              <option value="فناوری">فناوری</option>
              <option value="هنر">هنر</option>
            </select>
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label className="text-[#494953] text-[14px] text-right font-yekan">
              حیطه مهارت*
            </label>
            <select
              value={skillDomain}
              onChange={(e) => setSkillDomain(e.target.value)}
              className="w-full h-[35px] text-[#494953] px-1 text-[14px] font-yekan rounded-[5px] border border-[#CED4DA]"
              required
            >
              <option value="کسب و کار">کسب و کار</option>
              <option value="فناوری">فناوری</option>
              <option value="هنر">هنر</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="block text-[#494953] text-right text-[14px] font-yekan mb-1">
              توضیحات
            </label>
            <textarea
              value={skillDescription}
              onChange={(e) => setSkillDescription(e.target.value)}
              className="w-full h-[90px] p-2 rounded-[5px] border border-[#CED4DA] resize-none"
              rows="4"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-[20px] h-[20px] bg-white cursor-pointer"
              />
              <p className="font-yekan text-[14px] font-light">
                به‌جای دریافت متقابل مهارت، حاضرم امتیاز دریافت کنم.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-[20px] h-[20px] bg-white cursor-pointer"
              />
              <p className="font-yekan text-[14px] font-light">
                می‌توانم این مهارت را به‌صورت موازی به چندین نفر آموزش دهم.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <p className="font-yekan text-[14px] font-light text-[#494953] ">
              سقف افراد*
            </p>
            <div className="flex items-center gap-6 mb-3">
              <div className="w-[158px] h-[35px] px-2 bg-white rounded-[5px] flex items-center justify-between">
                <button className="w-[18px] h-[18px] text-[#615EFC]">
                  <FaMinus />
                </button>
                <p className="font-yekan text-[14px] font-light text-[#494953]">
                  {} نفر
                </p>
                <button className="w-[18px] h-[18px] text-[#615EFC]">
                  <FaPlus />
                </button>
              </div>
              <div className="flex gap-">
                <IoMdInformationCircleOutline className="w-[12px] h-[12px] text-[#615EFC]" />
                <p className="font-yekan font-light text-[11px] text-[#615EFC]">
                  بعداً می‌توانید با مراجعه به قسمت «ویرایش مهارت» این سقف را
                  تغییر دهید.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button className="bg-[#FF5656] flex justify-center items-center rounded-[5px] w-[32px] h-[32px] font-yekan">
              <VscChromeClose className="w-[20px] h-[20px] text-white" />
            </button>
            <button
              type="submit"
              className="bg-[#6A7EFC] text-white rounded-[5px] w-[97px] h-[32px] font-yekan"
            >
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSkillForm;
