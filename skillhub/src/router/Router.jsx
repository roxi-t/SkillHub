import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import LoginForm from "pages/LoginForm";
import Contact from "pages/Contact";
import Download from "pages/Download";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/install" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
