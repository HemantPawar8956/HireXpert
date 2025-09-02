import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import womensImage from "../../assets/GetHire.jpg";
import { Typography, Button, Grid, Box } from "@mui/material";
import Navbar from "./NavBar";
import JobSearchBox from "./JobSearchBox";
import useMobileView from "../../utilities/customHooks/useMobileView";
import JobFeed from "./JobFeed";

const FindDreamJob = () => {
  const isMobile = useMobileView();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const jobs = [
    "Full Stack Developer",
    "Technical Lead",
    "HR Manager",
    "Content Writer",
    "Business Analyst",
  ];

  return (
    <>
      <Navbar />

      <Box
        sx={{
          background: "linear-gradient(to bottom, #eaf7f1, #f5f7fa)",
          py: 3,
          px: 2,
        }}>
        <Box textAlign="center" mb={4} data-aos="fade-down">
          {isMobile ? (
            <Typography variant="h4" fontWeight="bold">
              Find your dream job
            </Typography>
          ) : (
            <Typography variant="h3" fontWeight="bold">
              Find your dream job
            </Typography>
          )}

          <Typography variant="subtitle1" mt={2} fontSize={"1rem"}>
            ✅ One application, hundreds of companies
          </Typography>
          <Typography variant="subtitle1" fontSize={"1.2rem"}>
            ✅ Get discovered directly by recruiters even
          </Typography>
        </Box>
        {/* Job Search Box */}
        <JobSearchBox />

        {/* Resume Upload CTA */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mt={6}
          spacing={0}
          sx={{
            backgroundColor: "#5C45E3",
            background: "#007ee5",

            borderRadius: "16px",
            py: 2,
            px: 3,
            maxWidth: "1000px",
            mx: "auto",
          }}
          data-aos="fade-up">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" color="white" fontWeight="bold" mb={4}>
              Get noticed instantly
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                textTransform: "none",
                fontWeight: 500,
                borderRadius: "8px",
                fontSize: "1rem",
                px: 3,
                py: 1,
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}>
              Upload Resume
            </Button>
          </Grid>

          <Grid item xs={12} md={6} textAlign="center" data-aos="fade-left">
            <Box
              component="img"
              src={womensImage} // <- place your image in public folder as `public/woman.png`
              alt="Woman"
              sx={{
                width: "100%",
                maxWidth: "380px",
                borderRadius: "0 16px 16px 0",
                mixBlendMode: "multiply",
                mt: { xs: 3, md: 0 },
              }}
            />
          </Grid>
        </Grid>
        {/* <JobCardsSection /> */}
        <JobFeed />
      </Box>
    </>
  );
};

export default FindDreamJob;
