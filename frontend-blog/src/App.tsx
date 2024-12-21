import { FC, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import "./App.css";

import publicRoutes from "./routers/router";
import NotFound from "./pages/not-found/NotFound";
import SubjectID from "./pages/subjects/subject-id/SubjectID";


const App: FC = () => {
    const [router, setRouter] = useState<any>(null);

    const fetchDynamicRoutes = async () => {
        try {
            const response = await axios.get("/subjectsRoutes.json"); // Replace with your API endpoint
            const dynamicRoutes = response.data.map((route: { route: string; id: string }) => ({
                path: route.route,
                element: <SubjectID id={route.id} />
            }));

            const combinedRoutes = [
                ...publicRoutes,
                ...dynamicRoutes,
                { path: "*", element: <NotFound /> }
            ];

            setRouter(createBrowserRouter(combinedRoutes));
        } catch (error) {
            console.error("Failed to fetch dynamic routes:", error);
            setRouter(
                createBrowserRouter([
                    ...publicRoutes,
                    { path: "*", element: <NotFound /> }
                ])
            );
        }
    };

    useEffect(() => {
        fetchDynamicRoutes();

        // Polling every 30 seconds for dynamic route updates
        const interval = setInterval(() => {
            fetchDynamicRoutes();
        }, 30000);

        return () => clearInterval(interval); // Cleanup polling interval
    }, []);



    if (!router) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <main className="min-h-screen w-screen mx-auto font-primary">
                <RouterProvider router={router} />
            </main>
        </>
    );
};

export default App;
