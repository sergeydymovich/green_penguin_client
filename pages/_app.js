import "../styles/globals.css";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "../redux/index-reducer";
import Layout from "../components/Layout/Layout";

const store = configureStore({
  reducer: rootReducer,
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
