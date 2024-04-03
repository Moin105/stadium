import React from 'react'
import soccer from '../assets/png/soccer.png';
import elipse from '../assets/svg/elipse.svg';
import logo from '../assets/png/logo.png';
import footerLogo from '../assets/svg/footer-logo.svg';
import blueLogo from '../assets/svg/blue-logo.svg';
import trolly from '../assets/svg/trolly.svg';
import facebookLogo from '../assets/svg/facebook-logo.svg';
import youtubeLogo from '../assets/svg/youtube-logo.svg';
import instaLogo from '../assets/svg/insta-logo.svg';
import xLogo from '../assets/svg/x-logo.svg';
import home from '../assets/svg/home.svg';
import teams from '../assets/svg/teams.svg';
import award from '../assets/svg/award.svg';
import personBlue from '../assets/svg/person-blue.svg';

function MyAccount() {
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
        </header>
        <div className="w-full bg-neutral-100">
            <div className="container-lg md:pt-[51px] pb-[50px] md:pb-[100px] flex justify-center items-center">
                <div className="max-w-[1010px] mx-auto px-4 pt-[50px] pb-10 md:pl-20 md:pr-[70px] md:pt-[84px] md:pb-[94px] bg-[#FFFFFF] rounded-[10px] flex items-center justify-between gap-[107px]">
                    <div className="max-md:hidden max-w-[373px] max-h-[272px] ratio-square">
                        <img src={soccer} alt="image"/>
                    </div>
                    <div className="w-full md:w-[379px]">
                        <span className="font-semibold text-[26px] md:text-[30px] leadig-9 md:leading-[40px]">
                            Hello, Guest!👋
                            <br />
                            Wecome to stadiumz
                        </span>
                        <p className="text-sm md:text-base text-[#201E1E99] leading-[22px] md:leading-[26px] mt-2 md:mt-1.5">Before Continue. Please sign in first</p>
                        <div className="text-xs md:text-sm text-[#201E1E99] flex gap-[15px] md:gap-3 mt-5 leading-5 md:leading-6 flex-wrap">
                            <div className="flex gap-2 items-center">
                                <img src={elipse} className="w-1.5 h-1.5" alt="dot"/> <span>Track your bookings</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={elipse} className="w-1.5 h-1.5" alt="dot"/> <span>Ticket alerts</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={elipse} className="w-1.5 h-1.5" alt="dot"/> <span>Ticket alerts</span>
                            </div>
                        </div>
                        <div className="md:hidden max-md:mt-10 max-w-[343px] max-h-[250px] ratio-square">
                            <img src={soccer} alt="image"/>
                        </div>
                        <button
                            className="bg-[#E82F24] text-sm text-white mt-[60px] md:mt-[50px] h-12 w-full border border-[#E82F24] font-semibold rounded-full">Sign
                            up</button>
                        <button
                            className="bg-white text-sm text-[#E82F24] mt-5 h-12 w-full border border-[#E82F24] font-semibold rounded-full">Login</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="w-full">
                <div className="bg-[#f6eb16] bg-[url(./assets/svg/small-logo.svg)]">
                    <div
                        className="container-lg px-6 gap-5 py-[35px]  md:pr-[112px] md:pl-[82px] md:py-[79px] flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="text-center md:text-left">
                            <p
                                className="font-semibold text-[20px] md:text-[30px] leading-[30px] md:leading-[40px] lg:text-[40px] lg:leading-[50px] mb-[5px] md:mb-2.5">
                                Subscribe
                                to our newsletter</p>
                            <span
                                className="w-full max-[400px]:max-w-[239px] block mx-auto text-[#201E1ECC] md:text-base text-[12px] leading-[18px] md:leading-[26px]">70,000
                                fans get
                                notified about the hottest events. </span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5 items-center">
                            <div
                                className="flex items-center w-full md:min-w-[300px] lg:min-w-[350px] rounded-full bg-white h-[42px] md:h-[50px] overflow-hidden">
                                <input
                                    className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]"
                                    type="email" name="search" placeholder="Enter your mail here" />
                            </div>
                            <button
                                className="bg-black text-sm text-white h-[42px] md:h-[50px] w-full md:w-[143px] font-semibold rounded-full">
                                Submit</button>
                        </div>
                    </div>

                </div>
                <div className="bg-black">
                    <div className="container-lg ">
                        <div
                            className="px-4 md:px-[112px] py-[35px] md:py-[60px] flex flex-col flex-wrap gap-[42px] md:gap-4 items-center md:flex-row text-white md:justify-between">
                            <img src={footerLogo} className="h-[39px] max-md:hidden" alt="logo"/>
                            <img src={blueLogo} className="h-[23px] w-[157px] md:hidden" alt="logo"/>
                            <div className="hidden md:flex items-center gap-10 text-[14px]">
                                <a href="home" className="h-[24px]">Home</a>
                                <a href="all-team" className="h-[24px]">Teams</a>
                                <a href="all-tournaments" className="h-[24px]">Tournament</a>
                            </div>
                            <div className="md:hidden flex justify-between gap-2 gap-6 text-[12px] text-[#FFFFFFCC]">
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
                        className=" container-lg md:mx- auto md:px-[112px] pt-[30px] pb-[35px] md:py-[30px] flex text-white flex flex-col md:flex-row gap-5 items-center md:justify-between ">
                        <span className="text-[12px] text-[#FFFFFFCC]">© 2022
                            Stadiumz. All Rights Reserved.</span>
                        <div
                            className="hidden md:flex justify-between gap-2 gap-[25px] text-[12px] font-medium text-[#FFFFFFCC]">
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

            {/* Tabbar for mobile */}
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
                <a href="my-account" className="relative text-[#4267B3] text-xs leading-3 text-center block w-fit">
                    <span className="w-[35px] h-1 rounded-b bg-[#4267B3] absolute -top-[18px] left-1/2 -translate-x-[50%]"></span>
                    <img src={personBlue} className="mx-auto mb-[5px]" alt="icon"/>
                    Account
                </a>
            </div>
        </div>
    </div>
  )
}

export default MyAccount