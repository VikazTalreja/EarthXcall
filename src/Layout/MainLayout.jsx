import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";


function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Outlet /> 
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
