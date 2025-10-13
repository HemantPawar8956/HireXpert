import { createBrowserRouter } from "react-router-dom";
import Layout from "./../Layout";
import LandingPage from "./../candidate/pages/LandingPage";
import FindDreamJob from "./../candidate/components/FindDreamJob";
import RecruiterRegisteration from "../recruiter/RecruiterRegisteration";
import CandidateLogin from "./../candidate/pages/CandidateLoginPage";
import PageNotFound from "../candidate/components/PageNotFound";
import CandidatesPrivateRoute from "../auth/CandidatesPrivateRoute";

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
        path: "/findDreamJob",
        element: <FindDreamJob />,
      },
      {
        path: "/candidates/CandidatesDashBoard",
        element: (
          <CandidatesPrivateRoute>
            <FindDreamJob />
          </CandidatesPrivateRoute>
        ),
      },
      {
        path: "/recruiters/register",
        element: <RecruiterRegisteration />,
      },
      {
        path: "/login",
        element: <CandidateLogin />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
export default HireXpertRoutes;
