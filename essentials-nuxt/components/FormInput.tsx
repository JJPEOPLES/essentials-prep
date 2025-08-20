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
  
  const baseInputClasses = `
    w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 
    bg-white/50 backdrop-blur-sm text-gray-900 placeholder-gray-500
    focus:outline-none focus:ring-4 focus:ring-blue-500/20 
    hover:bg-white/70 hover:shadow-md
  `;
  
  const normalClasses = `${baseInputClasses} border-gray-200 focus:border-blue-500`;
  const errorClasses = `${baseInputClasses} border-red-400 focus:border-red-500 focus:ring-red-500/20`;

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={isError ? errorClasses : normalClasses}
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
          className={isError ? errorClasses : normalClasses}
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
          className={isError ? errorClasses : normalClasses}
          {...props}
        />
      )}
      
      {isError && (
        <div className="flex items-center space-x-2 text-red-600 text-sm mt-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default FormInput;