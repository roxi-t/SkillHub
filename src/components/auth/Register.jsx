import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import InputField from "./InputField";
import { validations } from "utils/validation";
import { authRegister } from "services/auth";
import { useMutation } from "@tanstack/react-query";
import Loading from "react-loading";
import toastMaker from "utils/toastMaker";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const { mutate, isPending } = useMutation({ mutationFn: authRegister });

  const icons = [
    { Icon: FaGithub, link: "#" },
    { Icon: FaFacebook, link: "#" },
    { Icon: FaGoogle, link: "#" },
  ];

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const validationErrors = await validations(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    mutate(formData, {
      onSuccess: ({ response }) => {
        if (response) {
          // toastMaker("success", "ثبت نام موفقیت‌آمیز بود!");
          setFormData({
            username: "",
            email: "",
            password: "",
          });
        }
      },
      onError: (error) => {
        toastMaker(
          "error",
          error.response?.data?.message || "خطایی رخ داده است"
        );
      },
    });
  };

  return (
    <form
      className="w-full flex flex-col justify-center items-center text-center"
      onSubmit={handleRegister}
    >
      <h1 className="text-2xl font-bold text-gray-700 font-yekan">
        ساخت اکانت
      </h1>
      <div className="flex justify-center gap-2 my-4">
        {icons.map(({ Icon, link }, index) => (
          <Link
            key={index}
            to={link}
            className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
          >
            <Icon />
          </Link>
        ))}
      </div>
      <InputField
        type="text"
        placeholder="نام کاربری"
        value={formData.username}
        onChange={handleChange("username")}
        error={errors.username}
      />
      <InputField
        type="email"
        placeholder="ایمیل"
        value={formData.email}
        onChange={handleChange("email")}
        error={errors.email}
      />
      <InputField
        type="password"
        placeholder="گذرواژه"
        value={formData.password}
        onChange={handleChange("password")}
        error={errors.password}
      />
      <button
        type="submit"
        disabled={isPending}
        className={`mt-4 border border-1 transition-all duration-300 bg-red-500 cursor-pointer ${
          !isPending
            ? "hover:text-red-500 hover:bg-white hover:border-red-500"
            : null
        }  text-white text-sm font-semibold py-3 px-8 rounded-full disabled:opacity-50 flex items-center justify-center gap-2`}
      >
        <span>
          {isPending ? (
            <Loading type="spin" color="#fff" height={16} width={16} />
          ) : (
            "ثبت نام"
          )}
        </span>
      </button>
    </form>
  );
}

export default Register;
