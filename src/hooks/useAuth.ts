import { useState } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userRole, setUserRole] = useState(localStorage.getItem('role'));

  const login = (jwtToken: string, role: string) => {
    setToken(jwtToken);
    setUserRole(role);
    localStorage.setItem('token', jwtToken);
    localStorage.setItem('role', role);
  };

  const logout = () => {
    setToken(null);
    setUserRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  return { token, userRole, login, logout };
};
