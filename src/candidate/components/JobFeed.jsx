import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Chip,
  Stack,
  Button,
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBookmark,
  FaMapMarkerAlt,
  FaUserTie,
  FaRupeeSign,
  FaClock,
} from "react-icons/fa";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, fetchJobsByReferences } from "../../redux/Api/jobApis";

// const jobData = Array(8).fill({
//   title: "Design Head–UI/UX",
//   company: "Hire XPERT",
//   rating: "3.5",
//   location: "Gurgaon",
//   experience: "4 – 6 Years",
//   salary: "5–6 Lacs PA",
//   posted: "4 days ago",
//   logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
// });

const JobFeed = () => {
  const dispatch = useDispatch();
  const jobSlice = useSelector((state) => state?.jobSlice);
  const jobPreferences =
    useSelector((state) => state?.userSlice?.userPreferences?.searchHistory) ||
    null;

  useEffect(() => {
    jobPreferences
      ? dispatch(fetchJobsByReferences(jobPreferences))
      : dispatch(fetchJobs());
    AOS.init({ duration: 1000 });
  }, [jobPreferences]);

  return (
    <Box
      sx={{
        px: 5,
        py: 5,
        backgroundColor: "tranparent",
      }}>
      {/* Heading & Filters */}

      <Box
        display="flex"
        alignItems="center"
        justifyContent={"space-between"}
        gap={2}
        mb={2}
        sx={{
          flexDirection: {
            xs: "column", // mobile (xs, sm)
            md: "row", // desktop (md and up)
          },
          px: {
            xs: 2, // Mobile
            md: 12, // Desktop
          },
          py: {
            xs: 2, // Mobile
            md: 1, // Desktop
          },
        }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          My Job Feed
        </Typography>
        <Stack direction={{ xs: "row", md: "row" }} spacing={1}>
          <FormControl size="small" sx={{ minWidth: 80 }}>
            <Select defaultValue="" displayEmpty sx={{ fontSize: "0.7rem" }}>
              <MenuItem value="">Date Posted</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 100 }}>
            <Select defaultValue="" displayEmpty sx={{ fontSize: "0.7rem" }}>
              <MenuItem value="" disabled sx={{ fontSize: "0.7rem" }}>
                Experience
              </MenuItem>
              <MenuItem value="0-1" sx={{ fontSize: "0.7rem" }}>
                0 – 1 Year
              </MenuItem>
              <MenuItem value="1-3" sx={{ fontSize: "0.7rem" }}>
                1 – 3 Years
              </MenuItem>
              <MenuItem value="3-5" sx={{ fontSize: "0.7rem" }}>
                3 – 5 Years
              </MenuItem>
              <MenuItem value="5+" sx={{ fontSize: "0.7rem" }}>
                5+ Years
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 100 }}>
            <Select defaultValue="" displayEmpty sx={{ fontSize: "0.7rem" }}>
              <MenuItem value="">Work Type</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>

      {/* Job Cards */}
      <Grid container spacing={3} justifyContent="center">
        {(jobSlice?.jobsByReferences || jobSlice?.jobs)?.map((job, index) => (
          <Grid
            item
            key={index}
            data-aos="fade-up"
            display="flex"
            sx={{
              justifyContent: {
                xs: "center", // Mobile
                md: "space-between !important",
                sm: "center", // Desktop
              },
              // padding: {
              //   xs: 0, // Mobile
              //   md: 2, // Desktop
              // },
            }}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>

      {/* Bottom Feedback Banner */}
      {/* <Paper
        elevation={2}
        sx={{
          background: "linear-gradient(90deg, #5273e0, #69c0ff)",
          borderRadius: 4,
          mt: 6,
          p: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
        }}
        data-aos="zoom-in">
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Are these jobs relevant for you?
          </Typography>
          <Stack direction="row" spacing={2} mt={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#333",
                textTransform: "none",
              }}>
              Yes
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}>
              No
            </Button>
          </Stack>
        </Box>
        <Box mt={{ xs: 3, md: 0 }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5529/5529741.png"
            alt="feedback"
            width="150"
            style={{ borderRadius: 8 }}
          />
        </Box>
      </Paper> */}
    </Box>
  );
};

export default JobFeed;
