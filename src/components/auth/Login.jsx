import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import InputField from "./InputField";
import { validations } from "utils/validation";
import { authLogin } from "services/auth";
import { setCookie } from "utils/cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Loading from "react-loading";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const { mutate, isPending } = useMutation({ mutationFn: authLogin });

  const queryClient = useQueryClient();

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const icons = [
    { Icon: FaGithub, link: "#" },
    { Icon: FaFacebook, link: "#" },
    { Icon: FaGoogle, link: "#" },
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = await validations(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    mutate(formData, {
      onSuccess: ({ response }) => {
        if (response?.data) {
          toast.success("ورود موفقیت آمیز");
          setCookie(response.data);
          queryClient.invalidateQueries({ queryKey: ["profile"] });
          navigate("/explorer");
        } else {
          toast.error("نام کاربری یا رمز عبور اشتباه است");
        }
      },
      onError: () => {
        toast.error("مشکلی در ورود به سیستم وجود دارد");
      },
    });
  };

  return (
    <form
      className="w-full flex flex-col justify-center items-center text-center"
      onSubmit={handleLogin}
    >
      <h1 className="text-2xl font-bold text-gray-700 font-yekan">ورود</h1>
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
        type="username"
        placeholder="نام کاربری"
        value={formData.username}
        onChange={handleInputChange("username")}
        error={errors.username}
      />
      <InputField
        type="password"
        placeholder="گذرواژه"
        value={formData.password}
        onChange={handleInputChange("password")}
        error={errors.password}
      />
      <Link
        to="#"
        className="text-sm font-yekan font-bold text-blue-500 hover:underline mt-4"
      >
        گذرواژه خود را فراموش کرده‌اید؟
      </Link>
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
            "ورود"
          )}
        </span>
      </button>
    </form>
  );
}

export default Login;
