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
  Avatar,
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
          pb: 0,
        }}>
        <Typography variant="h5" fontWeight="bold">
          Welcome to HireXPERT
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
          mb={3}>
          Select how you want to log in
        </Typography>

        {/* Illustration or logo (Optional) */}
        <Box textAlign="center" mb={3}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="login"
            width={100}
            height={100}
            style={{ borderRadius: "50%" }}
          />
        </Box>

        <Stack spacing={2}>
          <Button
            variant="contained"
            startIcon={<FaUsers size={20} />}
            fullWidth
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              fontWeight: "bold",
              borderRadius: 2,
              py: 1.5,
              textTransform: "none",
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
            startIcon={<FaUserTie size={20} />}
            fullWidth
            sx={{
              fontWeight: "bold",
              borderRadius: 2,
              py: 1.5,
              textTransform: "none",
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

export default LoginModal;
