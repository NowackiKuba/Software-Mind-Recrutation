import React from 'react';

const Select = React.forwardRef<
  HTMLSelectElement,
  {
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    onBlur: React.FocusEventHandler<HTMLSelectElement>;
    name: string;
    placeholder?: string;
    defaultValue?: any;
    className?: string;
    options: { value: string; label: string }[];
  }
>(
  (
    { onChange, onBlur, name, placeholder, defaultValue, className, options },
    ref
  ) => {
    return (
      <select
        className={`${className} text-sm  w-full focus:ring-0 focus:outline-none focus-visible:outline-none focus:ring-offset-0 focus-visible:border-blue-400 px-4 focus:shadow-blue-300 focus:shadow-sm focus-visible:ring-0 focus-visible:ring-offset-0  bg-white py-2.5  md:py-1 hover:border-blue-400 duration-150 ease-linear placeholder:text-gray-400 rounded-md border border-border`}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        defaultValue={defaultValue}
        ref={ref}
      >
        <option value=''>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);
export default Select;
