import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/SignIn/Signin";
import JobDetails from "../pages/JObDetails/JobDetails";
import PrivetRoutes from "../routes/PrivetRoutes";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "jobs/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        element: <JobDetails></JobDetails>,
      },
      {
        path: "application/:id",
        element: (
          <PrivetRoutes>
            <JobApply></JobApply>
          </PrivetRoutes>
        ),
      },
      {
        path: 'myApplications',
        element: <PrivetRoutes>
          <MyApplications></MyApplications>
        </PrivetRoutes>
      },
      {
        path : 'addJob',
        element: <PrivetRoutes>
          <AddJob></AddJob>
        </PrivetRoutes>
      },
      {
        path:'myPostedJobs',
        element:<PrivetRoutes><MyPostedJobs></MyPostedJobs></PrivetRoutes>
      },
      {
         path: "applications/:job_id",
         element: <PrivetRoutes><ViewApplications></ViewApplications></PrivetRoutes>,
          loader: ({params}) => fetch(`http://localhost:3000/application/job/${params.job_id}`)
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "signIn",
        Component: Signin,
      },
    ],
  },
]);

export default router;
