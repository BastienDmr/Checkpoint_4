import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";

import Home from "./pages/Home/Home";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: async () => {
          try {
            const [skillsRes, profilRes] = await Promise.all([
              connexion.get("/api/skill"),
              connexion.get(`/api/profil/1`),
            ]);
            return { skills: skillsRes.data, profil: profilRes.data };
          } catch (error) {
            throw new Error(error);
          }
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
