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
        mt: 4,
        px: 2,
      }}>
      <Paper
        elevation={2}
        data-aos="zoom-in"
        sx={{
          borderRadius: "16px",
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: 600,
          px: 2,
          py: 1, // ⬅️ Reduce vertical padding on outer container
        }}>
        <Grid gap={2}>
          <Grid>
            <OutlinedInput
              fullWidth
              placeholder="Job Title, keywords or company"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#555", fontSize: 16 }} />
                </InputAdornment>
              }
              sx={{
                fontSize: "16px",
                border: "none",
                borderBottom: "1px solid #ddd",
                borderRadius: 0,
                paddingY: "4px", // ⬅️ Reduce vertical padding on outer container
                "& input": {
                  padding: "4px 0", // ⬅️ Reduce internal input padding (top/bottom)
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
                  <LocationOnIcon sx={{ color: "#555", fontSize: 16 }} />
                </InputAdornment>
              }
              sx={{
                fontSize: "16px",
                borderRadius: 0,
                paddingY: "4px",
                "& input": {
                  padding: "4px 0", // reduce vertical input padding
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // remove the border entirely
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
