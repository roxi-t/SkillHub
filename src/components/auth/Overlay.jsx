function Overlay({ isLogin, setIsLogin }) {
  return (
    <div
      className={`absolute inset-0 sm:flex-row flex-col flex pointer-events-none ${
        isLogin ? "z-10" : "z-0"
      }`}
    >
      <div
        className={`sm:w-1/2 h-1/2 sm:h-full bg-blue-500 flex flex-col justify-center items-center text-white text-center px-12 transition-transform duration-500 ${
          isLogin
            ? "sm:-translate-x-full sm:translate-y-0"
            : "sm:translate-x-0 sm:translate-y-0"
        } ${
          isLogin ? "translate-y-full" : "translate-y-0"
        } pointer-events-auto`}
      >
        <h2 className="text-3xl font-bold mb-2 font-yekan ">اسکیل‌هاب</h2>
        <p className="mb-6 font-yekan font-medium">
          با ما فراتر از چند قدرت را تجربه کنید
        </p>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="border font-yekan border-white text-white text-sm uppercase font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-500"
        >
          {!isLogin ? "ورود" : "ثبت‌نام"}
        </button>
      </div>
    </div>
  );
}

export default Overlay;
