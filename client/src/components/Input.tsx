import React from 'react';

const Input = React.forwardRef(
  (
    {
      onChange,
      onBlur,
      name,
      placeholder,
      defaultValue,
      className,
    }: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
      name: string;
      placeholder?: string;
      defaultValue?: any;
      className?: string;
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <input
        className={`${className} w-full text-sm px-4 bg-white py-1 hover:border-blue-400 duration-150 ease-linear placeholder:text-gray-400 rounded-md border border-border`}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        ref={ref}
      />
    );
  }
);

export default Input;
