import c from "./inputfield.module.css";

type InputFieldType = {
  label?: string;
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  required?: boolean;
  error?: string;
  pattern?: string;
};

export const InputField = ({
  label,
  type,
  placeholder,
  onChange,
  value,
  required = true,
  error,
  pattern,
}: InputFieldType) => {
  return (
    <>
      <label className={c.label}> {label}</label>

      <input
        type={type}
        className={c.input}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        required={required}
        pattern={pattern}
      />

      {error && <p className={c.error}>{error}</p>}
    </>
  );
};
