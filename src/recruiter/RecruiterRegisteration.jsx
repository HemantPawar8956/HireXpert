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
        Height: "100vh",
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
        {/* Left Section with Recruiter Image */}
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
            fontSize: "20px",
          }}>
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(35,41,70,0.85)",
            }}
          />

          {/* Content */}
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Box display="flex" alignItems="center" gap={1} mb={3}>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <BusinessIcon />
              </Avatar>
              <Typography variant="h4" fontWeight="bold">
                HireXPERT
              </Typography>
            </Box>

            <Typography variant="h5" gutterBottom>
              Revolutionizing Recruitment with AI
            </Typography>

            <Box mt={3}>
              <Typography variant="body1" gutterBottom>
                ✅ Reduce Hiring Time by <strong>60%</strong>
              </Typography>
              <Typography variant="body1" gutterBottom>
                ✅ JD - Candidate Match Rate Improved by <strong>70%</strong>
              </Typography>
              <Typography variant="body1" gutterBottom>
                ✅ Automate <strong>80%</strong> of Recruiter Workload
              </Typography>
            </Box>

            <Box mt={6}>
              <Typography variant="h5" gutterBottom>
                At a Glance
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <WorkOutlineIcon />{" "}
                <Typography>Open Jobs: Sales Manager</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <GroupsIcon /> <Typography>Applications Received</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <GroupsIcon /> <Typography>Pending Interviews</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <GroupsIcon /> <Typography>Candidates Shortlisted</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <GroupsIcon /> <Typography>Final Round Candidates</Typography>
              </Box>
              <h4>Decode India's largest talent pool with the power of AI</h4>
            </Box>
          </Box>
        </Grid>

        {/* Right Section (Form) */}
        <Grid
          item
          xs={6}
          md={6}
          data-aos="fade-left"
          maxHeight={"100%"}
          sx={{
            p: { xs: 3, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            color="primary">
            Get Started
          </Typography>
          <Typography variant="h6" gutterBottom>
            Sign up to hire the right candidates faster
          </Typography>

          <Box component="form" mt={3}>
            <TextField
              fullWidth
              label="Company Name"
              margin="normal"
              variant="outlined"
              name="companyName"
            />
            <TextField
              fullWidth
              label="Company Email"
              margin="normal"
              variant="outlined"
              name="compnyEmail"
            />
            <TextField
              fullWidth
              label="Website"
              margin="normal"
              variant="outlined"
              name="website"
            />
            <TextField
              fullWidth
              label="Founded In"
              type="date"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true, // 👈 keeps the label always visible
              }}
            />

            <Typography variant="subtitle2" mt={3} gutterBottom>
              Number of Employees
            </Typography>
            <RadioGroup row defaultValue="1-50">
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
                mt: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: "1rem",
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
