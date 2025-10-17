import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  InputAdornment,
  Divider,
} from "@mui/material";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { loginUser } from "../../redux/Api/userApi";
import { setLoading } from "../../redux/slices/userSlice";
import GoogleAuth from "../../auth/GoogleAuth";

const CandidateLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.userSlice);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const response = await dispatch(loginUser(loginData)).unwrap();
      console.log(response, "response");

      if (response.token) {
        toast.success(response.message || "Login successful!");
        localStorage.setItem("token", response.token);
        dispatch(setLoading(false));
        setTimeout(() => {
          navigate(-1);
        }, 1200);
      } else {
        toast.error(response.message || "Login failed. Please try again.");
        dispatch(setLoading(false));
      }
    } catch (error) {
      toast.error(error || "Login failed. Please try again.");
      dispatch(setLoading(false));
    }
  };

  return (
    <Container
      disableGutters
      sx={{
        height: "100vh",
        minWidth: "100%",
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
          justifyContent: "space-around",
          color: "#fff",
          minWidth: "60%",
        }}>
        <Box
          textAlign="center"
          sx={{ backgroundColor: "rgba(0,0,0,0.5)", p: 4, borderRadius: 3 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: "2.4rem" }} // decreased
          >
            Welcome Candidate!
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "0.9rem" }}>
            {" "}
            {/* decreased */}
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
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              paddingBottom: 2,
              textAlign: "center",
              fontSize: "2.2rem", // decreased
            }}>
            Candidate Login
          </Typography>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.secondary"
            gutterBottom
            sx={{ fontSize: "0.75rem" }} // decreased
          >
            Please login to access your account
          </Typography>

          {/* Username & Password */}
          <Box component="form" onSubmit={handleFormSubmit}>
            <TextField
              margin="normal"
              fullWidth
              label="Email / Username"
              variant="outlined"
              name="email"
              onChange={handleInputChange}
              autoComplete="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaUserAlt />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "0.8rem", // smaller text
                  padding: "14px 10px", // reduce padding → smaller height
                },
                "& .MuiInputLabel-root": {
                  fontSize: "0.8rem", // smaller label
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px", // slightly compact corners
                },
              }}
            />

            <TextField
              margin="dense" // makes vertical spacing smaller
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              autoComplete="password"
              name="password"
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock size={14} /> {/* icon also smaller */}
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "0.8rem", // smaller text
                  padding: "14px 10px", // reduce padding → smaller height
                },
                "& .MuiInputLabel-root": {
                  fontSize: "0.8rem", // smaller label
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px", // slightly compact corners
                },
              }}
            />

            {/* Login Button */}
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: "8px",
                py: 1.2,
                fontSize: "0.8rem", // decreased
              }}>
              Login
            </Button>
          </Box>

          {/* Divider */}
          <Divider sx={{ my: 2 }}>or</Divider>

          <Box sx={{ margin: "0 auto" }}>
            {/* Google Sign-In */}
            <GoogleAuth />
          </Box>

          {/* Register Link */}
          <Typography
            variant="body2"
            textAlign="center"
            sx={{ mt: 2, fontSize: "0.8rem" }} // decreased
          >
            Don’t have an account?{" "}
            <NavLink to="candidates/register">Register here</NavLink>
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default CandidateLogin;
