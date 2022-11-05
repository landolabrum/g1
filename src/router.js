import React from "react";
import DashboardDefaultContent from "./dashboard/dashboard-default-content";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Inbox from "./dashboard/inbox";
import SettingsAndPrivacy from "./dashboard/settings-and-privacy";
import { Route, Routes } from "react-router";
import Details from "./components/hierarchy/details";
import List from "./components/hierarchy/list";
import teamItems from "./models/team";
import productItems from "./models/products";
/*Routes is used to be Switch*/

const Router = () => {
  /* nesting routes*/
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/list" element={<List />} /> */}
      {/* <Route path="/details/:id" element={<Details />} /> */}
      <Route path="/about" element={
      <List 
        title="our team"
        items = {teamItems}
      />
      } />
      <Route path="/products" element={
      <List 
        variant="product"
        title="products & services"
        items = {productItems}
      />
      } />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/" element={<DashboardDefaultContent />} />
        <Route path="/dashboard/inbox" element={<Inbox />} />
        <Route
          path="/dashboard/settings-and-privacy"
          element={<SettingsAndPrivacy />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  /* object-based routes
  return useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "games", element: <Games /> },
    { path: "game-details/:id", element: <GameDetails /> },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        { path: "/", element: <DashboardDefaultContent /> },
        { path: "inbox", element: <Inbox /> },
        { path: "settings-and-privacy", element: <SettingsAndPrivacy /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
*/
};
export default Router;
