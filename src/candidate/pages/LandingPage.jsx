import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Button } from "@mui/material";
import logo from "../../assets/HireXpert Logo.png";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        background: "var(--background-color)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        textAlign: "center",
      }}>
      {/* Logo */}
      <Box data-aos="fade-down" sx={{ mb: 3 }}>
        <img
          src={logo}
          alt="HireXpert Logo"
          style={{ height: "190px", mixBlendMode: "multiply" }} // reduced from 210px
        />
      </Box>

      {/* Main Heading */}
      <Typography
        variant="h6"
        data-aos="fade-up"
        sx={{
          fontWeight: "bold",
          color: "#5C45E3",
          mb: 2,
          fontSize: "1rem", // reduced from ~1.2rem (h5 → h6 + smaller font)
        }}>
        AI-Driven Hiring, Human-Centric Results
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body2"
        data-aos="fade-up"
        data-aos-delay="200"
        sx={{
          mb: 4,
          fontSize: "0.8rem", // reduced from default body1 (~1rem)
        }}>
        Find your ideal job with 100% confidence
      </Typography>

      {/* CTA Button */}
      <NavLink to={"/findDreamJOb"} style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          size="medium"
          data-aos="zoom-in"
          data-aos-delay="400"
          sx={{
            background: "var(--primary-button)",
            "&:hover": { background: "var(--primary-button-hover)" },
            px: 2,
            py: 1,
            fontSize: "0.7rem", // reduced from 0.9rem
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
