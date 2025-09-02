import { createBrowserRouter } from "react-router-dom";
import Layout from "./../Layout";
import LandingPage from "./../candidate/pages/LandingPage";
import FindDreamJob from "./../candidate/components/FindDreamJob";
import LoginPage from "./../candidate/pages/LoginPage";
import RecruiterRegisteration from "../recruiter/RecruiterRegisteration";

const HireXpertRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Error loading page</div>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/findDreamJOb",
        element: <FindDreamJob />,
      },
      {
        path: "/recruiters/register",
        element: <RecruiterRegisteration />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
export default HireXpertRoutes;
