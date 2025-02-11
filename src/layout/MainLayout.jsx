import Footer from "./Footer";
import MainHeader from "./MainHeader";

function MainLayout({ children, isLogin }) {
  return (
    <>
      <MainHeader isLogin={isLogin} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
