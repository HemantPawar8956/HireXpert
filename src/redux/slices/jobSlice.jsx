import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  jobs: [],
  jobsByReferences: null,
  isLoading: false,
  error: null,
  selectedJob: null,
  filters: {
    location: "",
    jobType: "",
    designation: "",
    companies: "",
    experienceLevel: "",
    freshness: "",
    workMode: "",
    salaryRange: [0, 100000],
    searchQuery: "",
  },
};

const jobSlice = createSlice({
  name: "job",
  initialState: intialState,
  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload;
    },
    setJobsByReferences(state, action) {
      state.jobs = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSelectedJob(state, action) {
      state.selectedJob = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters(state) {
      state.filters = intialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("jobs/fetchJobs/pending", (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase("jobs/fetchJobs/fulfilled", (state, action) => {
      state.isLoading = false;
      state.jobs = action.payload.jobs;
      console.log("jobs", action.payload.jobs);
    });
    builder.addCase("jobs/fetchJobs/rejected", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase("jobs/fetchJobsByReferences/pending", (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase("jobs/fetchJobsByReferences/fulfilled", (state, action) => {
      state.isLoading = false;
      state.jobsByReferences = action.payload.jobs;
      console.log("jobsByReferences", action.payload.jobs);
    });
    builder.addCase("jobs/fetchJobsByReferences/rejected", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase("jobs/fetchJobById/pending", (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase("jobs/fetchJobById/fulfilled", (state, action) => {
      state.isLoading = false;
      state.selectedJob = action.payload;
    });
    builder.addCase("jobs/fetchJobById/rejected", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase("jobs/applyForJob/pending", (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase("jobs/applyForJob/fulfilled", (state, action) => {
      state.isLoading = false;
    });
    builder.addCase("jobs/applyForJob/rejected", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase("jobs/saveJob/pending", (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase("jobs/saveJob/fulfilled", (state, action) => {
      state.isLoading = false;
    });
    builder.addCase("jobs/saveJob/rejected", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export const {
  setJobs,
  setJobsByReferences,
  setLoading,
  setError,
  setSelectedJob,
  setFilters,
  resetFilters,
} = jobSlice.actions;
export default jobSlice.reducer;
