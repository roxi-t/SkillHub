import { toast } from "react-toastify";

const toastTypes = {
  success: toast.success,
  error: toast.error,
};

const toastMaker = (type, message) => {
  if (!toastTypes[type]) {
    console.error("Invalid toast type:", type);
    return;
  }

  toastTypes[type](message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
  });
};

export default toastMaker;
