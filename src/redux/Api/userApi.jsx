import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://hire-xpert-backend.vercel.app/api/users/userLogin",
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);
export const gooleLoginUser = createAsyncThunk(
  "auth/gooleLoginUser",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/googleLogin",
        { token }, // send the ID token to backend
        { withCredentials: true }
      );
      console.log(response, "response from google");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);
