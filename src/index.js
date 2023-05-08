import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { app } from "./firebase";
import DataProvider from "./context/DataProvider";

// eslint-disable-next-line
const justToUseApp = app;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <DataProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DataProvider>
    </BrowserRouter>
  
);


