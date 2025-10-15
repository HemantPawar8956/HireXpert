import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import store from "./redux/store/ReduxStore";
import HireXpertRoutes from "./routing/Routing";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#60b163ff",
              color: "#fff",
              fontSize: "0.8rem",
            },
          },
          error: {
            style: {
              background: "#f56156ff",
              color: "#fff",
              fontSize: "0.8rem",
            },
          },
        }}
      />

      <Provider store={store}>
        <RouterProvider router={HireXpertRoutes}></RouterProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
