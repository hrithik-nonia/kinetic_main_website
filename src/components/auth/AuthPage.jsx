// built in imports
import { useState } from "react";

// custom imports
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthPage() {
  const [tab, setTab] = useState("login");
  const [animating, setAnimating] = useState(false);
  const [displayTab, setDisplayTab] = useState("login");

  const switchTab = (next) => {
    if (next === tab || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setDisplayTab(next);
      setTab(next);
      setAnimating(false);
    }, 180);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[460px]">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
          {/* Tab Toggle */}
          <div className="flex p-1.5 m-4 mb-0 bg-gray-100 rounded-xl">
            {["login", "signup"].map((t) => (
              <button
                key={t}
                onClick={() => switchTab(t)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                  ${
                    tab === t
                      ? "bg-white text-gray-900 shadow-sm shadow-gray-200"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                {t === "login" ? "Login" : "Sign Up"}
              </button>
            ))}
          </div>

          {/* Form area */}
          <div
            className="px-6 py-6 transition-all duration-200"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(6px)" : "translateY(0)",
            }}
          >
            {displayTab === "login" ? (
              <LoginForm onSwitch={() => switchTab("signup")} />
            ) : (
              <SignupForm onSwitch={() => switchTab("login")} />
            )}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Protected by SSL encryption · © 2025 ShopElite
        </p>
      </div>
    </div>
  );
}
