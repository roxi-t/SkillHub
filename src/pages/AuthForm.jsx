import { useState } from "react";
import Login from "components/auth/Login";
import Overlay from "components/auth/Overlay";
import Register from "components/auth/Register";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative flex w-full h-full sm:w-[850px] sm:h-[500px] bg-white sm:rounded-lg shadow-lg overflow-hidden">
        <Overlay isLogin={isLogin} setIsLogin={setIsLogin} />
        <div className="w-full gap-[100px] mx-12 flex flex-col sm:flex-row transition-transform duration-700 ease-in-out justify-center">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
