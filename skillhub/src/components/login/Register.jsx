import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-12 text-center">
      <h1 className="text-2xl font-bold text-gray-700 font-yekan">
        ساخت اکانت
      </h1>
      <div className="flex justify-center space-x-4 my-4">
        <Link
          to={`/`}
          className="flex cursor-pointer items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
        >
          
        </Link>
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
        ></a>
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
        ></a>
      </div>
      <input
        type="text"
        placeholder="نام"
        className="w-full bg-gray-100 text-sm text-right py-3 px-4 rounded-full mb-3 font-yekan font-bold"
      />
      <input
        type="email"
        placeholder="ایمیل"
        className="w-full bg-gray-100 text-right text-sm py-3 px-4 rounded-full mb-3 font-yekan font-bold"
      />
      <input
        type="password"
        placeholder="گذرواژه"
        className="w-full bg-gray-100 text-sm py-3 text-right px-4 rounded-full mb-3 font-yekan font-bold"
      />
      <button className="mt-4 font-yekan bg-red-500 text-white text-sm uppercase font-semibold py-3 px-8 rounded-full hover:bg-red-600">
        ثبت نام
      </button>
    </div>
  );
}

export default Register;
