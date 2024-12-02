import classNames from 'classnames';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg'; // size prop to define the button size
  color?: 'primary' | 'secondary' | 'danger' | 'link-secondary' | 'link'; // optional color prop
  className?: string; // optional custom className for more styling
};

const Button: React.FC<ButtonProps> = ({ children, onClick, size = 'md', color = 'primary', className = '' }) => {
  const sizeClasses = {
    xs: 'px-2 py-1 text-sm',
    sm: 'px-3 py-1.5 text-base',
    md: 'px-[] px-[24px] py-[6px] text-lg',
    lg: 'px-6 py-3 text-xl',
  };

  const colorClasses = {
    primary: 'bg-btn-primary text-white',
    secondary: 'bg-white text-btn-primary',
    link: 'bg-transparent text-black',
    'link-secondary': 'bg-transparent text-white',
    danger: 'bg-red-500 text-white hover:bg-red-700',
  };

  return (
    <button
      onClick={onClick}
      className={classNames(
        `hover:opacity-70 transition-all duration-300 ease-in rounded-[8px] focus:outline-none`,
        sizeClasses[size],
        className,
        colorClasses[color],
      )}>
      {children}
    </button>
  );
};

export default Button;
