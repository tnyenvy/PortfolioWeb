import React from 'react';
import './Button.scss';

const Button = ({ 
  children, 
  variant = 'primary', 
  type = 'button',
  onClick,
  className = '',
  ...props 
}) => {
  const hasCustomIcon = React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.props.className?.includes('btn__icon-wrapper')
  );

  return (
    <button
      type={type}
      className={`btn btn--${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="btn__text">{children}</span>
      {variant === 'primary' && !hasCustomIcon && (
        <span className="btn__icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </button>
  );
};

export default Button;