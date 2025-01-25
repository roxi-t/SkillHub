function Login() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-12 text-center">
      <h1 className="text-2xl font-bold text-gray-700 font-yekan">ورود</h1>
      <div className="flex justify-center space-x-4 my-4">
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
        ></a>
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
        type="email"
        placeholder="ایمیل"
        className="w-full font-yekan font-bold text-right bg-gray-100 text-sm py-3 px-4 rounded-full mb-3"
      />
      <input
        type="password"
        placeholder="گذرواژه"
        className="w-full font-yekan font-bold text-right bg-gray-100 text-sm py-3 px-4 rounded-full mb-3"
      />
      <a
        href="#"
        className="text-sm font-yekan font-bold text-blue-500 hover:underline"
      >
        گذرواژه خود را فراموش کرده اید؟
      </a>
      <button className="mt-4 bg-red-500 text-white text-sm uppercase font-semibold py-3 px-8 rounded-full hover:bg-red-600">
        ورود
      </button>
    </div>
  );
}

export default Login;
