import c from "./Inputfield.module.css";

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
            {label && <label className={c.label}> {label}</label>}
            <div className={c.inputDiv}>
                <input
                    type={type}
                    className={`${c.input} ${error ? c.inputError : ""}`}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                    required={required}
                    pattern={pattern}
                />

                {error && <p className={c.error}>{error}</p>}
            </div>
        </>
    );
};
