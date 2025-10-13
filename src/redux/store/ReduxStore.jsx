import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import jobSlices from "../slices/jobSlice";

const store = configureStore({
  reducer: {
    userSlice: userSlice,
    jobSlice: jobSlices,
  },
});
export default store;
