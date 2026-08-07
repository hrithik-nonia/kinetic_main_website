function InputField({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  rightElement,
}) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 bg-white
        ${error ? "border-red-400 ring-2 ring-red-100" : "border-gray-200 hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100"}`}
      >
        <Icon
          size={16}
          className={`shrink-0 ${error ? "text-red-400" : "text-gray-400"}`}
        />
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
        />
        {rightElement}
      </div>
      {error && <p className="text-xs text-red-500 pl-1">{error}</p>}
    </div>
  );
}
export default InputField;
