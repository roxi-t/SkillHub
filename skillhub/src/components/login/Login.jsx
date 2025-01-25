import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import InputField from "./InputField";
import { validations } from "utils/validation";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleLogin = () => {
    const validationErrors = validations(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center text-center">
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
        type="email"
        placeholder="ایمیل"
        value={formData.email}
        onChange={handleInputChange("email")}
        error={errors.email}
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
        className="mt-4 hover:border-red-500 border border-1 transition-all duration-300 bg-red-500 cursor-pointer hover:text-red-500 text-white text-sm font-semibold py-3 px-8 rounded-full hover:bg-white"
      >
        ورود
      </button>
    </div>
  );
}

export default Login;
