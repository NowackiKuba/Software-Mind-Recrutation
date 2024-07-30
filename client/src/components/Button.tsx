import React, { ReactNode } from 'react';

const Button = ({
  children,
  onClick,
  type,
  disabled,
}: {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className='py-2 font-[600] disabled:bg-blue-300 disabled:cursor-not-allowed cursor-pointer rounded-lg text-white duration-100 ease-linear bg-blue-500 hover:bg-blue-600'
    >
      {children}
    </button>
  );
};

export default Button;
