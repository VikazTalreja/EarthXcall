import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/footer"

function MainLayout() {
  return (
    <>
      <Navbar  />
      <main className="pt-16">
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
