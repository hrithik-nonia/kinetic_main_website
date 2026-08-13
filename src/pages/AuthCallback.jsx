import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");

    if (accessToken) {
      localStorage.setItem("access_token", accessToken);

      navigate("/"); // ← home pe bhejo
    } else {
      navigate("/profilePage");
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-500 text-lg">Logging you in...</p>
    </div>
  );
}
