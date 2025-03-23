import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonatePage from "./pages/Donatepage";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/Aboutus";  
import NotFound from "./pages/NotFound";
import PhilanthropicGiving from "./pages/Philanthropic"; 
import Gifting from "./pages/Gifting";  
import WhyWe from "./pages/WhyWe";
import GetInvolved from "./pages/GetInvolved";  
import WomenEmpowermentFund from "./pages/WomenEmpowermentFund";
import FarmerSupportFund from "./pages/FarmerSupportFund";
import UrbanForestry from "./pages/UrbanForestry";
import ReforestationPlantation from "./pages/ReforestationPlantation";
import OurFund from "./pages/OurFund";
import ProductPage from "./pages/productPage";
import OurTeam from "./pages/OurTeam";
import Solutions from "./pages/Solutions";
import Csr from "./pages/csr";
import Donateland from "./pages/Donateland";
import Ambassador from "./pages/Ambassador"

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about/mission" element={<About />} />
          <Route path="/about/team" element={<OurTeam />} />
          <Route path="/about/solutions" element={<Solutions />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/about/get-involved" element={<GetInvolved />} />
          {/* <Route path="/philanthropic" element={<PhilanthropicGiving />} /> */}
          <Route path="/gifting/gift-trees" element={<Gifting />} />
          <Route path="/why-we" element={<WhyWe />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/our-fund/farmer-support-fund" element={<FarmerSupportFund />} />
          <Route path="/our-fund/women-empowerment-fund" element={<WomenEmpowermentFund />} />
          <Route path="/our-fund/reforestation-plantation" element={<ReforestationPlantation />} />
          <Route path="/our-fund/urban-forestry" element={<UrbanForestry />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/csr" element={<Csr />} />
          <Route path="/ambassador" element={<Ambassador />} />
          <Route path="/donate-land" element={<Donateland />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;