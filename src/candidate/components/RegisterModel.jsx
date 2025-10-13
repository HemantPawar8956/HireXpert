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
import registerImage from "../../assets/RegisterPageImage.webp";
import CloseIcon from "@mui/icons-material/Close";
import { FaUserPlus, FaBriefcase } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setRegisterModalOpen } from "../../redux/slices/userSlice";

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
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "0.9rem" }}>
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
          mb={0}
          sx={{ fontSize: "0.8rem" }}>
          Select how you want to register
        </Typography>

        {/* Registration Illustration */}
        <Box textAlign="center" mb={1}>
          <img
            src={registerImage}
            alt="register"
            width={280}
            height={180}
            style={{ borderRadius: "50%" }}
          />
        </Box>

        {/* Register Buttons */}
        <Stack spacing={2}>
          <Button
            variant="contained"
            startIcon={<FaUserPlus size={18} />}
            fullWidth
            sx={{
              backgroundColor: "#2e7d32",
              color: "white",
              fontWeight: "bold",
              borderRadius: 2,
              py: 1.2,
              fontSize: "0.75rem",
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
            startIcon={<FaBriefcase size={18} />}
            fullWidth
            component={Link}
            to="/recruiters/register"
            sx={{
              fontWeight: "bold",
              borderRadius: 2,
              py: 1,
              textTransform: "none",
              fontSize: "0.75rem",
              borderColor: "#2e7d32",
              color: "#2e7d32",
              "&:hover": {
                backgroundColor: "#e8f5e9",
              },
            }}
            onClick={handleClose}>
            Register as Recruiter
          </Button>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography
          variant="subtitle2"
          color="text.primary"
          align="center"
          display="block"
          sx={{ fontSize: "0.8rem" }}>
          By continuing, you agree to our Terms and Privacy Policy.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
