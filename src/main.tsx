import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./index.css";

import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider value={{ unstyled: true }}>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>
);
