import { useState } from "react";

export default function useAuth(initialValue) {
  const [isAuth, setIsAuth] = useState(initialValue);
  const [isAdmin, setIsAdmin] = useState(initialValue);

  const login = () => {
    setTimeout(() => {
      setIsAuth(true);
    }, 1000);
  };

  const logout = () => {
    setTimeout(() => {
      setIsAuth(false);
    }, 1000);
  };

  const makeAdmin = () => {
    setTimeout(() => {
      setIsAdmin(true);
    }, 1000);
  };

  const revokeAdmin = () => {
    setTimeout(() => {
      setIsAdmin(false);
    }, 1000);
  };

  return [isAuth, login, logout, makeAdmin, revokeAdmin];
}
