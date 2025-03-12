import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../src/layout/MainLayout";
import Home from "../src/pages/Home";
import About from "../src/pages/Aboutus";
import NotFound from "../src/pages/NotFound";
import Home2 from "../src/pages/Home2";
import PhilanthropicGiving from "../src/pages/Philantrophic";
import Gifitng from "../src/pages/Gifitng";
import WhyTrees from "../src/pages/WhyTrees";
import DonatePage from "../src/pages/Donatepage";
import ProductsPage from "../src/pages/productPage";
import AmbassadorsPage from "../src/pages/Ambassador";
// import Home from "./pages/Home3";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route index element={<Home2 />} /> */}
          <Route index element={<Home />} />
          <Route path="/get-involved/philantrophic-giving" element={<PhilanthropicGiving />}/>
          <Route path="/get-involved/ambassador" element={<AmbassadorsPage />}/>
          <Route path="/about" element={<About />} />
          <Route path="/gifting" element={<Gifitng />}/>
          <Route path="/why-we" element={<WhyTrees />}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/donate" element={<DonatePage />}/>
          <Route path="/shop" element={<ProductsPage />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
