import { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfile } from "services/profile";
import { toast } from "react-toastify";

function EditAbout({ setIsEditAbout, about }) {
  const [bio, setBio] = useState(about || "");

  const { mutate, isPending, isError } = useMutation({
    mutationFn: editProfile,
  });

  const queryClient = useQueryClient();

  const handleSubmit = () => {
    mutate(
      { bio },
      {
        onSuccess: () => {
          toast.success("اطلاعات با موفقیت ذخیره شد");
          queryClient.invalidateQueries({ queryKey: ["profile"] });
          setIsEditAbout(false);
        },
        onError: () => {
          toast.error("ذخیره اطلاعات با شکست همراه شد");
        },
      }
    );
  };

  return (
    <div className="w-full flex-col flex gap-3">
      <div className="flex items-center gap-2">
        <IoBookOutline />
        <h1 className="font-yekan font-normal text-[18px] text-[#494953]">
          درباره
        </h1>
      </div>
      <div>
        <textarea
          className="w-full h-[220px] bg-[#EDF2F6] resize-none outline-none rounded-[5px] p-2 font-yekan"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          disabled={isPending}
        ></textarea>
      </div>

      {isError && <p className="text-red-500">خطایی رخ داده است.</p>}

      <div className="flex justify-end items-center gap-2">
        <button
          className="bg-[#FF5656] w-[32px] h-[32px] flex items-center justify-center rounded-[5px] disabled:opacity-50"
          onClick={() => setIsEditAbout(false)}
          disabled={isPending}
        >
          <VscChromeClose className="w-[20px] h-[20px] text-white" />
        </button>
        <button
          className="w-[108px] h-[32px] bg-[#615EFC] rounded-[5px] text-white font-yekan font-semibold disabled:opacity-50"
          onClick={handleSubmit}
          disabled={isPending}
        >
          {isPending ? "در حال ذخیره..." : "ذخیره"}
        </button>
      </div>
    </div>
  );
}

export default EditAbout;
