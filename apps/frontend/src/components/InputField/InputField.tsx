import c from "./inputfield.module.css";

type InputFieldType = {
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  required?: boolean;
  error?: string;
  pattern?: string;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const InputField = ({
  type,
  placeholder,
  onChange,
  value,
  required = true,
  error,
  pattern,
  onInput,
}: InputFieldType) => {
  return (
    <>
      <input
        type={type}
        className={c.input}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onInput={onInput}
        value={value}
        required={required}
        pattern={pattern}
      />
      {error && <p className={c.error}>{error}</p>}
    </>
  );
};
