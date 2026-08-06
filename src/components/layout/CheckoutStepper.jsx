const steps = ["Cart", "Shipping", "Payment"];

export default function CheckoutStepper({ currentStep = 1 }) {
  return (
    <div className="flex items-center justify-center pb-8 px-4">
      <div className="flex items-center w-full max-w-lg">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              {/* Step circle + label */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-medium transition-colors
                    ${
                      isActive || isCompleted
                        ? "bg-blue-600 text-white"
                        : "border border-gray-300 text-gray-400"
                    }`}
                >
                  {stepNumber}
                </div>
                <span
                  className={`text-sm transition-colors
                    ${isActive ? "font-medium text-gray-900" : "text-gray-400"}`}
                >
                  {step}
                </span>
              </div>

              {/* Connector line (last step ke baad nahi) */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-px bg-gray-300 mx-3" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
