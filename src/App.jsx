import React, { lazy } from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "@/components/AccessibleNavigationAnnouncer";
import PrivateRoute from "@/components/login/PrivateRoute";
import Contact from "./components/home/Contact";
import { Brands } from "./components/home/Brands";
import Cart from "./components/home/Cart";
import { Garage } from "./components/home/Garage";
import { MyProfile } from "./components/home/MyProfile";
import { Navbar } from "./components/home/Navbar";
import { MyOrder } from "./components/home/MyOrder";
import { MyWishlist } from "./components/home/MyWishlist";
import { Company_GST } from "./components/home/Company_GST";
import { Addresses } from "./components/home/Addresses";
import Dashboard from "./pages/Dashboard";
import Home from "./components/home/Home";
import { Document } from "./components/home/Document";
import Footer from "./components/home/Footer";
const Layout = lazy(() => import("@/layout/Layout"));
const Login = lazy(() => import("@/pages/Login"));
const SignUp = lazy(() => import("@/pages/SignUp"));
const ForgetPassword = lazy(() => import("@/pages/ForgotPassword"));
const ResetPassword = lazy(() => import("@/pages/ResetPassword"));
const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
   
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgot-password" component={ForgetPassword} />
          <Route path="/reset-password/:token" component={ResetPassword} />

          {/* Public Home Page and its sub-routes */}
          
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/brands" component={Brands} />
          <Route path="/cart" component={Cart} />
          <Route path="/garage" component={Garage} />
          <Route path="/document" component={Document} />
          <Route path="/myprofile" component={MyProfile} />
          <Route path="/myorder" component={MyOrder} />
          <Route path="/mywishlist" component={MyWishlist} />
          <Route path="/company_gst" component={Company_GST} />
          <Route path="/addresses" component={Addresses} />

          <PrivateRoute>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/admin" component={Layout} />
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;