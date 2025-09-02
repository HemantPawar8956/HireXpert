import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginModal from './candidate/components/LoginModel';
import RegisterModal from './candidate/components/RegisterModel';

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
