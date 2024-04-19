import React from 'react'
import arrow from '../../assets/svg/arrow.svg';

const SectionHeader = ({title}) => {
  return (
    <div className="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
        <h2 className="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">{title}</h2>
        <a className="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="upcoming">View all 
        <img src={arrow} className="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow" /></a>
    </div>
  )
}

export default SectionHeader