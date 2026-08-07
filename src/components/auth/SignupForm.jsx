// built in imports
import { useState } from "react";
import {
  User,
  Mail,
  EyeOff,
  Eye,
  CheckCircle,
  ArrowRight,
  GitBranch,
  Lock,
} from "lucide-react";

// custom imports
import InputField from "./InputField";
import GoogleIcon from "./GoogleIcon";

function SignupForm({ onSwitch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Full name is required";
    if (!email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6) e.password = "Minimum 6 characters";
    if (!confirm) e.confirm = "Please confirm your password";
    else if (confirm !== password) e.confirm = "Passwords do not match";
    if (!agreed) e.agreed = "Please accept the Terms & Conditions";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Create account</h1>
        <p className="text-sm text-gray-500">
          Join us today — it's free to get started
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <InputField
          icon={User}
          placeholder="Full name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((p) => ({ ...p, name: "" }));
          }}
          error={errors.name}
        />
        <InputField
          icon={Mail}
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((p) => ({ ...p, email: "" }));
          }}
          error={errors.email}
        />
        <InputField
          icon={Lock}
          type={showPass ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors((p) => ({ ...p, password: "" }));
          }}
          error={errors.password}
          rightElement={
            <button
              onClick={() => setShowPass(!showPass)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              type="button"
            >
              {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          }
        />
        <InputField
          icon={Lock}
          type={showConfirm ? "text" : "password"}
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
            setErrors((p) => ({ ...p, confirm: "" }));
          }}
          error={errors.confirm}
          rightElement={
            <button
              onClick={() => setShowConfirm(!showConfirm)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              type="button"
            >
              {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          }
        />
      </div>

      <div className="flex flex-col gap-1 -mt-1">
        <label
          className="flex items-start gap-2.5 cursor-pointer"
          onClick={() => {
            setAgreed(!agreed);
            setErrors((p) => ({ ...p, agreed: "" }));
          }}
        >
          <div
            className={`w-4 h-4 mt-0.5 rounded flex items-center justify-center border transition-all duration-150 shrink-0
            ${agreed ? "bg-blue-600 border-blue-600" : errors.agreed ? "border-red-400" : "border-gray-300 bg-white"}`}
          >
            {agreed && (
              <CheckCircle
                size={11}
                className="text-white fill-white"
                strokeWidth={3}
              />
            )}
          </div>
          <span className="text-sm text-gray-600 leading-snug">
            I agree to the{" "}
            <span className="text-blue-600 font-medium hover:underline">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-blue-600 font-medium hover:underline">
              Privacy Policy
            </span>
          </span>
        </label>
        {errors.agreed && (
          <p className="text-xs text-red-500 pl-1">{errors.agreed}</p>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200
          ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98] shadow-md shadow-blue-200"}`}
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
            Creating account...
          </span>
        ) : (
          <>
            Create Account <ArrowRight size={15} />
          </>
        )}
      </button>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400 font-medium">
          OR CONTINUE WITH
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-medium text-gray-700 active:scale-[0.98]">
          <GoogleIcon /> Google
        </button>
        <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-medium text-gray-700 active:scale-[0.98]">
          <GitBranch size={17} /> GitHub
        </button>
      </div>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <button
          onClick={onSwitch}
          className="text-blue-600 font-semibold hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
}
export default SignupForm;
