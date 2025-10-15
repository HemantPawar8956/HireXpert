import { createSlice } from "@reduxjs/toolkit";
import { gooleLoginUser, loginUser } from "../Api/userApi";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const initialState = {
  userData: null,
  userToken: null,
  userPreferences: null,
  isLoading: false,
  isRegisterModelOpen: false,
  isLoginModelOpen: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getLoginData(state, action) {
      state.userData =
        (localStorage.getItem("token") != undefined) | null
          ? jwtDecode(localStorage.getItem("token"))
          : null;
      state.userToken = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : null;
    },
    loginFailure(state, action) {
      state.isLoading = false;
    },
    logout(state) {
      localStorage.removeItem("token");
      Cookies.remove("userPreferences");
      state.userPreferences = null;
      state.userData = null;
      state.userToken = null;
      state.isLoading = false;
    },
    setUserPreferences(state, action) {
      state.userPreferences = action.payload;
    },
    removeUserPreferences(state, action) {
      state.userPreferences = null;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setModalOpen(state, action) {
      state.isLoginModelOpen = action.payload;
    },
    setRegisterModalOpen(state, action) {
      console.log(action.payload);
      state.isRegisterModelOpen = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setUserToken(state, action) {
      state.userToken = action.payload;
    },
    resetState(state) {
      state.userData = null;
      state.userToken = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
      state.isModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userData =
          action.payload.token && jwtDecode(action.payload.token);
        state.userToken = action.payload.token;
        state.isAuthenticated = true;
        state.isLoading = false;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(gooleLoginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(gooleLoginUser.fulfilled, (state, action) => {
        state.userData =
          action.payload.token && jwtDecode(action.payload.token);
        state.userToken = action.payload.token;
        state.isAuthenticated = true;
        state.isLoading = false;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(gooleLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      });
  },
});
export const {
  getLoginData,
  loginFailure,
  logout,
  setLoading,
  setUserPreferences,
  removeUserPreferences,
  setError,
  setSuccessMessage,
  setErrorMessage,
  setModalOpen,
  setUserData,
  setUserToken,
  setIsAuthenticated,
  resetState,
  setRegisterModalOpen,
  setLoginModelOpen,
} = userSlice.actions;
// export const selectUserData = (state) => state.user.userData;
// export const selectUserToken = (state) => state.user.userToken;
// export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
// export const selectIsLoading = (state) => state.user.isLoading;
// export const selectError = (state) => state.user.error;
// export const selectSuccessMessage = (state) => state.user.successMessage;
// export const selectErrorMessage = (state) => state.user.errorMessage;
// export const selectIsModalOpen = (state) => state.user.isLoginModelOpen;
export default userSlice.reducer;
