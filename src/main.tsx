import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TodosProvideer } from "./store/todo.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodosProvideer>
      <RouterProvider router={router} />
    </TodosProvideer>

    {/* <App /> */}
  </React.StrictMode>
);
