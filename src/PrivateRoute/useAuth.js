import { useState } from "react";

export default function useAuth(initialValue) {
  const [isAuth, setIsAuth] = useState(initialValue);

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

  return [isAuth, login, logout];
}
