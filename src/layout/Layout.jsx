import React, { useContext, Suspense, useEffect, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
//internal import
import Main from "@/layout/Main";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { SidebarContext } from "@/context/SidebarContext";
import { AdminContext } from "@/context/AdminContext";
import ThemeSuspense from "@/components/theme/ThemeSuspense";
import { routes } from "@/routes";
import useGetCData from "@/hooks/useGetCData";
const Page404 = lazy(() => import("@/pages/404"));
const Layout = () => {
  const { isSidebarOpen, closeSidebar, navBar } = useContext(SidebarContext);
  const { state } = useContext(AdminContext);
  const { adminInfo } = state;
  let location = useLocation();
  const isOnline = navigator.onLine;
  const { accessList } = useGetCData(); // Get access list for route protection
  
  // console.log('routes',routes)
  useEffect(() => {
    closeSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  // Check if user is on home page or its sub-routes (public)
  const homePageRoutes = ["/","/Header", "/contact", "/brands", "/cart", "/garage", "/document", "/myprofile", "/myorder", "/mywishlist", "/company_gst", "/addresses"];
  const isHomePage = homePageRoutes.includes(location.pathname);
  
  return (
    <>
      {!isOnline && (
        <div className="flex justify-center bg-red-600 text-white">
          You are in offline mode!{" "}
        </div>
      )}
      <div
        className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
          isSidebarOpen && "overflow-hidden"
        }`}
      >
        {/* Only show sidebar for authenticated users */}
        {navBar && adminInfo?.email && <Sidebar />}
        <div className="flex flex-col flex-1 w-full">
          {/* Show different header based on authentication */}
          {isHomePage ? (
            <div className="w-full">
              <Suspense fallback={<ThemeSuspense />}>
                <Switch>
                  {routes.map((route, i) => {
                    // For home page and its sub-routes, show all routes without access control
                    if (homePageRoutes.includes(route.path)) {
                      return (
                        <Route
                          key={i}
                          exact={true}
                          path={`${route.path}`}
                          render={(props) => <route.component {...props} />}
                        />
                      );
                    }
                    return null;
                  })}
                  <Route component={Page404} />
                </Switch>
              </Suspense>
            </div>
          ) : (
            <>
              <Header />
              <Main>
                <Suspense fallback={<ThemeSuspense />}>
                  <Switch>
                    {routes.map((route, i) => {
                      // Check if user has access to this route
                      const routeKey = route.path?.split("?")[0].split("/")[1];
                      // Special case for home route (empty string)
                      const hasAccess = routeKey === "" || (routeKey && accessList && accessList.includes(routeKey));
                      
                      return route.component && hasAccess ? (
                        <Route
                          key={i}
                          exact={true}
                          path={`${route.path}`}
                          render={(props) => <route.component {...props} />}
                        />
                      ) : null;
                    })}
                    <Redirect exact from="/admin" to="/" />
                    <Route component={Page404} />
                  </Switch>
                </Suspense>
              </Main>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Layout;