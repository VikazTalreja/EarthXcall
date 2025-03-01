import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/Aboutus";
import NotFound from "./pages/NotFound";
import Home2 from "./pages/Home2";
import PhilanthropicGiving from "./pages/Philantrophic";
// import Home from "./pages/Home3";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route index element={<Home2 />} /> */}
          <Route index element=<Home /> />
          <Route path="/get-involved/philantrophic-giving" element={<PhilanthropicGiving />}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
