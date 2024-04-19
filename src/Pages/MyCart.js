import React from 'react'
import backArrow from '../assets/svg/back-arrow.svg';
import arrowGray from '../assets/svg/arrow-grey.svg';
import home from '../assets/svg/home.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItemCard from '../components/CartItemCard';

function MyCart() {
  return (
    <>
        <Header className="max-md:hidden" />
    {/* header for mobile */}
    <div className="md:hidden w-full h-[63px] bg-[#FFFFFF] px-[17px] flex items-center">
        <div
            className="w-[31.32px] h-[31.32px] flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
            <img src={backArrow} alt="arrow"/></div>
        <p className="text-base font-semibold flex-1 -ml-[31.32px] text-center">My Cart</p>
    </div>
    {/* Content */}
    <div className="bg-neutral-100">
        <div className="container-lg px-4 md:px-[112px] pt-5 md:pt-[60px] pb-[38px] md:pb-[100px]">
            <div className="max-md:hidden flex items-center gap-1.5 mb-[15px]">
                <span className="flex text-sm leading-[21px] text-[#201E1E99]">Home </span>
                <img className="w-3 h-3" src={arrowGray} alt="arrow"/>
                <span className="flex text-[14px] text-black">My Cart</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 items-start">
                <div className="flex-1 bg-white rounded-[10px] shadow-small max-md:w-full">
                    <div className="max-md:hidden py-[15px] pl-[46px] pr-[37px] border-b border-[#0000000D] flex items-center justify-between">
                        <p className="text-base leading-[26px] text-[#201E1E99]">Product</p>
                        <div className="flex items-center gap-[116px]">
                            <p className="text-base leading-[26px] text-[#201E1E99]">Quantity</p>
                            <p className="text-base leading-[26px] text-[#201E1E99]">Product</p>
                        </div>
                    </div>
                    <div className='last-border-none'>
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                    </div>
                </div>
                <div className="w-full lg:w-[392px]">
                    <div className="flex gap-4 justify-between items-center">
                        <p className="text-sm md:text-base leading-[21px] md:leading-[26px]">Subtotal</p>
                        <p className="text-sm md:text-base leading-[21px] md:leading-[26px]">$600</p>
                    </div>
                    <div className="flex gap-4 justify-between items-center mt-5 md:mt-[25px]">
                        <p className="text-sm md:text-base leading-[21px] md:leading-[26px]">Tax</p>
                        <p className="text-sm md:text-base leading-[21px] md:leading-[26px]">10%</p>
                    </div>
                    <div className="flex gap-4 justify-between items-center mt-5 md:mt-[25px]">
                        <p className="text-sm md:text-base leading-[21px] md:leading-[26px]">Total</p>
                        <p className="text-base md:text-[24px] leading-[22px] md:leading-[34px] font-semibold">$550</p>
                    </div>
                    <button className="bg-[#E82F24] text-sm text-white h-12 w-full border border-[#E82F24] font-semibold rounded-full mt-[30px] mt-[35.64px]">Checkout</button>
                </div>
            </div>
        </div>
    </div>
    {/* Footer */}
    <Footer />
    <div className="md:hidden card-shadow-xl w-full fixed bottom-0 left-0 px-6 pt-[18px] pb-[15px] bg-white rounded-t-[30.5px] flex items-center justify-between gap-3">
        <Link to="/" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src={home} className="mx-auto mb-[5px]" alt="icon"/>
            Home
        </Link>
        <Link to="/all-teams" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src={teams} className="mx-auto mb-[5px]" alt="icon"/>
            Teams
        </Link>
        <Link to="/all-tournaments" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src={award} className="mx-auto mb-[5px]" alt="icon"/>
            Tournament
        </Link>
        <Link to="/account" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src={person} className="mx-auto mb-[5px]" alt="icon"/>
            Account
        </Link>
    </div>
    </>
  )
}

export default MyCart