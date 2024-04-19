import React from 'react'
import backArrow from '../assets/svg/back-arrow.svg';
import hide from '../assets/svg/hide.svg';
import home from '../assets/svg/home.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

function SignUp() {
  return (
    <div>
        <Header className="max-md:hidden" />
        <div className="md:hidden w-full h-[63px] bg-[#FFFFFF] px-[17px] flex items-center">
            <div
                className="w-[31.32px] h-[31.32px] flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
                <img src={backArrow} alt="arrow"/>
            </div>
            <p className="text-base font-semibold flex-1 -ml-[31.32px] text-center">Sign up</p>
        </div>
        <div className="w-full bg-neutral-100">
            <div className="max-w-[598px] md:pb-[100px] md:pt-[73px] mx-auto">
                <div className="hidden md:block text-center">
                    <h1 className="font-semibold text-[40px] leading-[50px]"> Sign Up</h1>
                </div>
                <div className="w-full bg-white px-4 md:px-20 pt-[27.69px] md:mt-10 md:pt-[33px] pb-[31px] border md:rounded-[10px] border-[#2F2F2F0D]">
                    <div className="flex gap-[13px] md:gap-[20px]">
                        <div className="flex-1">
                            <p className="font-medium text-[14px] leading-[22px]">First Name</p>
                            <div className="flex mt-2 items-center pr-5 rounded-full border border-[#e8e8e8] h-[52px] overflow-hidden">
                                <input className="text-black text-sm w-full border-none bg-transparent md:pl-[21px] px-[14px] outline-none focus:outline-none placeholder:text-[#201E1E66]" type="text" name="fname" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-[14px] leading-[22px]">Last Name</p>
                            <div className="flex mt-2 items-center pr-5 rounded-full border border-[#e8e8e8] h-[52px] overflow-hidden">
                                <input className="text-black text-sm w-full border-none bg-transparent md:pl-[21px] px-[14px] py-1 outline-none focus:outline-none placeholder:text-[#201E1E66]" type="text" name="lname" placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[15px]" >
                        <p className="font-medium text-[14px] leading-[22px]">Email</p>
                        <div className="flex mt-2 items-center pr-5 rounded-full border border-[#e8e8e8] h-[52px] overflow-hidden">
                            <input className="text-black text-sm w-full border-none bg-transparent md:pl-[21px] px-[14px] py-1 outline-none focus:outline-none placeholder:text-[#201E1E66]" type="text" name="lname" placeholder="Email" />
                        </div>
                    </div>
                    <div className="mt-[15px]" >
                        <p className="font-medium text-[14px] leading-[22px]">Password</p>
                        <div className="flex mt-2 items-center pr-5 rounded-full border border-[#e8e8e8] h-[52px] overflow-hidden">
                            <input className="text-black text-sm w-full border-none bg-transparent md:pl-[21px] px-[14px] py-1 outline-none focus:outline-none placeholder:text-[#201E1E66]" type="text" name="password" placeholder="Password" />
                            <img src={hide} className=" w-5 h-6" alt="hide"/>
                        </div>
                    </div>
                    <div className="mt-[15px]" >
                        <p className="font-medium text-[14px] leading-[22px]">Confirm Password</p>
                        <div className="flex mt-2 items-center pr-5 rounded-full border border-[#e8e8e8] h-[52px] overflow-hidden">
                            <input className="text-black text-sm w-full border-none bg-transparent md:pl-[21px] px-[14px] py-1 outline-none focus:outline-none placeholder:text-[#201E1E66]" type="text" name="lname" placeholder="Confirm Password" />
                            <img src={hide} className=" w-5 h-6" alt="hide"/>
                        </div>
                    </div>
                    <div className="mt-[15px] md:mt-[30px]">
                        <button className="bg-[#E82F24] text-sm text-white h-12 md:h-[60px] w-full py-[13.5px] border border-[#E82F24] font-semibold rounded-full">
                            <p className="text-[14px] leading-[21px] font-semibold">
                                Sign up
                            </p>
                        </button>  
                    </div>
                    <div className=" text-center mt-5 md:mt-[30px]">
                        <p className="text-xstext-[#201E1E99] leading-[20px]">
                            By continuing, you agree to Stadiumz <span className="text-[#201E1ECC] underline">Terms of Service.</span>
                            We will manage information about you as described in our <span className="text-[#201E1ECC] underline">Privacy Policy,</span > &  <span className="text-[#201E1ECC] underline">Cookie Policy.</span>
                        </p>
                    </div>
                    <div className="text-center mt-[30px] md:mt-5 ">
                        <p className="text-[14px] leading-[22px] text-[#201E1ECC]">Already have an account? <span className="font-semibold text-[#E82F24]">Login</span></p>
                    </div>
                </div>
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

export default SignUp