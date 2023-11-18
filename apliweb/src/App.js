import './App.css';
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import React, {} from 'react';




function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Is Loading</h1>
  }

  return (

    <div style={{textAlign: 'left'}} className="App">
      <h2>apliweb</h2>

      {isAuthenticated ?  <LogoutButton/>: <LoginButton style={{textAlign: 'right'}}/>

      }
      <Profile />
    </div>
  );
}

export default App;
