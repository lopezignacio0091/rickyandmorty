import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Home from "../pages/home/Home";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    // ...
  ]);
  return routes;
};
const RoutesApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default RoutesApp;
