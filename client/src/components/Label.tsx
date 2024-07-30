import React, { ReactNode } from 'react';

const Label = ({
  htmlFor,
  children,
  className,
}: {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <label className={`${className} text-sm font-semibold`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
