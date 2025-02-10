import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function ToastConfig() {
  return (
    <ToastContainer
      position="top-left"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      theme="dark"
    />
  );
}

export default ToastConfig;
