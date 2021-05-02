import React from "react";

import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <a href={loginUrl}>Join Room</a>
    </div>
  );
}

export default Login;
