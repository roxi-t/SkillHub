import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import InputField from "./InputField";
import { validations } from "utils/validation";
import { authRegister } from "services/auth";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
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

  const handleRegister = async (e) => {
    e.preventDefault();
    const validationErrors = await validations(formData);
    if (Object.keys(validationErrors).length > 0) setErrors(validationErrors);
    else {
      const { response, error } = await authRegister(
        formData.username,
        formData.email,
        formData.password
      );
      if (response) {
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      }
      if (error) console.log(error.response.data.message);
    }
  };

  return (
    <form
      className="w-full flex flex-col justify-center items-center text-center"
      onSubmit={handleRegister}
    >
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
        onClick={handleRegister}
        type="submit"
        className="mt-4 font-yekan hover:border-red-500 border border-1 transition-all duration-300 hover:text-red-500 hover:bg-white bg-red-500 text-white text-sm cursor-pointer font-semibold py-3 px-8 rounded-full"
      >
        ثبت نام
      </button>
    </form>
  );
}

export default Register;
