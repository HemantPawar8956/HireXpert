import React, { useEffect } from "react";
import { Box, Grid, OutlinedInput, InputAdornment, Paper } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const JobSearchBox = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 3,
        px: 1.5,
      }}>
      <Paper
        elevation={2}
        data-aos="zoom-in"
        sx={{
          borderRadius: "12px",
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: 550,
          px: 1.5,
          py: 0.6, // slightly reduced vertical padding
        }}>
        <Grid gap={1.5}>
          <Grid>
            <OutlinedInput
              fullWidth
              placeholder="Job Title, keywords or company"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#555", fontSize: 14 }} />
                </InputAdornment>
              }
              sx={{
                fontSize: "14px",
                border: "none",
                borderBottom: "1px solid #ddd",
                borderRadius: 0,
                paddingY: "2px",
                "& input": {
                  padding: "3px 0",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <OutlinedInput
              fullWidth
              placeholder="Location"
              startAdornment={
                <InputAdornment position="start">
                  <LocationOnIcon sx={{ color: "#555", fontSize: 14 }} />
                </InputAdornment>
              }
              sx={{
                fontSize: "14px",
                borderRadius: 0,
                paddingY: "2px",
                "& input": {
                  padding: "3px 0",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default JobSearchBox;
