import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  Container,
} from "@mui/material";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CandidateLogin = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        minWidth: "100% ",
        display: "flex",
      }}>
      {/* Left Side */}
      <Container
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          // p: 4,
          minWidth: "60%",
        }}>
        <Box
          textAlign="center"
          sx={{ backgroundColor: "rgba(0,0,0,0.5)", p: 4, borderRadius: 3 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome Candidate!
          </Typography>
          <Typography variant="h6">
            Find your dream job, connect with top companies, and grow your
            career.
          </Typography>
        </Box>
      </Container>

      {/* Right Side (Login Form) */}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "40%",
        }}>
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Candidate Login
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Please login to access your account
          </Typography>

          {/* Username */}
          <TextField
            margin="normal"
            fullWidth
            label="Email / Username"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUserAlt />
                </InputAdornment>
              ),
            }}
          />

          {/* Password */}
          <TextField
            margin="normal"
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaLock />
                </InputAdornment>
              ),
            }}
          />

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: "8px", py: 1.5 }}>
            Login
          </Button>

          <Typography variant="body2" textAlign="center">
            Don’t have an account? <a href="/register">Register here</a>
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default CandidateLogin;
