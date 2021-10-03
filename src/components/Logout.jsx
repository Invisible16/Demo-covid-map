import React from "react";
import { GoogleLogout } from "react-google-login";
const Logout = () => {
  const logout = (response) => {
    console.log(response);
    alert("Log out success");
  };
  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={logout}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default Logout;
