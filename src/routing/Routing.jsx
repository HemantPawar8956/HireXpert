import { createBrowserRouter } from "react-router-dom";
import Layout from "./../Layout";
import LandingPage from "../pages/LandingPage";
import FindDreamJob from "../components/FindDreamJob";
import RecruiterRegistration from "./../components/recruiter/RecruiterRegisteration";
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
        element: <RecruiterRegistration />,
      },
    ],
  },
]);
export default HireXpertRoutes;
