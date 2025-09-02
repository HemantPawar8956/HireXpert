const initialState = {
  userData: null,
  userToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  successMessage: null,
  errorMessage: null,
  isRegisterModelOpen: false,
  isLoginModelOpen: false,
};
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //
    loginSuccess(state, action) {
      state.userData = action.payload.userData;
      state.userToken = action.payload.userToken;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
      state.successMessage = "Login successful!";
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload.error;
      state.successMessage = null;
      state.isAuthenticated = false;
    },
    logout(state) {
      state.userData = null;
      state.userToken = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
      state.successMessage = "Logout successful!";
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    setSuccessMessage(state, action) {
      state.successMessage = action.payload;
      state.isLoading = false;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
    setModalOpen(state, action) {
      console.log(action);
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
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    resetState(state) {
      state.userData = null;
      state.userToken = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
      state.successMessage = null;
      state.errorMessage = null;
      state.isModalOpen = false;
    },
  },
});
export const {
  loginSuccess,
  loginFailure,
  logout,
  setLoading,
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
export const selectUserData = (state) => state.user.userData;
export const selectUserToken = (state) => state.user.userToken;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectIsLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;
export const selectSuccessMessage = (state) => state.user.successMessage;
export const selectErrorMessage = (state) => state.user.errorMessage;
export const selectIsModalOpen = (state) => state.user.isLoginModelOpen;
export default userSlice.reducer;
