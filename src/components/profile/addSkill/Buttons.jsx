import { VscChromeClose } from "react-icons/vsc";

function Buttons({ setIsAddOpen, isDisable, clickHandler }) {
  return (
    <div className="flex gap-2 justify-end">
      <button
        className="bg-[#FF5656] flex justify-center items-center rounded-[5px] w-[32px] h-[32px] font-yekan"
        onClick={() => setIsAddOpen(false)}
        disabled={isDisable}
      >
        <VscChromeClose className="w-[20px] h-[20px] text-white" />
      </button>
      <button
        type="submit"
        disabled={isDisable}
        onClick={clickHandler}
        className="bg-[#6A7EFC] text-white rounded-[5px] w-[97px] h-[32px] font-yekan"
      >
        ذخیره
      </button>
    </div>
  );
}

export default Buttons;
