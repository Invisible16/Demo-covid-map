import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
const Login = () => {
  let history = useHistory();
  const responseGoogle = (response) => {
    console.log(response);
    history.push("/map");
  };
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default Login;
