// built in imports
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// custom imports
import authService from "../services/authService";
import { publicApi } from "../services/axiosInstance";

export default function ProtectedRoute({ children }) {
  const [checking, setChecking] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  // page load hota hi 1 bar chalega
  useEffect(() => {
    const verify = async () => {
      // Token valid hai → seedha allow karo
      if (authService.isLoggedIn()) {
        setIsAuth(true);
        setChecking(false);
        return;
      }

      // Token expire hua → refresh try karo
      try {
        const { data } = await publicApi.post("/auth/refresh");
        localStorage.setItem("access_token", data.access_token);
        setIsAuth(true);
      } catch {
        // Refresh bhi fail → login pe bhejo
        setIsAuth(false);
      } finally {
        setChecking(false);
      }
    };

    verify();
  }, []);

  // Check ho raha hai → kuch mat dikhao
  if (checking) return <div>Loading...</div>;

  // Auth nahi → login pe bhejo
  if (!isAuth) return <Navigate to="/profilePage" replace />;

  // Auth hai → page dikhao
  return children;
}

export function ProtectAuthForm({ children }) {
  if (authService.isLoggedIn()) {
    return <Navigate to="/profile" replace />;
  }
  return children;
}
