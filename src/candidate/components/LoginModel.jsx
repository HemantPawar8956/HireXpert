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
import CloseIcon from "@mui/icons-material/Close";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ open }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setModalOpen(false));

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 2,
        }}>
        <Typography variant="p" fontWeight="bold" fontSize="1rem">
          Welcome to HireXPERT
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Typography
          variant="subtitle2"
          align="center"
          fontWeight={600}
          color="text.secondary"
          mt={1}
          mb={2}
          fontSize="0.75rem">
          Select how you want to log in
        </Typography>

        {/* Illustration */}
        <Box textAlign="center" mb={2}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="login"
            width={80}
            height={80}
            style={{ borderRadius: "50%" }}
          />
        </Box>

        <Stack spacing={1.5}>
          <Button
            variant="contained"
            startIcon={<FaUsers size={16} />}
            fullWidth
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              fontWeight: "bold",
              borderRadius: 2,
              py: 1.1,
              textTransform: "none",
              fontSize: "0.7rem",
              "&:hover": {
                backgroundColor: "#125ea3",
              },
            }}
            onClick={() => {
              navigate("/login");
              handleClose();
            }}>
            Login as Candidate
          </Button>

          <Button
            variant="outlined"
            startIcon={<FaUserTie size={16} />}
            fullWidth
            sx={{
              fontWeight: "bold",
              borderRadius: 2,
              py: 1.1,
              textTransform: "none",
              fontSize: "0.7rem",
              borderColor: "#1976d2",
              color: "#1976d2",
              "&:hover": {
                backgroundColor: "#e3f2fd",
              },
            }}
            onClick={() => alert("Login as Recruiter clicked")}>
            Login as Recruiter
          </Button>
        </Stack>

        <Divider sx={{ my: 2.5 }} />

        <Typography
          variant="body2"
          color="text.primary"
          align="center"
          display="block"
          fontSize="0.75rem">
          By continuing, you agree to our Terms and Privacy Policy.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
