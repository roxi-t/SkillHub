import Footer from "./Footer";
import MainHeader from "./MainHeader";

function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
