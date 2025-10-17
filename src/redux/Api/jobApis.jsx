//create all the jon api here
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Async thunk for fetching jobs

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://hire-xpert-backend.vercel.app/api/jobs/");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);
export const fetchJobsByReferences = createAsyncThunk(
  "jobs/fetchJobsByReferences",
  async (references, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://hire-xpert-backend.vercel.app/api/jobs/getJobsByReferences",
        { references }
      );
      console.log("response", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (jobId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://hire-xpert-backend.vercel.app/api/jobs/getJob/${jobId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);
export const applyForJob = createAsyncThunk(
  "jobs/applyForJob",
  async ({ jobId, applicationData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://hire-xpert-backend.vercel.app/api/jobs/apply/${jobId}`,
        applicationData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);
export const saveJob = createAsyncThunk(
  "jobs/saveJob",
  async (jobId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://hire-xpert-backend.vercel.app/api/jobs/save/${jobId}`,
        {},
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);
export const unsaveJob = createAsyncThunk(
  "jobs/unsaveJob",
  async (jobId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://hire-xpert-backend.vercel.app/api/jobs/unsave/${jobId}`,
        {},
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);
