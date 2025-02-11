import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { FaCamera } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfile } from "services/profile";

function EditUser({ setIsEditUser, Avatar, username, skill, email }) {
  const [userData, setUserData] = useState({ username, skill, Avatar });
  const [selectedFile, setSelectedFile] = useState(null);

  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: editProfile,
  });

  const handleChange = (e) =>
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUserData((prev) => ({
        ...prev,
        Avatar: URL.createObjectURL(file),
      }));
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("username", userData.username);
    formData.append("user_profile_title", userData.skill);
    if (selectedFile) {
      formData.append("Avatar", selectedFile);
    }
    mutate(formData, {
      onSuccess: () => {
        setIsEditUser(false);
        queryClient.invalidateQueries({ queryKey: ["profile"] });
      },
      onError: () => {
        alert("خطایی رخ داد. لطفا دوباره تلاش کنید.");
      },
    });
  };

  return (
    <div className="flex flex-col items-center gap-9">
      <div className="relative">
        <img
          src={userData.Avatar}
          alt="profile"
          className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] object-cover rounded-full"
        />
        <label className="absolute bottom-2 left-2 bg-white p-2 rounded-full shadow-md cursor-pointer">
          <FaCamera className="text-gray-600" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
            disabled={isPending}
          />
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="username"
          className="w-[200px] h-[40px] bg-[#EDF2F6] rounded-[5px] font-yekan p-3 outline-none"
          value={userData.username}
          onChange={handleChange}
          disabled={isPending}
        />
        <input
          type="text"
          name="skill"
          className="w-[200px] h-[40px] bg-[#EDF2F6] rounded-[5px] font-yekan p-3 outline-none"
          value={userData.skill}
          onChange={handleChange}
          disabled={isPending}
        />
        <input
          type="text"
          disabled
          className="w-[200px] h-[40px] bg-[#D9D9D9] rounded-[5px] font-yekan p-3 outline-none"
          value={email}
        />

        {isError && <p className="text-red-500">خطایی رخ داده است.</p>}

        <div className="flex justify-end items-center gap-2">
          <button
            className={`bg-[#FF5656] w-[25px] h-[25px] flex items-center justify-center rounded-[5px] ${
              isPending ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setIsEditUser(false)}
            disabled={isPending}
          >
            <VscChromeClose className="w-[15px] h-[15px] text-white" />
          </button>
          <button
            className={`w-fit px-3 py-1 h-fit bg-[#615EFC] rounded-[5px] text-white font-yekan font-semibold ${
              isPending ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSubmit}
            disabled={isPending}
          >
            {isPending ? "در حال ذخیره ..." : "ذخیره"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
