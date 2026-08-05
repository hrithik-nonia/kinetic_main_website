import { useState } from "react";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail("");
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#0d1526] px-8 py-10 flex items-center min-h-[160px]">
      {/* Background blob shapes */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-72 overflow-hidden">
        <div className="absolute right-[-20px] top-[-30px] h-40 w-24 rounded-[40px] bg-[#1a2540] rotate-[-20deg]" />
        <div className="absolute right-[40px] top-[-40px] h-44 w-24 rounded-[40px] bg-[#17213a] rotate-[-20deg]" />
        <div className="absolute right-[-10px] bottom-[-20px] h-40 w-24 rounded-[40px] bg-[#1a2540] rotate-[-20deg]" />
        <div className="absolute right-[50px] bottom-[-30px] h-44 w-24 rounded-[40px] bg-[#17213a] rotate-[-20deg]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl ">
        {/* Heading */}
        <h2 className="text-white text-2xl font-bold leading-tight mb-2">
          Stay ahead of the curve
          <span className="text-blue-500">.</span>
        </h2>

        {/* Subtext */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          Get early access to drops,
          <span className="text-slate-300 font-medium">
            exclusive seller deals
          </span>
          , and
          <span className="text-slate-300 font-medium">future‑tech news</span>
          delivered weekly to your inbox.
        </p>

        {/* Input Row */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex flex-1 items-center gap-2 min-w-[200px] bg-[#1a2640] border border-[#2d3f5e] rounded-lg px-3 h-11 focus-within:border-blue-500 transition-colors">
            <Mail size={16} className="text-slate-500 shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              placeholder="Enter your email address"
              className="bg-transparent text-sm text-slate-300 placeholder-slate-600 outline-none w-full"
            />
          </div>

          <button
            onClick={handleSubscribe}
            className="flex items-center gap-2 h-11 px-5 rounded-lg bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all text-white text-sm font-semibold whitespace-nowrap"
          >
            {subscribed ? (
              <>
                <Sparkles size={15} />
                Subscribed!
              </>
            ) : (
              <>
                Subscribe Now
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </div>

        {/* Legal */}
        <p className="mt-3 text-[11.5px] text-blue-500/70">
          By subscribing, you agree to our{" "}
          <a
            href="#"
            className="underline hover:text-blue-400 transition-colors"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
