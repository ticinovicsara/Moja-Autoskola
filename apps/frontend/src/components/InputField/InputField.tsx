import c from "./inputfield.module.css";

type InputFieldType = {
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  required?: boolean;
  error?: string;
};

export const InputField = ({
  type,
  placeholder,
  onChange,
  value,
  required = true,
  error,
}: InputFieldType) => {
  return (
    <>
      <input
        type={type}
        className={c.input}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        required={required}
      />
      {error && <p className={c.error}>{error}</p>}
    </>
  );
};
