import React, { ReactNode } from 'react';

const Button = ({
  children,
  onClick,
  type,
  disabled,
  className,
}: {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${className} py-2 font-[600] px-4 disabled:bg-blue-300 disabled:cursor-not-allowed cursor-pointer rounded-lg text-white duration-100 ease-linear bg-blue-500 hover:bg-blue-600`}
    >
      {children}
    </button>
  );
};

export default Button;
