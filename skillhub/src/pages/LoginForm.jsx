import { useState } from "react";
import Login from "src/components/login/Login";
import Overlay from "src/components/login/Overlay";
import Register from "src/components/login/Register";

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative w-[850px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
        <Overlay isLogin={isLogin} setIsLogin={setIsLogin} />
        <div
          className={`absolute inset-0 flex transition-transform duration-700 ease-in-out ${
            isLogin ? "translate-x-1/2" : "-translate-x-1/2"
          }`}
        >
          <Register />
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
