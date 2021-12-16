import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const UserContext = React.createContext();

function UserProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [role, setRole] = useState(localStorage.getItem('role'))

  useEffect(() => {
    if (token) handleGetProfileInfo()
  }, [token]);

  const handleGetProfileInfo = () => {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/me`, config)
      .then((response) => {
        if (response.status === 200) setCurrentUser(response.data.user);
      });
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
  }

  const value = {
    currentUser,
    setCurrentUser,
    token,
    setToken,
    role,
    setRole,
    logout
  };

  return <UserContext.Provider value={value} {...props} />;
}

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };