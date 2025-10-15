import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import NotFoundImg from "../../assets/page-found-concept-illustration_114360-1869.jpg";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--background-color)",
        textAlign: "center",
        px: 2,
      }}>
      {/* Animated Image */}
      <motion.img
        src={NotFoundImg}
        alt="404 Not Found"
        style={{ width: "480px", maxWidth: "50%" }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          color="primary"
          sx={{ mt: 3, color: "#5C45E3", fontSize: "2rem" }}>
          Oops! Page Not Found
        </Typography>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: "600px",
            mt: 2,
            fontSize: "0.9rem",
            color: "#5C45E3",
          }}>
          The page you are looking for doesn’t exist or has been moved.
          <br />
          Let’s get you back on track with HireXpert 🚀
        </Typography>
      </motion.div>

      {/* Button with hover animation */}
      <NavLink to="/">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 4,
              px: 5,
              py: 1.5,
              fontSize: "0.9rem",
              borderRadius: "30px",
              background: "var(--primary-button)",
              "&:hover": { background: "var(--primary-button-hover)" },
              textTransform: "none",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
              "&:hover": {
                transform: "scale(1.08)",
                transition: "all 0.3s ease-in-out",
                boxShadow: "0px 8px 25px rgba(0,0,0,0.25)",
              },
            }}>
            Go Back Home
          </Button>
        </motion.div>
      </NavLink>
    </Box>
  );
};

export default NotFoundPage;
