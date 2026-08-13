// built in imports
import { useState } from "react";
import {
  User,
  Mail,
  EyeOff,
  Eye,
  Check,
  ArrowRight,
  GitBranch,
  Lock,
} from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

// custom imports
import InputField from "./InputField";
import GoogleIcon from "./GoogleIcon";
import authService from "../../services/authService";
import OTPForm from "./OTPForm";

function SignupForm({ onSwitch }) {
  // states for ui
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showOTP, setShowOTP] = useState(false); // ← state add karo
  const [userEmail, setUserEmail] = useState(""); // ← email store karo

  // initial form data
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    confirm: "",
  };

  // terms & condition check button
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  // track form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // validate before submitting
  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Full name is required";
    if (!formData.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Enter a valid email";
    if (!formData.password) e.password = "Password is required";
    else if (formData.password.length < 6) e.password = "Minimum 6 characters";
    if (!formData.confirm) e.confirm = "Please confirm your password";
    else if (formData.confirm !== formData.password)
      e.confirm = "Passwords do not match";
    if (!agreed) e.agreed = "Please accept the Terms & Conditions";
    return e;
  };

  // submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        // eslint-disable-next-line
        const { confirm, ...signupData } = formData;
        // send data to api
        await authService.signup(signupData);

        setUserEmail(formData.email); // ← email save karo

        toast.success("OTP sent to your email!");
        setShowOTP(true);
      } catch (err) {
        const detail = err.response?.data?.detail;

        const message = Array.isArray(detail)
          ? detail[0]?.msg || "Validation failed"
          : detail || "Signup failed. Try again.";

        setErrors({ api: message });
        toast.error(message); // ab string guarantee hai
      } finally {
        setLoading(false);
      }
    }
  };

  // OTP screen dikhao agar signup success
  if (showOTP) {
    return (
      <OTPForm
        email={userEmail}
        onSuccess={onSwitch} // verify hone ke baad login pe bhejo
      />
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Create account</h1>
        <p className="text-sm text-gray-500">
          Join us today — it's free to get started
        </p>
      </div>

      {/* API Error Message Alert */}
      {errors.api && (
        <div className="p-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl font-medium">
          {errors.api}
        </div>
      )}

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <InputField
          icon={User}
          placeholder="Full name"
          value={formData.name}
          name="name"
          handleChange={(e) => {
            handleChange(e);
            setErrors((p) => ({ ...p, name: "", api: "" }));
          }}
          error={errors.name}
        />

        <InputField
          icon={Mail}
          type="email"
          placeholder="Email address"
          value={formData.email}
          name="email"
          handleChange={(e) => {
            handleChange(e);
            setErrors((p) => ({ ...p, email: "", api: "" }));
          }}
          error={errors.email}
        />

        <InputField
          icon={Lock}
          type={showPass ? "text" : "password"}
          placeholder="Password"
          value={formData.password}
          name="password"
          handleChange={(e) => {
            handleChange(e);
            setErrors((p) => ({ ...p, password: "", api: "" }));
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
          value={formData.confirm}
          name="confirm"
          handleChange={(e) => {
            handleChange(e);
            setErrors((p) => ({ ...p, confirm: "", api: "" }));
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

        {/* Checkbox Section */}
        <div className="flex flex-col gap-1 mt-1">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked);
                setErrors((p) => ({ ...p, agreed: "", api: "" }));
              }}
              className="sr-only"
            />
            <div
              className={`w-4 h-4 mt-0.5 rounded flex items-center justify-center border transition-all duration-150 shrink-0
              ${
                agreed
                  ? "bg-blue-600 border-blue-600 text-white"
                  : errors.agreed
                    ? "border-red-400 bg-white"
                    : "border-gray-300 bg-white"
              }`}
            >
              {agreed && <Check size={12} strokeWidth={3} />}
            </div>
            <span className="text-sm text-gray-600 leading-snug">
              I agree to the
              <Link
                to="/legal?section=terms-of-service"
                onClick={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                className="text-blue-600 font-medium hover:underline"
              >
                Terms & Conditions
              </Link>
              and
              <Link
                to="/legal?section=privacy-policy"
                onClick={(e) => e.stopPropagation()}
                className="text-blue-600 font-medium hover:underline"
              >
                Privacy Policy
              </Link>
            </span>
          </label>
          {errors.agreed && (
            <p className="text-xs text-red-500 pl-1">{errors.agreed}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 py-3 mt-1 rounded-xl font-semibold text-sm text-white transition-all duration-200 cursor-pointer ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98] shadow-md shadow-blue-200"
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
              Creating account...
            </span>
          ) : (
            <>
              Create Account <ArrowRight size={15} />
            </>
          )}
        </button>
      </form>

      <div className="flex items-center gap-3 my-1">
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
          type="button"
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
          type="button"
          className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-medium text-gray-700 active:scale-[0.98]"
        >
          <GitBranch size={17} /> GitHub
        </a>
      </div>

      <p className="text-center text-sm text-gray-500">
        Already have an account?
        <button
          type="button"
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
