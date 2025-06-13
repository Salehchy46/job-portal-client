import {
  createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/Jobs/JobDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        errorElement: <h1 className="text-center text-3xl min-h-dvh items-center">Route Not Found</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/jobs/:id',
                element: <JobDetails></JobDetails>,
                loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }
        ]
    },
]);

export default router;