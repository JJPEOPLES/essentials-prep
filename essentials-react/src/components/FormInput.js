import React from 'react';

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  required = false,
  ...props
}) => {
  const isError = error && touched;
  
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={isError ? 'form-control error' : 'form-control'}
          rows="6"
          {...props}
        />
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={isError ? 'form-control error' : 'form-control'}
          {...props}
        >
          {props.children}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={isError ? 'form-control error' : 'form-control'}
          {...props}
        />
      )}
      {isError && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FormInput;