// built in imports
import { useState, useEffect } from "react";

// custom imports

function UseCountdown(totalSeconds) {
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return [hours, minutes, seconds].map((v) => String(v).padStart(2, "0"));
}
export default UseCountdown;
