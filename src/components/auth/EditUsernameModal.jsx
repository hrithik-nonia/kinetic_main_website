// built in imports
import { useState, useEffect, useRef } from "react";
import { X, Check, Loader2, User } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// custom imports
import authService from "../../services/authService";
import toast from "react-hot-toast";

export default function EditUsernameModal({
  isOpen = true,
  currentName = "Hritik Nonia",
  onClose,
}) {
  const [name, setName] = useState(currentName);
  const [isFocused, setIsFocused] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef(null);

  const maxLength = 50;
  const isUnchanged = name.trim() === currentName;
  const isEmpty = name.trim().length === 0;

  // request send karne ke liya client banaya
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => authService.editUser(data),

    onSuccess: () => {
      // ← yeh karo — "me" query invalidate hogi → automatic refetch
      queryClient.invalidateQueries({ queryKey: ["me"] });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1400);
    },

    onError: (err) => {
      const detail = err.response?.data?.detail;
      const message = Array.isArray(detail)
        ? detail[0]?.msg
        : detail || "Update failed";
      toast.error(message);
    },
  });

  // Phir isSaveDisabled
  const isSaveDisabled = isUnchanged || isEmpty || isPending || isSuccess;
  // ---------------------------

  // Auto focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Handle Save Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSaveDisabled) return;
    mutate({ name: name.trim() }); // ← bas itna
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Translucent Glass Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      />

      {/* Floating Modal Surface */}
      <div className="relative w-full max-w-[420px] rounded-3xl bg-white p-6 sm:p-8 shadow-2xl shadow-blue-950/15 border border-slate-100 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Success Banner (Micro-interaction) */}
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in-90 duration-300">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50 mb-4">
              <Check className="h-7 w-7 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Name updated!
            </h3>
            <p className="text-sm text-slate-500 mt-1 font-medium">
              Your profile has been saved successfully.
            </p>
          </div>
        ) : (
          <>
            {/* Top Accent Indicator & Close Button */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-6 rounded-full bg-blue-600" />
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              </div>

              <button
                type="button"
                onClick={onClose}
                className="group p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100/80 transition-all duration-200 focus:outline-none"
                aria-label="Close modal"
              >
                <X className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
              </button>
            </div>

            {/* Modal Heading & Description */}
            <div className="space-y-1.5 mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Edit your name
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                This is how your name will appear across Kinetic Market.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Premium Input Container */}
              <div className="space-y-2">
                <div
                  className={`relative flex items-center rounded-2xl border bg-slate-50/60 px-4 pt-5 pb-2 transition-all duration-200 ${
                    isFocused
                      ? "border-blue-500 bg-white ring-4 ring-blue-500/15 shadow-sm"
                      : "border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  {/* Icon */}
                  <User
                    className={`absolute right-4 h-4 w-4 transition-colors duration-200 ${
                      isFocused ? "text-blue-600" : "text-slate-400"
                    }`}
                  />

                  {/* Floating Label */}
                  <label
                    htmlFor="username-input"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none font-medium ${
                      isFocused || name
                        ? "top-2 text-[11px] font-semibold text-blue-600 tracking-wide uppercase"
                        : "top-3.5 text-sm text-slate-400"
                    }`}
                  >
                    Display Name
                  </label>

                  {/* Input Field */}
                  <input
                    id="username-input"
                    ref={inputRef}
                    type="text"
                    value={name}
                    maxLength={maxLength}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full bg-transparent text-base font-semibold text-slate-900 outline-none placeholder-transparent pr-8"
                  />
                </div>

                {/* Validation & Character Counter */}
                <div className="flex items-center justify-between px-1 text-xs">
                  {isEmpty ? (
                    <span className="text-rose-500 font-medium">
                      Name cannot be empty
                    </span>
                  ) : (
                    <span className="text-slate-400 font-medium">
                      Visible to buyers & sellers
                    </span>
                  )}

                  <span
                    className={`font-semibold tracking-wider ${
                      name.length >= maxLength
                        ? "text-rose-500"
                        : "text-slate-400"
                    }`}
                  >
                    {name.length}/{maxLength}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                {/* Cancel (Ghost Button) */}
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 active:scale-[0.98] transition-all duration-150 focus:outline-none"
                >
                  Cancel
                </button>

                {/* Save Changes (Primary Button) */}
                <button
                  type="submit"
                  disabled={isSaveDisabled}
                  className={`relative inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 active:scale-[0.98] ${
                    isSaveDisabled
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                      : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
                  }`}
                >
                  {isPending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Saving...
                    </span>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
