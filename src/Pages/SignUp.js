import React from 'react'
import backArrow from '../assets/svg/back-arrow.svg';
import logo from '../assets/png/logo.png';
import footerLogo from '../assets/svg/footer-logo.svg';
import blueLogo from '../assets/svg/blue-logo.svg';
import search from '../assets/svg/search.svg';
import trolly from '../assets/svg/trolly.svg';
import hide from '../assets/svg/hide.svg';
import facebookLogo from '../assets/svg/facebook-logo.svg';
import youtubeLogo from '../assets/svg/youtube-logo.svg';
import instaLogo from '../assets/svg/insta-logo.svg';
import xLogo from '../assets/svg/x-logo.svg';
import home from '../assets/svg/home.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import person from '../assets/svg/person.svg';

function SignUp() {
  return (
    <div>
        <header className="container-lg max-w-[1214px] hidden md:block px-4 mx-auto py-5 bg-white">
        <div className="flex justify-between items-center gap-4">
            <img src={logo} className="h-6 w-[157px]" alt="logo"/>
            <div className="flex gap-[30px]">
                <div className="gap-10 hidden md:flex">
                    <ul className="flex gap-5 lg:gap-10 items-center text-sm">
                        <li><a href="home">Home</a></li>
                        <li><a href="all-team">Teams</a></li>
                        <li><a href="all-tournaments">Tournament</a></li>
                    </ul>
                    <div className="flex gap-5">
                        <button
                            className="bg-white text-sm text-[#E82F24] h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Login</button>
                        <button
                            className="bg-[#E82F24] text-sm text-white h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Sign
                            up</button>
                    </div>
                </div>
                <img src={trolly} alt="Trolly"/>
            </div>
        </div>
        <div
            className="md:hidden mt-[25px] bg-neutral-100 flex items-center pr-5 w-full rounded-full border border-[#e8e8e8] h-[50px] overflow-hidden">
            <input
                className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]"
                type="text" name="search" placeholder="Search" />
            <img src={search} className="w-5 h-5" alt="search"/>
        </div>

    </header>
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
    <div className="w-full">
        <div className="bg-[#f6eb16] bg-[url(./assets/svg/small-logo.svg)]">
            <div
                className="container-lg px-6 gap-5 py-[35px]  md:pr-[112px] md:pl-[82px] md:py-[79px] flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="text-center md:text-left">
                    <p className="font-semibold text-[20px] md:text-[30px] leading-[30px] md:leading-[40px] lg:text-[40px] lg:leading-[50px] mb-[5px] md:mb-2.5">Subscribe
                        to our newsletter</p>
                    <span className="w-full max-[400px]:max-w-[239px] block mx-auto text-[#201E1ECC] md:text-base text-xsleading-[18px] md:leading-[26px]">70,000 fans get
                        notified about the hottest events. </span>
                </div>
                <div className="flex flex-col md:flex-row gap-5 items-center">
                    <div className="flex items-center w-full md:min-w-[300px] lg:min-w-[350px] rounded-full bg-white h-[42px] md:h-[50px] overflow-hidden">
                        <input
                            className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]"
                            type="email" name="search" placeholder="Enter your mail here" />
                    </div>
                    <button className="bg-black text-sm text-white h-[42px] md:h-[50px] w-full md:w-[143px] font-semibold rounded-full">
                        Submit</button>
                </div>
            </div>
        </div>
        <div className="bg-black">
            <div className="container-lg ">
                <div className="px-4 md:px-[112px] py-[35px] md:py-[60px] flex flex-col flex-wrap gap-[42px] md:gap-4 items-center md:flex-row text-white md:justify-between">
                    <img src={footerLogo} className="h-[39px] max-md:hidden" alt="logo"/>
                    <img src={blueLogo} className="h-[23px] w-[157px] md:hidden" alt="logo"/>
                    <div className="hidden md:flex items-center gap-10 text-[14px]">
                        <a href="home" className="h-[24px]">Home</a>
                        <a href="all-team" className="h-[24px]">Teams</a>
                        <a href="all-tournaments" className="h-[24px]">Tournament</a>
                    </div>
                    <div className="md:hidden flex justify-between gap-2 gap-6 text-xstext-[#FFFFFFCC]">
                        <a href="privacy" className="h-[18px]">Privacy Policy</a>
                        <a href="terms&conditions" className="h-[18px]">Terms & Conditions</a>
                        <a href="#" className="h-[18px]">Cookies Policy</a>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <div
                            className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src={facebookLogo} className="w-5 h-5" alt="facebook-logo"/>
                        </div>
                        <div
                            className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src={youtubeLogo} className="w-5 h-5" alt="youtube-logo"/>
                        </div>
                        <div
                            className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src={instaLogo} className="w-5 h-5" alt="insta-logo"/>
                        </div>
                        <div
                            className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src={xLogo} className="w-5 h-5" alt="x-logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#0D0D0D]"></div>
            <div
                className=" container-lg md:mx-auto md:px-[112px] pt-[30px] pb-[106px] md:pb-[35px] md:py-[30px] flex text-white flex flex-col md:flex-row gap-5 items-center md:justify-between ">
                <span className="text-xstext-[#FFFFFFCC]">© 2022
                    Stadiumz. All Rights Reserved.</span>
                <div className="hidden md:flex justify-between gap-2 gap-[25px] text-xsfont-medium text-[#FFFFFFCC]">
                    <a href="privacy" className="h-[18px]">Privacy Policy</a>
                    <a href="terms&conditions" className="h-[18px]">Terms & Conditions</a>
                    <a href="#" className="h-[18px]">Cookies Policy</a>
                </div>
                <div className="md:hidden flex gap-4">
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src={facebookLogo} className="w-4 h-4" alt="facebook-logo"/>
                    </div>
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src={youtubeLogo} className="w-4 h-4" alt="youtube-logo"/>
                    </div>
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src={instaLogo} className="w-4 h-4" alt="insta-logo"/>
                    </div>
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src={xLogo} className="w-4 h-4" alt="x-logo"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="md:hidden card-shadow-xl w-full fixed bottom-0 left-0 px-6 pt-[18px] pb-[15px] bg-white rounded-t-[30.5px] flex items-center justify-between gap-3">
        <a href="home" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src={home} className="mx-auto mb-[5px]" alt="icon"/>
            Home
        </a>
        <a href="all-team" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src={teams} className="mx-auto mb-[5px]" alt="icon"/>
            Teams
        </a>
        <a href="all-tournaments" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src={award} className="mx-auto mb-[5px]" alt="icon"/>
            Tournament
        </a>
        <a href="my-account" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src={person} className="mx-auto mb-[5px]" alt="icon"/>
            Account
        </a>
    </div>
    </div>
  )
}

export default SignUp