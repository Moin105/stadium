import React from 'react'

const Input = ({label, icon, placeholder, type="text", className }) => {
  return (
    <div className={`w-full ${className}`}>
        <span className="text-[14px] leading-[22px] font-medium">{label}</span>
        <div className="mt-1.5 bg-white flex items-center pr-5 w-full rounded-full h-[48px] overflow-hidden">
            {icon && <img src={icon} className="w-5 h-5 ml-4" alt="search"/>}
            <input
                className={`text-black text-sm w-full border-none bg-transparent px-2.5 py-1 outline-none focus:outline-none placeholder:text-[#06060680] placeholder:text-[14px] ${icon ? "px-2.5" : "px-5"}`}
                type={type} placeholder={placeholder} />
        </div>
    </div>
  )
}

export default Input;