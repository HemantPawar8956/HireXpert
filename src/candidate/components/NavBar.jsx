import React, { useEffect, useState } from "react";
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
  Avatar,
  Menu,
  Grow,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useMobileView from "../../utilities/customHooks/useMobileView";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoginData,
  setModalOpen,
  logout,
  setRegisterModalOpen,
} from "../../redux/slices/userSlice";
import { setJobsByReferences } from "../../redux/slices/jobSlice";

const NavBar = () => {
  const isMobile = useMobileView();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state?.userSlice);
  // Dropdown Menu State
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // Example logout action
    dispatch(logout());
    dispatch(setJobsByReferences(null));
    handleClose();
  };

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

  useEffect(() => {
    dispatch(getLoginData());
  }, []);
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1200,
          background: "#eaf7f1",
          // boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
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
                width: 10,
                height: 10,
                background: "var(--primary-button)",
                borderRadius: "50%",
              }}
            />
            <Typography
              variant="h6"
              fontWeight="bold"
              color="black"
              sx={{ fontSize: "1.4rem", lineHeight: 1.2 }}>
              Hire<span style={{ fontWeight: "normal" }}>XPERT</span>
            </Typography>
          </Box>

          {isMobile ? (
            // Mobile View
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ fontSize: "1.5rem", color: "#004d4d" }} />
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
                      fontSize: "0.95rem",
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

              {/* Action Buttons OR User Menu */}
              <Box display="flex" gap={0.5} alignItems="center">
                {userData ? (
                  <>
                    {/* Avatar with animation */}
                    <motion.div whileHover={{ scale: 0.8 }} sx={{ scale: 0.9 }}>
                      <Avatar
                        sx={{
                          bgcolor: "#004d4d",
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                          padding: "8px",
                        }}>
                        {userData.email.slice(0, 1).toUpperCase()}
                      </Avatar>
                    </motion.div>

                    {/* Username + Dropdown */}
                    <Typography
                      onClick={handleMenuClick}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        color: "#004d4d",
                        "&:hover": {
                          color: "#008080",
                        },
                        transition: "all 0.3s ease",
                      }}>
                      {userData?.name.toUpperCase()}
                      <ArrowDropDownIcon />
                    </Typography>

                    {/* Dropdown Menu */}
                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      slotProps={{
                        paper: {
                          elevation: 3,
                          sx: {
                            mt: 1.2,
                            borderRadius: "7px",
                            minWidth: 200,
                            py: 1,
                            background: "#f0fdfa",
                            boxShadow:
                              "0px 6px 20px rgba(0, 0, 0, 0.1), 0px 8px 24px rgba(0, 0, 0, 0.15)",
                          },
                        },
                        transition: {
                          // instead of TransitionProps
                          component: Grow,
                          timeout: 300,
                        },
                      }}>
                      <MenuItem
                        onClick={handleClose}
                        sx={{
                          backgroundColor: "transparent !important",
                          fontSize: "0.9rem",
                          "&:hover": {
                            backgroundColor: "#b5f0f0ff !important",
                            borderRadius: "3px",
                            color: "#004d4d",
                          },
                          transition: "all 0.45s ease",
                        }}>
                        Profile
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        sx={{
                          backgroundColor: "transparent !important",
                          fontSize: "0.9rem",
                          "&:hover": {
                            backgroundColor: "#b5f0f0ff !important",
                            borderRadius: "3px",
                            color: "#004d4d",
                          },
                          transition: "all 0.25s ease",
                        }}>
                        Settings
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem
                        onClick={handleLogout}
                        sx={{
                          color: "red",
                          fontWeight: 500,
                          fontSize: "0.9rem",
                          "&:hover": {
                            backgroundColor: "#ffe6e6",
                            borderRadius: "3px",
                          },
                          transition: "all 0.25s ease",
                        }}>
                        Logout
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "7px",
                        textTransform: "none",
                        fontWeight: 500,
                        color: "black",
                        fontSize: "0.8rem",
                        borderColor: "#ccc",
                        backgroundColor: "white",
                        "&:hover": {
                          backgroundColor: "#f0f0f0",
                        },
                      }}
                      onClick={() => dispatch(setModalOpen(true))}>
                      Log In
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "7px",
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: "0.8rem",
                        backgroundColor: "#004d4d",
                        "&:hover": {
                          backgroundColor: "#003333",
                        },
                      }}
                      onClick={() => dispatch(setRegisterModalOpen(true))}>
                      Register
                    </Button>
                  </>
                )}
              </Box>
            </>
          )}
        </Toolbar>
      </Box>

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
          {userData && (
            <Box mb={2} textAlign="center">
              <Avatar
                sx={{
                  bgcolor: "#004d4d",
                  fontWeight: "bold",
                  width: 56,
                  height: 56,
                  margin: "0 auto",
                }}>
                {userData.email.slice(0, 1).toUpperCase()}
              </Avatar>
              <Typography variant="subtitle1" mt={1} fontWeight="600">
                {userData.email}
              </Typography>
            </Box>
          )}
          <List>
            {navLinks.map((text) => (
              <ListItem key={text} onClick={() => handleNavigation(text)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Box mt={3}>
            {userData ? (
              <Button
                fullWidth
                variant="contained"
                onClick={handleLogout}
                sx={{
                  color: "red",
                  fontWeight: 500,
                  backgroundColor: "#f79d9dff",
                  "&:hover": {
                    backgroundColor: "#f34b4bff",
                    borderRadius: "3px",
                    color: "white",
                  },
                  transition: "all 0.25s ease",
                }}>
                LogOut
              </Button>
            ) : (
              <>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 1, textTransform: "none" }}
                  onClick={() => dispatch(setModalOpen(true))}>
                  Log In
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ textTransform: "none", backgroundColor: "#004d4d" }}
                  onClick={() => dispatch(setRegisterModalOpen(true))}>
                  Register
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
