import React, { useEffect } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons (you can customize or download your own)
import {
  FaCode,
  FaUserTie,
  FaUsersCog,
  FaPenFancy,
  FaChartBar,
} from "react-icons/fa";

const jobCards = [
  {
    title: "Full Stack Developer",
    icon: <FaCode size={40} />,
    color: "#fca61f",
  },
  {
    title: "Technical Lead",
    icon: <FaUsersCog size={40} />,
    color: "#3cb371",
  },
  {
    title: "HR Manager",
    icon: <FaUserTie size={40} />,
    color: "#5e72e4",
  },
  {
    title: "HR Manager",
    icon: <FaUserTie size={40} />,
    color: "#5e72e4",
  },
  {
    title: "Content Writer",
    icon: <FaPenFancy size={40} />,
    color: "#fca61f",
  },
  {
    title: "Business Analyst",
    icon: <FaChartBar size={40} />,
    color: "#fca61f",
  },
];

const JobCardsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      sx={{
        my: 6,
        px: 2,
        maxWidth: 1200,
        mx: "auto",
        backgroundColor: "transparent",
      }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={4}
        data-aos="fade-up">
        People are applying for
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {jobCards.map((job, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            key={index}
            data-aos="zoom-in"
            minWidth={290}>
            <Paper
              elevation={3}
              sx={{
                border: `2px solid ${job.color}40`,
                borderRadius: 4,
                textAlign: "center",
                p: 4,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: `0 8px 16px ${job.color}40`,
                  cursor: "pointer",
                },
              }}>
              <Box
                sx={{
                  color: job.color,
                  mb: 2,
                }}>
                {job.icon}
              </Box>
              <Typography fontWeight="500" fontSize={16}>
                {job.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JobCardsSection;
