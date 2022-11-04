import React from "react";
import DashboardDefaultContent from "./dashboard/dashboard-default-content";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Inbox from "./dashboard/inbox";
import SettingsAndPrivacy from "./dashboard/settings-and-privacy";
import { Route, Routes } from "react-router";
import { useRoutes } from "react-router-dom";
import Details from "./pages/hierarchy/details";
import List from "./pages/hierarchy/list";
import larry from './assets/images/team/larry_kohler.png'
import tim from './assets/images/team/tim_creviston.png'
import wayne from './assets/images/team/wayne_porter.png'
import dick from './assets/images/team/dick_foreman.png'
import dan from './assets/images/team/dan_cruz.png'
import steve from './assets/images/team/steve_kohler.png'
/*Routes is used to be Switch*/

const teamItems = [
  {
    id: 'larry',
    name: 'larry kohler',
    title: 'Founder & President',
    img: larry,
    details: 'Mr. Kohler is the founder and President of Guardian One LLC which was created for the purpose of providing the latest developments of security and safety technologies for use by schools, churches, hospitals and businesses.'
  },
  {
    id: 'tim',
    name: 'Tim Creviston',
    title: 'Chief Operating Officer',
    img: tim,
    details: 'Tim received a B.S. degree in Electrical Engineering from North Dakota State University, and began a 35 year career in aerospace engineering working with The Boeing Company and Honeywell Aerospace.'
  },
  {
    id: 'steve',
    name: 'steve kohler',
    title: 'President of Ridge Global',
    img: steve,
    details: 'Mr. Kohler is president of Ridge Global and has served in the past in a number of roles for its affiliates including as Chief Innovation Officer for Ridge Global and Risk Cooperative and prior to that as Chief Executive Officer for Ridge Global Solutions and principal adviser to the strategic consulting practice.'
  },
  {
    id: 'wayne',
    name: 'Dr. Wayne Porter',
    title: 'Headmaster Tempe Prep Academy',
    img: wayne,
    details: 'Dr. Wayne Porter Headmaster Tempe Prep Academy Wayne is the Headmaster and Superintendent of one of the original charter schools in Arizona, Tempe Preparatory Academy. He came to Arizona to work in a successful homebuilding company where he ended up running the sales and marketing divisions. Wayne later returned to school to pursue his love for education and earned both a masters and Ph.D. degree from Arizona State University in mathematics education.'
  },
  {
    id: 'dick',
    name: 'Dick Foreman',
    title: 'President of ABEC',
    img: dick,
    details: 'President of Arizona Business and Education Coalition. Dick Foreman brings to ABEC unprecedented knowledge, expertise and credibility that he has built during his much accomplished 37-year career in public affairs and in developing public policy. He also brings to ABEC a wide array of experiences while serving on business, education, and community governing and advisory boards throughout his career. His passion, however, is and always has been public education.'
  },

  {
    id: 'dan',
    name: 'dan de la cruz',
    title: 'President of KLS',
    img: dan,
    details: 'With 30 years in experience in protection services, Dan is a Certified Contractor for Advantor Systems with DOD Security. He also is a Level 2 and Level 3 Master Trainer in Compliant Technologies.'
  },

]
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
