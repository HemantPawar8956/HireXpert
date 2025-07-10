import { Outlet } from "react-router-dom";
import LoginModal from "./components/LoginModel";
import { useSelector } from "react-redux";
import RegisterModal from "./components/RegisterModel";

const Layout = () => {
  const userSlice = useSelector((state) => state.userSlice);
  return (
    <section>
      <LoginModal open={userSlice.isLoginModelOpen} />
      <RegisterModal open={userSlice.isRegisterModelOpen} />
      <Outlet />
    </section>
  );
};

export default Layout;
