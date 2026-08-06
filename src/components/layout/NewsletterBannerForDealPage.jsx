import { Mail } from "lucide-react";

export default function NewsletterBanner() {
  return (
    <div className="w-full bg-slate-50 border border-gray-300 rounded-2xl px-6 py-10 sm:px-10 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
        Never Miss a Deal
      </h2>
      <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
        Subscribe to our newsletter and get exclusive access to flash sales and
        premium offers delivered straight to your inbox.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <div className="relative w-full sm:w-80">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="email"
            placeholder="Your email address"
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
