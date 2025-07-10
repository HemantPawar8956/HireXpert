import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  Box,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import registerImage from "../assets/RegisterPageImage.webp"; // Ensure you have an image at this path
import CloseIcon from "@mui/icons-material/Close";
import { FaUserPlus, FaBriefcase } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setRegisterModalOpen } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const RegisterModal = ({ open }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => dispatch(setRegisterModalOpen(false));

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 0,
        }}>
        <Typography variant="h5" fontWeight="bold">
          Join HireXPERT
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Typography
          variant="subtitle1"
          align="center"
          fontWeight={600}
          color="text.secondary"
          mt={1}
          mb={0}>
          Select how you want to register
        </Typography>

        {/* Registration Illustration */}
        <Box textAlign="center" mb={1}>
          <img
            src={registerImage}
            alt="register"
            width={300}
            height={200}
            style={{ borderRadius: "50%" }}
          />
        </Box>

        {/* Register Buttons */}
        <Stack spacing={2}>
          <Button
            variant="contained"
            startIcon={<FaUserPlus size={20} />}
            fullWidth
            sx={{
              backgroundColor: "#2e7d32",
              color: "white",
              fontWeight: "bold",
              borderRadius: 2,
              py: 1.5,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1b5e20",
              },
            }}
            onClick={() => alert("Register as Candidate clicked")}>
            Register as Candidate
          </Button>

          <Button
            variant="outlined"
            startIcon={<FaBriefcase size={20} />}
            fullWidth
            sx={{
              fontWeight: "bold",
              borderRadius: 2,
              py: 1.5,
              textTransform: "none",
              borderColor: "#2e7d32",
              color: "#2e7d32",
              "&:hover": {
                backgroundColor: "#e8f5e9",
              },
            }}
            onClick={() => {
              handleClose(), navigate("/recruiters/register");
            }}>
            Register as Recruiter
          </Button>
        </Stack>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="subtitle1"
          color="text.primary"
          align="center"
          display="block">
          By continuing, you agree to our Terms and Privacy Policy.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
