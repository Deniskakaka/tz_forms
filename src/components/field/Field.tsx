type Props = {
  classStyle: string;
  type: string;
  title: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  textError?: string;
};

export const Field: React.FC<Props> = ({
  classStyle,
  type,
  title,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  textError,
}) => {
  return (
    <label className={classStyle}>
      <h3 className="title">{title}</h3>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
      />
      <p>{!error && textError}</p>
    </label>
  );
};
