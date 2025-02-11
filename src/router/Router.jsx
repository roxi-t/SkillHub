import { Route, Routes } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import AuthForm from "pages/AuthForm";
import Contact from "pages/Contact";
import Download from "pages/Download";
import { getProfile } from "services/user";
import { useQuery } from "@tanstack/react-query";
import Profile from "pages/Profile";
import Explorer from "pages/Explorer";
import Layout from "layout/Layout";
import Loader from "components/loader/Loader";
import MainLayout from "layout/MainLayout";

function Router() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  if (isLoading) return <Loader />;
  if (error) return <h1>error ...</h1>;

  return (
    <Routes>
      <Route
        index
        element={
          <MainLayout isLogin={data ? true : false}>
            <Dashboard />
          </MainLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <MainLayout isLogin={data ? true : false}>
            <Dashboard />
          </MainLayout>
        }
      />
      <Route
        path="/auth"
        element={
          data ? (
            <MainLayout isLogin={data ? true : false}>
              <Dashboard />
            </MainLayout>
          ) : (
            <AuthForm />
          )
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout isLogin={data ? true : false}>
            <Contact />
          </MainLayout>
        }
      />
      <Route
        path="/download"
        element={
          <MainLayout isLogin={data ? true : false}>
            <Download />
          </MainLayout>
        }
      />
      <Route
        path="/profile/:name"
        element={
          <Layout>
            <Profile isMyself={false} />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          data ? (
            <Layout>
              <Profile data={data.data} isMyself={true} />
            </Layout>
          ) : (
            <AuthForm />
          )
        }
      />
      <Route
        path="/explorer"
        element={
          <Layout>
            <Explorer />
          </Layout>
        }
      />
    </Routes>
  );
}

export default Router;
