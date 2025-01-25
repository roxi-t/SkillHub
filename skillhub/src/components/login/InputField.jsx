function InputField({ type, placeholder, value, onChange, error }) {
  return (
    <div className="w-full mb-3">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-gray-100 text-sm text-right py-3 px-4 rounded-full font-yekan font-bold ${
          error ? "border border-red-500" : ""
        }`}
      />
      {error && (
        <p className="text-red-500 text-xs text-right mt-2 mb-2 font-yekan font-bold">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;
