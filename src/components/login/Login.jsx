import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import InputField from "./InputField";
import { validations } from "utils/validation";
import { authLogin } from "services/auth";
import { setCookie } from "utils/cookie";
import { getProfile } from "services/user";
import { useQuery } from "@tanstack/react-query";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const { refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = await validations(formData);
    if (Object.keys(validationErrors).length > 0) setErrors(validationErrors);
    else {
      const { response, error } = await authLogin(
        formData.username,
        formData.password
      );
      if (response) {
        setCookie(response.data);
        navigate("/explorer");
        refetch();
      }
      if (error) console.log(error.response.data.message);
    }
  };

  return (
    <form
      className="w-full flex flex-col justify-center items-center text-center"
      onSubmit={handleLogin}
    >
      <h1 className="text-2xl font-bold text-gray-700 font-yekan">ورود</h1>
      <div className="flex justify-center space-x-4 my-4">
        <Link
          to="#"
          className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
        >
          <FaGithub />
        </Link>
        <Link
          to="#"
          className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
        >
          <FaFacebook />
        </Link>
        <Link
          to="#"
          className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
        >
          <FaGoogle />
        </Link>
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
        onClick={handleLogin}
        type="submit"
        className="mt-4 hover:border-red-500 border border-1 transition-all duration-300 bg-red-500 cursor-pointer hover:text-red-500 text-white text-sm font-semibold py-3 px-8 rounded-full hover:bg-white"
      >
        ورود
      </button>
    </form>
  );
}

export default Login;
