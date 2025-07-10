import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMobileView from "../utilities/customHooks/useMobileView";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen, setRegisterModalOpen } from "../redux/slices/userSlice";

const Navbar = () => {
  const isMobile = useMobileView();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const dispatch = useDispatch();
  const userSlice = useSelector((state) => state.userSlice);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section ${section} not found`);
    }
    setDrawerOpen(false); // Close drawer on link click
  };

  const navLinks = ["Home", "Jobs", "Manage Job Postings", "Screen Resumes"];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "#eaf7f1",
          top: 0,
          left: 0,
          right: 0,
        }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            display="flex"
            alignItems="start"
            justifyContent={"center"}
            flexDirection={"column"}
            sx={{ cursor: "pointer" }}
            onClick={handleLogoClick}>
            <Box
              sx={{
                width: 12,
                height: 12,
                background: "var(--primary-button)",
                borderRadius: "50%",
              }}
            />
            <Typography
              variant="h6"
              fontWeight="bold"
              color="black"
              sx={{ fontSize: "1.7rem" }}>
              Hire<span style={{ fontWeight: "normal" }}>XPERT</span>
            </Typography>
          </Box>

          {isMobile ? (
            // Mobile View
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ fontSize: "2rem", color: "#004d4d" }} />
            </IconButton>
          ) : (
            // Desktop View
            <>
              <Stack direction="row" spacing={2}>
                {navLinks.map((item) => (
                  <Typography
                    key={item}
                    color="black"
                    sx={{
                      cursor: "pointer",
                      fontWeight: 500,
                      fontSize: "1.2rem",
                      padding: "0.3rem 0.7rem",
                      borderBottom: "2px solid transparent",
                      "&:hover": {
                        borderBottom: "2px solid #004d4d",
                        transition: "border-bottom 0.9s ease",
                      },
                    }}
                    onClick={() => handleNavigation(item)}>
                    {item}
                  </Typography>
                ))}
              </Stack>

              {/* Action Buttons */}
              <Box display="flex" gap={2}>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "7px",
                    textTransform: "none",
                    fontWeight: 500,
                    color: "black",
                    fontSize: "1rem",
                    borderColor: "#ccc",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}
                  onClick={() => {
                    dispatch(setModalOpen(true)); // Dispatch action to open modal
                  }}>
                  Log In
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "7px",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    backgroundColor: "#004d4d",
                    "&:hover": {
                      backgroundColor: "#003333",
                    },
                  }}
                  onClick={() => {
                    dispatch(setRegisterModalOpen(true)); // Dispatch action to open modal
                  }}>
                  Register
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, px: 2, pt: 2 }} role="presentation">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Typography variant="h6" fontWeight="bold">
              Menu
            </Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />
          <List>
            {navLinks.map((text) => (
              <ListItem key={text} onClick={() => handleNavigation(text)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Box mt={3}>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mb: 1, textTransform: "none" }}
              onClick={() => {
                dispatch(setModalOpen(true)); // Dispatch action to open modal
              }}>
              Log In
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ textTransform: "none", backgroundColor: "#004d4d" }}
              onClick={() => {
                dispatch(setRegisterModalOpen(true)); // Dispatch action to open modal
              }}>
              Register
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
