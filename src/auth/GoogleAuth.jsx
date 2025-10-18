import React, { useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { gooleLoginUser } from "../redux/Api/userApi";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clientId = import.meta.env.VITE_Google_Client_ID;
  console.log(clientId);
  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential; // Google’s ID token
    const decoded = jwtDecode(token); // Decode to get user info (email, name, picture)

    try {
      const res = await dispatch(gooleLoginUser(token)); // Your backend API call
      if (res.payload?.jwtToken) {
        localStorage.setItem("token", res.payload?.jwtToken);
        toast.success(
          res.payload?.jwtToken ? "Login Successful" : "Login Failed"
        );
        setTimeout(() => {
          navigate(-1);
        }, 1200);
      } else {
        toast.error(res.payload);
      }
    } catch (err) {
      console.log(err);
      toast.error("Google login error");
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };
  useEffect(() => {
    window.google?.accounts.id.initialize({
      client_id: import.meta.env.VITE_Google_Client_ID,
      ux_mode: "redirect", // full-page redirect instead of popup
    });
  }, []);
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
