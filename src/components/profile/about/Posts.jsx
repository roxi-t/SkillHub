import { SlPicture } from "react-icons/sl";
import PostCard from "../cards/PostCard";

function Posts({ data }) {
  return (
    <div className="w-full mt-8">
      <div className="flex mb-6 justify-between">
        <div className="flex gap-2 items-center">
          <SlPicture className="w-[20px] h-[20px]" />
          <h1 className="text-[18px] font-yekan text-[#494953] font-semibold">
            اخیراً پست‌شده
          </h1>
        </div>
        <div className="flex gap-6">
          <p className="text-[#615EFC] cursor-pointer underline text-[18px] font-yekan font-semibold">
            پست جدید
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {data.posts ? (
          data.posts.map((post) => (
            <PostCard
              key={post.id}
              name={data.username}
              time={2}
              view={100}
              comment={65}
            />
          ))
        ) : (
          <div className="bg-[#EDF2F6] h-[97px] rounded-[10px] flex justify-center items-center">
            <p className="font-yekan font-normal text-[16px] text-[#494953]">
              در حال حاضر پستی وجود ندارد!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;
