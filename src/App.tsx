import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "pages/home/Home";
const MyApp = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
};
export default MyApp;
