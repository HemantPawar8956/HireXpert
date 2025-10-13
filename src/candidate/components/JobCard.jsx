import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
import {
  FaBookmark,
  FaMapMarkerAlt,
  FaUserTie,
  FaRupeeSign,
  FaClock,
} from "react-icons/fa";

const JobCard = ({ job }) => {
  return (
    <Card
      elevation={1}
      sx={{
        borderRadius: 3,
        position: "relative",
        py: 2,
        pl: 2,
        pr: 6,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}>
      {/* Header */}
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar src={job.logo} alt={job.title} sx={{ width: 48, height: 48 }} />
        <Box>
          <Typography
            fontWeight="600"
            fontSize="16px"
            color="text.primary"
            lineHeight={1.3}>
            {job.title}
          </Typography>
          <Typography fontSize="14px" color="text.secondary">
            {job.company} <span style={{ color: "#f4b400" }}>⭐</span>{" "}
            {job.rating}
          </Typography>
        </Box>
      </Box>

      {/* Job Info */}
      <CardContent sx={{ px: 0, pt: 2, pb: "0 !important" }}>
        <Stack spacing={1.2}>
          <InfoRow icon={<FaMapMarkerAlt />} text={job.location} />
          <InfoRow icon={<FaUserTie />} text={job.experience} />
          <InfoRow icon={<FaRupeeSign />} text={job.salary} />
          <InfoRow icon={<FaClock />} text={`Posted ${job.posted}`} />
        </Stack>
      </CardContent>

      {/* Bookmark */}
      <IconButton
        sx={{
          position: "absolute",
          top: 12,
          right: 3,
          color: "#1976d2",
        }}>
        <FaBookmark />
      </IconButton>
    </Card>
  );
};

const InfoRow = ({ icon, text }) => (
  <Box display="flex" alignItems="center" gap={1}>
    <Box color="text.secondary">{icon}</Box>
    <Typography fontSize="14px" color="text.secondary">
      {text}
    </Typography>
  </Box>
);

export default JobCard;
