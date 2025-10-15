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
  const postedAt = new Date(job.postedAt).toLocaleDateString();
  return (
    <Card
      elevation={1}
      sx={{
        borderRadius: 2.5,
        position: "relative",
        py: 1.5,
        pl: 1.5,
        pr: 4.5,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: 5,
        },
      }}>
      {/* Header */}
      <Box display="flex" alignItems="center" gap={0.8}>
        <Avatar src={job.logo} alt={job.title} sx={{ width: 42, height: 42 }} />
        <Box>
          <Typography
            fontWeight="600"
            fontSize="14px"
            color="text.primary"
            lineHeight={1.3}>
            {job.title}
          </Typography>
          <Typography fontSize="12px" color="text.secondary">
            {job.companyId?.name} <span style={{ color: "#f4b400" }}>⭐</span>{" "}
            {job.rating}
          </Typography>
        </Box>
      </Box>

      {/* Job Info */}
      <CardContent sx={{ px: 0, pt: 1.5, pb: "0 !important" }}>
        <Stack spacing={0.8}>
          <InfoRow icon={<FaMapMarkerAlt size={12} />} text={job.location} />
          <InfoRow icon={<FaUserTie size={12} />} text={job.experience} />
          <InfoRow
            icon={<FaRupeeSign size={12} />}
            text={`${job.salaryRange.min} -- ${job.salaryRange.max}`}
          />
          <InfoRow icon={<FaClock size={12} />} text={`Posted ${postedAt}`} />
        </Stack>
      </CardContent>

      {/* Bookmark */}
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 2,
          color: "#1976d2",
        }}>
        <FaBookmark size={14} />
      </IconButton>
    </Card>
  );
};

const InfoRow = ({ icon, text }) => (
  <Box display="flex" alignItems="center" gap={0.6}>
    <Box color="text.secondary">{icon}</Box>
    <Typography fontSize="12px" color="text.secondary">
      {text}
    </Typography>
  </Box>
);

export default JobCard;
