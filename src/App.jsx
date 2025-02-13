import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import defaultOptions from "configs/reactQuery";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient({ defaultOptions });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </QueryClientProvider>
  );
}

export default App;
