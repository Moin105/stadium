import React from 'react'

const Button = ({title, variant = "primary", className}) => {
    const baseClasses = "text-sm w-full h-10 border font-semibold rounded-full";

    const variantClasses = variant === 'primary' ?
      "bg-[#E82F24] text-white border-[#E82F24]" :
      "bg-white text-[#E82F24] border-[#E82F24]";
  
    const buttonClasses = `${baseClasses} ${variantClasses} ${className}`;
  return (
    <button className={buttonClasses}>{title}</button>
    )
}

export default Button;
