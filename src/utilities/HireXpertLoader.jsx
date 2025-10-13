import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const HireXpertLoader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
        background: "linear-gradient(135deg, #004d4d, #008080)",
        color: "#fff",
        textAlign: "center",
      }}>
      {/* Spinner with Brand Name */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        style={{
          border: "6px solid rgba(255, 255, 255, 0.2)",
          borderTop: "6px solid #ffd54f", // Brand highlight
          borderRadius: "50%",
          width: 120,
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "25px",
        }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: "#ffd54f", letterSpacing: "1px" }}>
          HireXpert
        </Typography>
      </motion.div>

      {/* Animated Loading Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}>
        <Typography variant="body1" sx={{ fontSize: "1.2rem", mt: 2 }}>
          Loading...
        </Typography>
      </motion.div>
    </Box>
  );
};
export default HireXpertLoader;
