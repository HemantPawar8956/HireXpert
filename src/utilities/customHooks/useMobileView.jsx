import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const useMobileView = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? true : false;
};

export default useMobileView;
