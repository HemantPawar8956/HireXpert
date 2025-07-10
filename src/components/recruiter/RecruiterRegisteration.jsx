import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Box,
  Avatar,
  Chip,
  Stack,
  Divider,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const RegisterScreen = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Header Section */}
      <Box textAlign="center" data-aos="fade-down">
        <Typography variant="h3" fontWeight={700} gutterBottom>
          vhAIre
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Hire Smarter. Faster. With AI-Powered Precision
        </Typography>
        <Typography variant="body1" mt={2}>
          vhAIre is an intelligent recruitment platform built for businesses of
          every size. Match, evaluate, and hire top talent 3x faster.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} mt={5} data-aos="fade-up">
        {[
          "7 Open Jobs",
          "Application Received 1K",
          "Pending Interviews 1K",
          "Candidates Shortlisted 12",
          "Candidates in Final Round 33",
          "Candidates Offered 2",
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Promo Card */}
      <Box mt={5} data-aos="zoom-in">
        <Card>
          <CardContent>
            <Typography variant="h6">
              Add GitHub to your resume to increase visibility to tech roles
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Review Section */}
      <Box mt={5} data-aos="fade-right">
        <Typography variant="h5" gutterBottom>
          Reviews
        </Typography>
        <Stack direction="row" spacing={2}>
          {[1, 2].map((r) => (
            <Card key={r} sx={{ width: 250 }}>
              <CardContent>
                <Typography variant="h6">3.0</Typography>
                <Typography variant="body2">
                  Hybrid mode of working <br /> Health benefits
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Anonymous Design Manager
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
        <Button sx={{ mt: 2 }} variant="outlined">
          Read all 2624 reviews
        </Button>
      </Box>

      {/* Product Demo */}
      <Box mt={5} textAlign="center" data-aos="zoom-in-up">
        <Button
          variant="contained"
          color="primary"
          startIcon={<PlayCircleFilledWhiteIcon />}>
          Watch Product Demo
        </Button>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4} mt={5} data-aos="fade-up">
        {["AI - Driven Matching", "Scalable for Teams", "Smart Analytics"].map(
          (feature, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Card>
                <CardContent>
                  <Typography variant="h6" textAlign="center">
                    {feature}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>

      {/* Company Account Form */}
      <Box mt={8} data-aos="fade-up">
        <Typography variant="h5" gutterBottom>
          Create your Company Account
        </Typography>
        <Box component="form" mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Company Overview" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Company LinkedIn"
                fullWidth
                InputProps={{ startAdornment: <LinkedInIcon sx={{ mr: 1 }} /> }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Number of Employees
              </Typography>
              <RadioGroup row defaultValue="1-50">
                {["1-50", "50-100", "100-500", "500 +"].map((range) => (
                  <FormControlLabel
                    key={range}
                    value={range}
                    control={<Radio />}
                    label={range}
                  />
                ))}
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" size="large">
                Create Account
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterScreen;
