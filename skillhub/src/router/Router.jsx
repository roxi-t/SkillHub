import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "src/pages/LoginForm";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
