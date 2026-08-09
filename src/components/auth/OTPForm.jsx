// src/components/auth/OTPForm.jsx
import { useState, useRef } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import toast from "react-hot-toast";

function OTPForm({ email, onSuccess }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);

  // input change handle
  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // sirf digit allow karo

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // sirf last character rakho
    setOtp(newOtp);

    // next input pe focus karo
    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // backspace handle karo
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // paste handle karo
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pasted)) return;

    const newOtp = [...otp];
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);
    inputs.current[Math.min(pasted.length, 5)].focus();
  };

  // submit karo
  const handleSubmit = async () => {
    const otpString = otp.join("");
    if (otpString.length < 6) {
      toast.error("Please enter complete 6-digit OTP");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8000/user/auth/sign-up-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp: otpString }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        const msg = Array.isArray(data.detail)
          ? data.detail[0].msg
          : data.detail || "Verification failed";
        toast.error(msg);
        return;
      }

      toast.success("Email verified! Please login.");
      if (onSuccess) onSuccess();
      // eslint-disable-next-line
    } catch (err) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-bold text-gray-900">Verify your email</h1>
        <p className="text-sm text-gray-500">
          OTP sent to <span className="font-medium text-gray-700">{email}</span>
        </p>
      </div>

      {/* OTP Inputs */}
      <div className="flex gap-3 justify-center">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={`w-12 h-14 text-center text-xl font-bold border-2 rounded-xl outline-none transition-all duration-150
              ${digit ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 bg-white text-gray-900"}
              focus:border-blue-500 focus:bg-blue-50`}
          />
        ))}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading || otp.join("").length < 6}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200
          ${
            loading || otp.join("").length < 6
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98] shadow-md shadow-blue-200 cursor-pointer"
          }`}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                strokeWidth="3"
                strokeOpacity="0.3"
              />
              <path
                d="M12 2a10 10 0 0 1 10 10"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            Verifying...
          </span>
        ) : (
          <>
            Verify OTP <ArrowRight size={15} />
          </>
        )}
      </button>

      {/* Resend */}
      <button
        type="button"
        className="flex items-center justify-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors mx-auto"
      >
        <RotateCcw size={13} />
        Resend OTP
      </button>
    </div>
  );
}

export default OTPForm;
