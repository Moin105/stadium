import React from 'react'
import arrowGray from '../assets/svg/arrow-grey.svg';
import backArrow from '../assets/svg/back-arrow.svg';
import shoppayLogo from '../assets/svg/shoppay-logo.svg';
import gPay from '../assets/svg/gpay.svg';
import paypal from '../assets/svg/paypal.svg';
import card from '../assets/svg/card.svg';
import lock from '../assets/svg/lock.svg';
import calenderCheckout from '../assets/svg/calender-checkout.svg';
import home from '../assets/svg/home.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';

function Checkout() {
  return (
    <div>
        <Header className="max-md:hidden" />
        <div className="md:hidden w-full h-[63px] bg-[#FFFFFF] px-[17px] flex items-center">
            <div
                className="w-[31.32px] h-[31.32px] flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
                <img src={backArrow} alt="arrow"/>
            </div>
            <p className="text-base font-semibold flex-1 -ml-[31.32px] text-center">Checkout</p>
        </div>
        <div className="w-full bg-neutral-100">
            <div className="max-w-[598px] pb-[34px] md:pb-[100px] max-md:px-4 pt-[20px] md:pt-[60px] mx-auto">
                <div className=" hidden md:block">
                    <div className="flex items-center gap-1.5">
                        <span className="flex text-[14px] text-[#201E1E99]">Home </span>
                        <img className="w-4 h-4" src={arrowGray} alt="arrow"/>
                        <span className="flex text-[14px] text-[#201E1E99]">My Cart </span>
                        <img className="w-4 h-4" src={arrowGray} alt="arrow"/>
                        <span className="flex text-[14px] text-black">Checkout </span>
                    </div>
                    <div className="mt-[10px]">
                        <span className="font-semibold text-[40px] leading-[50px]">Checkout</span>
                    </div>
                </div>
                <div className="w-full bg-white p-3 md:p-5 rounded-[10px] md:mt-[30px]">
                    <div
                        className=" py-[15px] h-[60px] px-5 flex justify-between items-center mx-auto bg-[#201E1E0D] rounded-[10px] border-[1px] border-[#201E1E0D]">
                        <span className="text-sm leading-[21px] md:text-base md:leading-[24px] font-medium">Total</span>
                        <span className="text-xl md:text-[24px] leading-[30px] font-semibold">$550</span>
                    </div>
                    <div
                        className="rounded-[10px] flex justify-between items-center mt-[15px] md:mt-5 pb-3 md:pb-2.5 border-b-[1px] border-[#201E1E0D]">
                        <div className="flex flex-col ">
                            <span className="text-[12px] leading-[22px] text-[#2F2F2F] ">Name</span>
                            <span className="text-[14px] leading-[30px] font-semibold">Zeeshan Khan</span>
                        </div>
                        <span className="text-[12px] leading-[18px] font-semibold text-[#E82F24]">Change</span>
                    </div>
                    <div className="rounded-[10px] flex justify-between items-center mt-3 md:mt-2.5">
                        <div className="flex flex-col ">
                            <span className="text-[12px] leading-[22px] text-[#2F2F2F] ">Email</span>
                            <span className="text-[14px] leading-[30px] font-semibold">Zeeshankhan@mail.com</span>
                        </div>
                        <span className="text-[12px] leading-[18px] font-semibold text-[#E82F24]">Change</span>
                    </div>
                </div>
                <div className="mt-5 w-full">
                    <span className="text-sm md:text-base font-medium leading-6 md:leading-[26px]">Select Payment method</span>
                    <div className="flex gap-[14px] max-md:flex-col mt-3.5 md:mt-[15px]">
                        <button className="bg-[#5B32F7] h-12 rounded-[10px] w-full flex justify-center items-center md:w-[190px]">
                            <img src={shoppayLogo} alt="shoppay"/>
                        </button>
                        <div className="flex flex-row gap-3.5">
                            <button className="bg-[#121212] h-12 rounded-[10px] w-full flex justify-center items-center md:w-[190px]">
                            <img src={gPay} alt="gpay"/>
                            </button>
                            <button className="bg-[#FFC339] h-12 rounded-[10px] w-full flex justify-center items-center md:w-[190px]">
                            <img src={paypal} alt="paypal"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center pt-[30px] md:pt-10 pb-[18.59px]">
                    <span className="w-[268px] h-[1px] mx-auto bg-[#0000001A]"></span>
                    <span className=" text-[14px] leading-[22px] text-[#201E1E99] px-[23px]">or</span>
                    <span className="w-[268px] h-[1px] mx-auto bg-[#0000001A]"></span>
                </div>
                <Input label="First Name" placeholder="Enter First Name" />
                <Input className="mt-[20px]" icon={card} label="Enter Card Number" placeholder="Enter Card Number" />
                
                <div className="w-full mt-5 flex justify-between gap-[13px] md:gap-[22.66px]">
                    <Input className="flex-1" icon={calenderCheckout} label="Expiry Date" placeholder="Expiry Date" />
                    <Input className="flex-1" icon={lock} label="CVC" placeholder="Enter CVC" />
                </div>
                <div className="mt-[20px] flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 "/>
                    <span className="text-[14px] leading-[22px] text-[#201E1E99]">Set as default method</span>
                </div>
                <Button title="Confirm Order" className="w-full h-12 mt-[40px]" />
            </div>
        </div>
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
    </div>
  )
}

export default Checkout