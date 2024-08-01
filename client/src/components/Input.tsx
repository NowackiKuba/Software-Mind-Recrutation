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
        className={`${className} text-sm  w-full focus:ring-0 focus:outline-none focus-visible:outline-none focus:ring-offset-0 focus-visible:border-blue-400 px-4 focus:shadow-blue-300 focus-visible:ring-0 focus-visible:ring-offset-0  bg-white py-2.5  md:py-1 hover:border-blue-400 duration-150 ease-linear placeholder:text-gray-400 rounded-md border border-border`}
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
