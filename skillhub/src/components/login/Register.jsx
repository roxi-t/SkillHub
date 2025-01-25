import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import InputField from "./InputField";
import { validations } from "utils/validation";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const icons = [
    { Icon: FaGithub, link: "#" },
    { Icon: FaFacebook, link: "#" },
    { Icon: FaGoogle, link: "#" },
  ];

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleRegister = () => {
    const validationErrors = validations(formData);
    if (Object.keys(validationErrors).length > 0) setErrors(validationErrors);
    else {
      console.log("نام:", formData.name);
      console.log("ایمیل:", formData.email);
      console.log("گذرواژه:", formData.password);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl font-bold text-gray-700 font-yekan">
        ساخت اکانت
      </h1>
      <div className="flex justify-center space-x-4 my-4">
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
        placeholder="نام"
        value={formData.name}
        onChange={handleChange("name")}
        error={errors.name}
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
        onClick={handleRegister}
        className="mt-4 font-yekan hover:border-red-500 border border-1 transition-all duration-300 hover:text-red-500 hover:bg-white bg-red-500 text-white text-sm cursor-pointer font-semibold py-3 px-8 rounded-full"
      >
        ثبت نام
      </button>
    </div>
  );
}

export default Register;
