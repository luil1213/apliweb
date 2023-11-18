//import React from "react";
import React, {Fragment, useState, useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return <button onClick={() => logout()} style={{textAlign: 'right'}} >logout</button>;
};

export default LogoutButton;