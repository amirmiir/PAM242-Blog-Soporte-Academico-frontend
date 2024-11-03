import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <h1>Landing</h1>
            },
            {
                path: "/explore",
                element: <h1>Explore</h1>
            },
            {
                path: "/about",
                element: <h1>About us</h1>
            },
            {
                path: "/faq",
                element: <h1>FAQ</h1>
            },
            {
                path: "/contact",
                element: <h1>Contact us</h1>
            },
            {
                path: "/login",
                element: <h1>Login</h1>
            },
            {
                path: "/register",
                element: <h1>Register</h1>
            },
            {
                path: "/recover-password",
                element: <h1>Recover Password</h1>
            },
            {
                path: "/subjects",
                element: <h1>subjects</h1>
            },
            {
                path: "/questions",
                element: <h1>Register</h1>
            },
            {
                path: "/questions-upload",
                element: <h1>Recover Password</h1>
            },
            {
                path: "*",
                element: <h1>Error Page</h1>
            },
        ]
    }
];

const router = createBrowserRouter(routes);

export default router;