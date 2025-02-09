import { FaRegUser } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";

function PostCard({ src, name, tags, time, view, comment }) {
  return (
    <div className="w-full flex items-center gap-7 p-2 h-[97px] bg-[#EDF2F6] rounded-[10px]">
      {src ? (
        <div>
          <img
            src={src}
            alt="picture"
            className="rounded-[5px] object-cover w-[85px] h-[85px]"
          />
        </div>
      ) : (
        <div className="flex items-center w-[85px] h-[85px] bg-[#6A7EFC] rounded-md" />
      )}
      <div className="flex flex-col gap-1">
        <h1 className="text-[14px] font-yekan ">
          مهارت‌هایی که در 2025 به آنها نیاز پیدا خواهید کرد!
        </h1>
        <div className="flex gap-4">
          {tags.map((tag) => (
            <p
              key={tag}
              className="text-[13px] font-yekan font-medium text-[#9795B5]"
            >
              #{tag}
            </p>
          ))}
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <FaRegUser className="text-[#494953] w-[13px] h-[13px]" />
            <p className="text-[11px] font-yekan text-[#494953] font-extralight">
              {name}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <CiClock2 className="text-[#494953] w-[13px] h-[13px]" />
            <p className="text-[11px] font-yekan text-[#494953] font-extralight">
              {time} دقیقه
            </p>
          </div>
          <div className="flex items-center gap-1">
            <IoEyeOutline className="text-[#494953] w-[13px] h-[13px]" />
            <p className="text-[11px] font-yekan text-[#494953] font-extralight">
              {view} بازدید
            </p>
          </div>
          <div className="flex items-center gap-1">
            <LuMessageCircleMore className="text-[#494953] w-[13px] h-[13px]" />
            <p className="text-[11px] font-yekan text-[#494953] font-extralight">
              {comment} نظر
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
