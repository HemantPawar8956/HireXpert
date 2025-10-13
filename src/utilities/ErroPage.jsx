import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorPage = ({ onRetry }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
        background: "linear-gradient(135deg, #e0f7fa 0%, #f1f8e9 100%)",
        textAlign: "center",
      }}>
      {/* Icon Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}>
        <ErrorOutlineIcon sx={{ fontSize: 100, color: "#d32f2f", mb: 2 }} />
      </motion.div>

      {/* Text Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <Typography variant="h3" fontWeight="bold" color="#333" gutterBottom>
          Oops! Something Went Wrong
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          We’re sorry, but an unexpected error has occurred. Please try again
          later.
        </Typography>
      </motion.div>

      {/* Button Animation */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #004d4d, #008080)",
            px: 4,
            py: 1.5,
            borderRadius: "12px",
            fontWeight: 600,
            fontSize: "1rem",
            textTransform: "none",
          }}
          onClick={onRetry}>
          Try Again
        </Button>
      </motion.div>

      {/* Floating Animation in Background */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "10%",
          fontSize: "3rem",
          color: "#80cbc4",
        }}>
        ⚡
      </motion.div>
    </Box>
  );
};

export default ErrorPage;
