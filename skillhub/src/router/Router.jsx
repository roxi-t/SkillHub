import { Route, Routes } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import AuthForm from "pages/AuthForm";
import Contact from "pages/Contact";
import Download from "pages/Download";
import { getProfile } from "services/user";
import { useQuery } from "@tanstack/react-query";

function Router() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  if (isLoading) return <h1>loading ...</h1>;
  if (error) return <h1>error ...</h1>;
  if (data) console.log(data);

  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth" element={data ? <Dashboard /> : <AuthForm />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/install" element={<Download />} />
    </Routes>
  );
}

export default Router;
