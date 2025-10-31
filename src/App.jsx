import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';

import Header from './component/Header';
import Footer from "./component/Footer";

import { Navbar } from './component/Navbar';
import Cart from './component/Cart';
import { BoodmoUi } from './component/BoodmoUi';
import CurrentOffers from './component/CurrentOffers';
import SearchSection from "./component/SearchSection";
import BrandTrustAndCarMakers from './component/BrandTrustAndCarMakers';
import { Garage } from './component/Garage';
import { MyProfile } from './component/MyProfile';
import { MyOrder } from './component/MyOrder';
import { MyWishlist } from './component/MyWishlist';
import { Document } from './component/Document';
import { Company_GST } from './component/Company_GST';
import { Addresses } from "./component/Addresses";
import Contact from "./component/Contact";
import Article_review from "./component/Article_Review";
import Login from "./component/Login";
import ForgotPassword from "./component/Forgot_Password";
import Signup from "./component/Signup";
import VendorPage from "./component/VendorPage";
import SearchByCategory from "./component/SearchByCategory";
import WhyChooseAftermarket from "./component/WhyChooseAftermarket";
import PartSearchResults from "./component/PartSearchResults";
import VehicleSearchResults from "./component/VehicleSearchResults";
import OEMCatalogue from "./component/catalogue/OEMCatalogue";
import SpareloPage from "./component/SpareloPage";
import CatalogPage from "./component/catalogue/CataloguePage";
import VehicleMaker from "./component/Vehicles/VehicleMaker";
import MaintenanceServiceParts from "./component/catalogue/MaintenanceServiceParts";
import Filters from "./component/catalogue/Filters";
import Windscreen_Cleaning_System from "./component/catalogue/Windscreen_Cleaning_System";
import Car_Accessories from "./component/catalogue/Car_Accessories";
import Lighting from "./component/catalogue/Lighting";
import { Control_Cables } from "./component/catalogue/Control_Cables";
import Break_System from "./component/catalogue/Break_System";
import { Bearing } from "./component/catalogue/Bearing";
import { Clutch_System } from "./component/catalogue/Clutch_System";
import { Electric_Components } from "./component/catalogue/Electric_Components";
import Engine from "./component/catalogue/Engine";
import Engine_Cooling_System from "./component/catalogue/Engine_Cooling_System";
import Exhaust_System from "./component/catalogue/Exhaust_System";
import AirConditioning from "./component/catalogue/AirConditioning";
import Fuelsupply_System from "./component/catalogue/Fuelsupply_System";
import Gasket_SealingRings from "./component/catalogue/Gasket_SealingRings";
import Ignition_Glowplug from "./component/catalogue/Ignition_Glowplug";
import Interior_Comfort from "./component/catalogue/Interior_Comfort";
import Body from "./component/catalogue/Body";
import Oil_Fluids from "./component/catalogue/Oil_Fluids";
import Pipes_Hoses from "./component/catalogue/Pipes_Hoses";
import RepairKits from "./component/catalogue/RepairKits";
import Sensors_ControlUnits from "./component/catalogue/Sensors_ControlUnits";
import Steering from "./component/catalogue/Steering";
import Suspention_Arms from "./component/catalogue/Suspention_Arms";
import TowbarParts from "./component/catalogue/TowbarParts";
import  Transmission  from "./component/catalogue/Transmission";
import  Trims  from "./component/catalogue/Trims";
import  Tyres_Alloys  from "./component/catalogue/Tyres_Alloys";
import Universal  from "./component/catalogue/Universal";
import  Wheels  from "./component/catalogue/Wheels";
import  Belts_Chains_Rollers  from "./component/catalogue/Belts_Chains_Rollers";
import { Brands } from "./component/brand/Brands";
import VehiclePage from "./component/Vehicles/VehiclePage";
import { Maruti } from "./component/Vehicles/Maruti";
import { Hyundai } from "./component/Vehicles/Hyundai";
import { Mahindra } from "./component/Vehicles/Mahindra";
import { Tata } from "./component/Vehicles/Tata";
import { Chevrolet } from "./component/Vehicles/Chevrolet";
import { Honda } from "./component/Vehicles/Honda";
import { Skoda } from "./component/Vehicles/Skoda";
import { Vw } from "./component/Vehicles/Vw";
import { Toyota } from "./component/Vehicles/Toyota";
import { Nissan } from "./component/Vehicles/Nissan";
import { Renault } from "./component/Vehicles/Renault";
import { Ford } from "./component/Vehicles/Ford";
import { Fiat } from "./component/Vehicles/Fiat";
import { Kia } from "./component/Vehicles/Kia";
import { AshokLayland } from "./component/Vehicles/AshokLayland";
import { Audi } from "./component/Vehicles/Audi";





