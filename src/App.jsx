import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import store from "./redux/store/ReduxStore";
import HireXpertRoutes from "./routing/Routing";

const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Provider store={store}>
        <RouterProvider router={HireXpertRoutes}></RouterProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
