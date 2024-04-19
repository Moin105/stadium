import React from 'react';
import deleteIcon from '../../assets/svg/delete.svg';
import stakeShirtPng from '../../assets/png/stake-shirt.png';
import manchesterUnitedPng from '../../assets/png/manchester-united.png';
import { Link } from "react-router-dom";

const CartItemCard = () => {
  return (
    <div className="pt-[15px] pb-5 md:py-[25px] pl-[15px] md:pl-2.5 pr-5 md:pr-[37px] flex md:items-center border-b border-[#0000000D]">
        <img src={deleteIcon} className="w-6 h-6 mr-3 max-md:hidden" alt="bucket"/>
        <div className="flex mr-2.5 md:mr-5">
            <div className="w-[50px] md:w-[77.71px] h-[50px] md:h-[77.71px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                <img src={manchesterUnitedPng} className="w-full h-full mt-3.5" alt="image"/>
            </div>
            <div className="z-10 -ml-[18px] w-[50px] md:w-[77.71px] h-[50px] md:h-[77.71px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                <img src={stakeShirtPng} className="w-full h-full mt-1 object-contain" alt="image"/>
            </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between flex-1 gap-4 flex-wrap">
            <div>
                <div className="px-2.5 py-[4.5px] md:py-[5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                <p className="text-sm md:text-xl leading-[30px] md:my-1.5 md:mt-[5px] md:mb-0">Liverpool vs Man City</p>
                <p className="text-xs leading-[22px] md:text-sm md:leading-[24px] text-[#201E1ECC]">Kit Room</p>
            </div>
            <div className="flex justify-between gap-4 md:gap-[70px] h-fit md:w-[246.58px]">
                <div className="w-[88px] h-[34px] md:h-[38px] md:w-[110px] border border-[#201E1E1A] flex items-center justify-center gap-4 rounded-[10px]">
                    <Link to="#" className="text-base leading-6">+</Link>
                    <p className="text-base leading-6 text-[#201E1E99]">1</p>
                    <Link to="#" className="text-base leading-6">-</Link>
                </div>
                <p className="text-sm md:text-xl leading-[22px] md:leading-[30px] self-end">$299</p>
            </div>
        </div>
    </div>
  )
}

export default CartItemCard