// Component to conditionally render Header/Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/signup", "/forgot-password"].includes(location.pathname);
  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>

                <BoodmoUi />
                <CurrentOffers />
                <SearchSection />
                <SearchByCategory />
                <WhyChooseAftermarket />
                <BrandTrustAndCarMakers />
                <Article_review
                  items={[{ label: "Articles and Reviews", href: "/pages/article/" }]}
                />
                <SpareloPage />
              </>
            }
          />

          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />

          {/* Other Pages */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/vendor" element={<VendorPage />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category" element={<SearchByCategory />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/document" element={<Document />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/mywishlist" element={<MyWishlist />} />
          <Route path="/company_gst" element={<Company_GST />} />
          <Route path="/sparelopage" element={<SpareloPage />} />
          <Route path="/addresses" element={<Addresses />} />

          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/maintenance_service_parts/" element={<MaintenanceServiceParts />} />
          <Route path="/catalog/filters/" element={<Filters />} />
          <Route path="/catalog/windscreen_cleaning_system/" element={<Windscreen_Cleaning_System />} />
          <Route path="/catalog/car_accessories/" element={<Car_Accessories />} />
          <Route path="/catalog/lighting/" element={<Lighting />} />
          <Route path="/catalog/control_cables/" element={<Control_Cables />} />
          <Route path="/catalog/brakes/" element={<Break_System />} />
          <Route path="/catalog/bearings/" element={<Bearing />} />
          <Route path="/catalog/clutch/" element={<Clutch_System />} />
          <Route path="/catalog/electric_components/" element={<Electric_Components />} />
          <Route path="/catalog/engine/" element={<Engine />} />
          <Route path="/catalog/cooling_system/" element={<Engine_Cooling_System />} />
          <Route path="/catalog/exhaust/" element={<Exhaust_System />} />
          <Route path="/catalog/air_conditioning/" element={<AirConditioning />} />
          <Route path="/catalog/fuelsystem/" element={<Fuelsupply_System />} />
          <Route path="/catalog/Gasket_SealingRings/" element={<Gasket_SealingRings />} />
          <Route path="/catalog/ignition_glowplug/" element={<Ignition_Glowplug />} />
          <Route path="/catalog/interior_comfort/" element={<Interior_Comfort />} />
          <Route path="/catalog/body/" element={<Body />} />
          <Route path="/catalog/oilsfluids/" element={<Oil_Fluids />} />
          <Route path="/catalog/pipes_hoses/" element={<Pipes_Hoses />} />
          <Route path="/catalog/repair_kits/" element={<RepairKits />} />
          <Route path="/catalog/sensors_control_units/" element={<Sensors_ControlUnits />} />
          <Route path="/catalog/steering/" element={<Steering />} />
          <Route path="/catalog/suspension/" element={<Suspention_Arms />} />
          <Route path="/catalog/towbar/" element={<TowbarParts />} />
          <Route path="/catalog/transmission/" element={<Transmission />} />
          <Route path="/catalog/trims/" element={<Trims />} />
          <Route path="/catalog/tyres_and_alloys/" element={<Tyres_Alloys />} />
          <Route path="/catalog/universal/" element={<Universal />} />
          <Route path="/catalog/wheels/" element={<Wheels />} />
          <Route path="/catalog/drive_belts/" element={<Belts_Chains_Rollers />} />


             <Route path="/vehicles/vehiclepage" element={<VehiclePage />} />
             <Route path="/vehicles/maruti" element={<Maruti/>} />
             <Route path="/vehicles/hyundai" element={<Hyundai/>} />
             <Route path="/vehicles/mahindra" element={<Mahindra/>} />
             <Route path="/vehicles/tata" element={<Tata/>} />
             <Route path="/vehicles/chevrolet" element={<Chevrolet/>} />
             <Route path="/vehicles/honda" element={<Honda/>} />
             <Route path="/vehicles/skoda" element={<Skoda/>} />
             <Route path="/vehicles/vw" element={<Vw/>} />
              <Route path="/vehicles/toyota" element={<Toyota/>} />
              <Route path="/vehicles/nissan" element={<Nissan/>} />
              <Route path="/vehicles/renault" element={<Renault/>} />
              <Route path="/vehicles/ford" element={<Ford/>} />
              <Route path="/vehicles/fiat" element={<Fiat/>} />
              <Route path="/vehicles/kia" element={<Kia/>} />
              <Route path="/vehicles/ashok-layland" element={<AshokLayland/>} />
              <Route path="/vehicles/audi" element={<Audi/>} />

          {/* Redirect landing after Oriparts back_url_pn */}
          <Route path="/search/:pn" element={<PartSearchResults />} />

          {/* Vehicle-based search landing */}
          <Route path="/vehicle-search" element={<VehicleSearchResults />} />
          <Route path="/oem-catalogue" element={<OEMCatalogue />} />
          <Route path="/vehicles" element={<VehicleMaker />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
