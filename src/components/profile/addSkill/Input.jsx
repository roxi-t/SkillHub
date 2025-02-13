import { useState } from "react";

function Input() {
  const [skillDescription, setSkillDescription] = useState("");
  return (
    <>
      <div className="mb-3">
        <label className="block text-[#494953] text-right text-[14px] font-yekan mb-1">
          توضیحات
        </label>
        <textarea
          value={skillDescription}
          onChange={(e) => setSkillDescription(e.target.value)}
          className="w-full h-[90px] p-2 rounded-[5px] border-none outline-none border font-yekan border-[#CED4DA] resize-none"
          rows="4"
        ></textarea>
      </div>
    </>
  );
}

export default Input;
