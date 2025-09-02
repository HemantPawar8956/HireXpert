import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Button } from "@mui/material";
import logo from "../../assets/HireXpert Logo.png"; // Place logo here
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "var(--background-color)", // Use CSS variable here
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        textAlign: "center",
      }}>
      <Box data-aos="fade-down" sx={{ mb: 3 }}>
        <img
          src={logo}
          alt="HireXpert Logo"
          style={{ height: "210px", mixBlendMode: "multiply" }}
        />
      </Box>

      <Typography
        variant="h4"
        data-aos="fade-up"
        sx={{ fontWeight: "bold", color: "#5C45E3", mb: 2 }}>
        AI-Driven Hiring, Human-Centric Results
      </Typography>

      <Typography
        variant="subtitle1"
        data-aos="fade-up"
        data-aos-delay="200"
        sx={{ mb: 4 }}>
        Find your ideal job with 100% confidence
      </Typography>

      <NavLink to={"/findDreamJOb"} style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          size="large"
          data-aos="zoom-in"
          data-aos-delay="400"
          sx={{
            background: "var(--primary-button)",
            "&:hover": { background: "var(--primary-button-hover)" },
            px: 2,
            py: 1,
            fontSize: "1rem",
            borderRadius: "7px",
            textTransform: "none",
          }}>
          Get Started
        </Button>
      </NavLink>
    </Box>
  );
};

export default LandingPage;
