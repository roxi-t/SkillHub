import { AiOutlinePicture } from "react-icons/ai";
import PostCard from "../cards/PostCard";
import useUserFromParams from "hooks/useUserFromParams";

function PostSection() {
  const { profile, name } = useUserFromParams();
  return (
    <div className="w-full">
      <div className="flex items-center gap-1 mt-5">
        <AiOutlinePicture className="w-[20px] h-[20px]" />
        <h1 className="text-[18px] font-yekan font-medium text-[#494953] ">
          مبادله‌شده با دیگران
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        <PostCard
          comment={89}
          view={200}
          time={6}
          name={name}
          tags={["اسکیل_هاب", "2025", "محبوب"]}
        />
        <PostCard
          comment={356}
          view={5500}
          time={25}
          name={name}
          tags={["اسکیل_هاب", "2025", "محبوب"]}
          src={profile}
        />
        <PostCard
          comment={101}
          view={600}
          time={4}
          name={name}
          tags={["اسکیل_هاب", "2025", "محبوب"]}
        />
      </div>
    </div>
  );
}

export default PostSection;
