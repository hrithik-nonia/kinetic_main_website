// built in imports
import { useState } from "react";
import {
  Mail,
  CheckCircle,
  EyeOff,
  Eye,
  ArrowRight,
  GitBranch,
  Lock,
} from "lucide-react";
import toast from "react-hot-toast";

// custom imports
import InputField from "./InputField";
import GoogleIcon from "./GoogleIcon";
import authService from "../../services/authService";

export default function LoginForm({ onSuccess, onSwitch }) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // initial form data
  const initialFormData = {
    email: "",
    password: "",
  };

  // state for form data
  const [loginFormData, setLoginFormData] = useState(initialFormData);

  // handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // remember check
    if (!remember) {
      newErrors.remember = "Please accept the terms to continue";
    }

    // email validation
    if (!loginFormData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginFormData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // password validation
    if (!loginFormData.password) {
      newErrors.password = "Password is required";
    } else if (loginFormData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(loginFormData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(loginFormData.password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter";
    } else if (!/\d/.test(loginFormData.password)) {
      newErrors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(loginFormData.password)) {
      newErrors.password =
        "Password must contain at least one special character";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    try {
      const response = await authService.login(loginFormData);

      // Sirf access_token store karo
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.user));
      toast.success(`Welcome back, ${response.user.name}!`);

      if (onSuccess) onSuccess();
    } catch (err) {
      const detail = err.response?.data?.detail;
      const message = Array.isArray(detail)
        ? detail[0]?.msg
        : detail || "Login failed. Try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-sm text-gray-500">
          Sign in to your account to continue
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <InputField
          icon={Mail}
          type="email"
          name="email"
          placeholder="Email address"
          value={loginFormData.email}
          handleChange={(e) => {
            handleChange(e);
            setErrors((p) => ({ ...p, email: "", api: "" }));
          }}
          error={errors.email}
        />

        <InputField
          icon={Lock}
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={loginFormData.password}
          handleChange={(e) => {
            handleChange(e);
            setErrors((p) => ({ ...p, password: "", api: "" }));
          }}
          error={errors.Password}
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
      </div>

      <div className="flex items-center justify-between -mt-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <div
            onClick={() => setRemember(!remember)}
            className={`w-4 h-4 rounded flex items-center justify-center border transition-all duration-150 cursor-pointer
              ${remember ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-white"}`}
          >
            {remember && (
              <CheckCircle
                size={11}
                className="text-white fill-white"
                strokeWidth={3}
              />
            )}
          </div>
          <span className="text-sm text-gray-600">Remember me</span>
        </label>
        <button className="text-sm text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors">
          Forgot password?
        </button>
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
            Signing in...
          </span>
        ) : (
          <>
            Login <ArrowRight size={15} />
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
        <a
          href="http://localhost:8000/api/auth/google"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-medium text-gray-700 active:scale-[0.98]"
        >
          <GoogleIcon /> Google
        </a>

        <a
          href="http://localhost:8000/api/auth/github"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-medium text-gray-700 active:scale-[0.98]"
        >
          <GitBranch size={17} /> GitHub
        </a>
      </div>

      <p className="text-center text-sm text-gray-500">
        Don't have an account?
        <button
          onClick={onSwitch}
          className="text-blue-600 font-semibold hover:underline"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}
