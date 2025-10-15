import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Avatar,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AOS from "aos";
import "aos/dist/aos.css";

const RecruiterRegisteration = () => {
  const [registerationData, setRegisterationData] = useState({
    companyName: "",
    email: "",
    employees: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setRegisterationData({ ...registerationData, [name]: value });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#f5f6fa",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}>
      <Grid
        container
        component={Paper}
        elevation={12}
        sx={{
          minWidth: "100%",
          minHeight: "100vh",
        }}>
        {/* Left Section */}
        <Grid
          item
          xs={6}
          md={6}
          data-aos="fade-right"
          sx={{
            position: "relative",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            p: 5,
            fontSize: "0.9rem", // decreased from ~1.1rem
            minWidth: "600px",
          }}>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(35,41,70,0.85)",
            }}
          />

          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Box display="flex" alignItems="center" gap={1} mb={3}>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <BusinessIcon fontSize="small" />
              </Avatar>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ fontSize: "1.4rem" }}>
                HireXPERT
              </Typography>
            </Box>

            <Typography variant="h6" gutterBottom sx={{ fontSize: "1.2rem" }}>
              Revolutionizing Recruitment with AI
            </Typography>

            <Box mt={3}>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontSize: "0.8rem" }}>
                ✅ Reduce Hiring Time by <strong>60%</strong>
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontSize: "0.8rem" }}>
                ✅ JD - Candidate Match Rate Improved by <strong>70%</strong>
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontSize: "0.8rem" }}>
                ✅ Automate <strong>80%</strong> of Recruiter Workload
              </Typography>
            </Box>

            <Box mt={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                At a Glance
              </Typography>

              <Box display="flex" alignItems="center" gap={1}>
                <WorkOutlineIcon fontSize="small" />
                <Typography sx={{ fontSize: "0.8rem" }}>
                  Open Jobs: Sales Manager
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <GroupsIcon fontSize="small" />
                <Typography sx={{ fontSize: "0.8rem" }}>
                  Applications Received
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <GroupsIcon fontSize="small" />
                <Typography sx={{ fontSize: "0.8rem" }}>
                  Pending Interviews
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <GroupsIcon fontSize="small" />
                <Typography sx={{ fontSize: "0.8rem" }}>
                  Candidates Shortlisted
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <GroupsIcon fontSize="small" />
                <Typography sx={{ fontSize: "0.8rem" }}>
                  Final Round Candidates
                </Typography>
              </Box>

              <Typography
                variant="subtitle2"
                sx={{ mt: 2, fontSize: "0.9rem", fontWeight: "bold" }}>
                Decode India's largest talent pool with the power of AI
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section (Form) */}
        <Grid
          item
          xs={6}
          md={6}
          data-aos="fade-left"
          sx={{
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            color="primary"
            sx={{ fontSize: "1.4rem" }}>
            Get Started
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontSize: "0.8rem" }}>
            Sign up to hire the right candidates faster
          </Typography>

          <Box component="form" mt={1}>
            <TextField
              fullWidth
              label="Company Name"
              margin="normal"
              variant="outlined"
              name="companyName"
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
              fullWidth
              label="Company Email"
              margin="normal"
              variant="outlined"
              name="compnyEmail"
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
              fullWidth
              label="Website"
              margin="normal"
              variant="outlined"
              name="website"
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
              fullWidth
              label="Founded In"
              type="date"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
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

            <Typography
              variant="subtitle2"
              mt={3}
              gutterBottom
              sx={{ fontSize: "0.8rem" }}>
              Number of Employees
            </Typography>

            <RadioGroup
              row
              defaultValue="1-50"
              sx={{ "& .MuiFormControlLabel-label": { fontSize: "0.8rem" } }}>
              <FormControlLabel value="1-50" control={<Radio />} label="1-50" />
              <FormControlLabel
                value="50-100"
                control={<Radio />}
                label="50-100"
              />
              <FormControlLabel
                value="100-500"
                control={<Radio />}
                label="100-500"
              />
              <FormControlLabel value="500+" control={<Radio />} label="500+" />
            </RadioGroup>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 3,
                py: 1.3,
                borderRadius: 2,
                fontSize: "0.9rem",
                textTransform: "none",
              }}>
              Create Account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecruiterRegisteration;
