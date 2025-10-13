import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import LoginModal from "./candidate/components/LoginModel";
import RegisterModal from "./candidate/components/RegisterModel";
import HireXpertLoader from "./utilities/HireXpertLoader";
import { useEffect } from "react";
import { logout, setUserPreferences } from "./redux/slices/userSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const userSlice = useSelector((state) => state.userSlice);
  useEffect(() => {
    const cookieData = Cookies.get("userPreferences");
    if (cookieData) {
      try {
        const user = JSON.parse(cookieData);
        console.log("From js-cookie →", user);
        dispatch(setUserPreferences(user));
      } catch (err) {
        console.error("Error parsing cookie from js-cookie:", err);
      }
    } else {
      console.log("userPreferences not found via js-cookie");
      dispatch(logout());
    }
  }, [userSlice.userData]);

  return (
    <section className="layout">
      {userSlice?.isLoading && <HireXpertLoader />}
      <LoginModal open={userSlice.isLoginModelOpen} />
      <RegisterModal open={userSlice.isRegisterModelOpen} />
      <Outlet />
    </section>
  );
};

export default Layout;
