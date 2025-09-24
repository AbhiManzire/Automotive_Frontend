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
import { Brands } from "./component/Brands";
import Contact from "./component/Contact";
import Article_review from "./component/Article_Review";
import Login from "./component/Login";
import ForgotPassword from "./component/Forgot_Password";
import Signup from "./component/Signup";

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
                <BrandTrustAndCarMakers />
                <Article_review
                  items={[{ label: "Articles and Reviews", href: "/pages/article/" }]}
                />
              </>
            }
          />

          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />

          {/* Other Pages */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/document" element={<Document />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/mywishlist" element={<MyWishlist />} />
          <Route path="/company_gst" element={<Company_GST />} />
          <Route path="/addresses" element={<Addresses />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
