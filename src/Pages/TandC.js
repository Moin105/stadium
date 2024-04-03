import React from 'react'
import search from '../assets/svg/search.svg';
import trolly from '../assets/svg/trolly.svg';
import logo from '../assets/png/logo.png';
import backArrow from '../assets/svg/back-arrow.svg';
import footerLogo from '../assets/svg/footer-logo.svg';
import blueLogo from '../assets/svg/blue-logo.svg';
import facebookLogo from '../assets/svg/facebook-logo.svg';
import youtubeLogo from '../assets/svg/youtube-logo.svg';
import instaLogo from '../assets/svg/insta-logo.svg';
import xLogo from '../assets/svg/x-logo.svg';

function TandC() {
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
        <p className="text-base font-semibold flex-1 -ml-[31.32px] text-center">Terms & Conditions</p>
    </div>
    <div className="w-full bg-neutral-100">
        <div className="container-lg md:pt-[80px] pb-[50px] md:pb-[100px] md:px-[112px] px-5 flex ">
            <div className="flex-1">
                <div>
                    <h1 className="font-semibold text-[20px] md:text-[30px] leading-[50px]">Terms & Conditions</h1>
                        <div className="w-[335px] lg:hidden h-[444px] mb-[20px] bg-white border-[1px] border-[#201E1E1A] rounded-[10px]">
                            <div className="w-[295px] h-[56px] rounded-[20px] justify-center flex items-center mx-auto mt-[30px] bg-[#4267B31A] ">
                                <span className="text-base leading-[24px] font-bold text-[#4267B3]">Information Collection and Use </span>
                            </div>
                            <div className="w-[255px]  h-[48px] rounded-[20px] justify-start flex items-center mx-auto mt-[20px]">
                                <span className="text-sm  leading-[24px] text-[#201E1E99]">Storage and Protection of Personal Information </span>
                            </div>
                            <div className="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[20px]">
                                <span className="text-sm  leading-[24px] text-[#201E1E99]">Sharing of Personal Information </span>
                            </div>
                            <div className="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[30px]">
                                <span className="text-sm  leading-[24px] text-[#201E1E99]">Data Retention</span>
                            </div>
                            <div className="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[30px]">
                                <span className="text-sm   leading-[24px] text-[#201E1E99]">Access to Personal Information </span>
                            </div>
                            <div className="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[30px]">
                                <span className="text-sm  leading-[24px] text-[#201E1E99]">Changes to this Privacy Policy </span>
                            </div>
                            <div className="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[30px]">
                                <span className="text-sm  leading-[24px] text-[#201E1E99]">Contact Information </span>
                            </div>
                        </div>
                    <p className="text-sm md:text-base leading-[22px] md:mt-[10px] md:leading-[26px] text-[#201E1E99]">
                        At stadiumz, we are committed to protecting the privacy and security of our clients and website
                        visitors. This Privacy Policy outlines how we collect, use, store and protect the personal
                        information we receive through our website and services.</p>
                </div>
                <div className="md:pt-[34px]">
                    <h1 className="font-semibold text-base md:text-[20px] leading-[28px]">Information Collection and Use</h1>
                    <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        The information we collect from clients and website visitors may include personal details such
                        as name, email address, phone number, and other relevant information necessary to provide our
                        services. This information is used to respond to inquiries, provide quotes, and fulfill orders.
                    </p>
                    <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        We may also collect information through the use of cookies and other tracking technologies to
                        analyze site usage and improve the user experience. This information may include your IP
                        address, browser type, device information, and other details.</p>
                </div>
                <div className="md:pt-[34px]">
                    <h1 className="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Storage and Protection of Personal Information
                    </h1>
                    <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        We take all necessary precautions to protect the personal information we collect from
                        unauthorized access, alteration, or destruction. All personal information is stored in a secure
                        server and access is restricted to authorized personnel only.</p>
                </div>
                <div className="md:pt-[34px]">
                    <h1 className="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Sharing of Personal Information
                    </h1>
                    <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        We do not share personal information with any third parties unless necessary to provide the
                        requested service or comply with legal requirements.</p>
                </div>
                <div className="md:pt-[34px]">
                    <h1 className="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Data Retention
                    </h1>
                    <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        We retain personal information only as long as necessary to provide the services requested and
                        to comply with legal requirements.</p>
                </div>
                <div className="md:pt-[34px]">
                    <h1 className="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Access to Personal Information
                    </h1>
                    <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        Clients have the right to access and correct their personal information in our possession. To
                        exercise this right, please contact us using the information provided below.</p>
                </div>
                <div className="md:pt-[34px]">
                    <h1 className="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Changes to this Privacy Policy
                    </h1>
                    <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        We reserve the right to make changes to this Privacy Policy at any time. If we make changes, we
                        will post the updated policy on our website and update the effective date.</p>
                </div>
                <div className="md:pt-[34px]">
                    <h1 className="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Contact Information
                    </h1>
                    <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        If you have any questions or concerns regarding our Privacy Policy, please contact us at
                        hey@stadiumz.com.</p>
                    <p className="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        This Privacy Policy was last updated on Dec. 30, 2024.</p>
                </div>

            </div>
            <div className="md:w-[392px] hidden lg:block md:h-[610px] bg-white border-[1px] ml-[41px] border-[#201E1E1A] rounded-[10px]">
                <div className="w-[338px] h-[68px] rounded-[20px] justify-center flex items-center mx-auto mt-[30px] bg-[#4267B31A] ">
                    <span className="text-[20px] leading-[28px] font-bold text-[#4267B3]">Information Collection and Use </span>
                </div>
                <div className="w-[350px] h-[88px] rounded-[20px] justify-start flex items-center mx-auto mt-[18px]">
                    <span className="text-base px-5 leading-[28px] text-[#201E1E99]">Storage and Protection of Personal Information </span>
                </div>
                <div className="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[14]">
                    <span className="text-base px-5 leading-[28px] text-[#201E1E99]">Sharing of Personal Information </span>
                </div>
                <div className="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[14px]">
                    <span className="text-base px-5 leading-[28px] text-[#201E1E99]">Data Retention</span>
                </div>
                <div className="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[14px]">
                    <span className="text-base px-5  leading-[28px] text-[#201E1E99]">Access to Personal Information </span>
                </div>
                <div className="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[14px]">
                    <span className="text-base px-5 leading-[28px] text-[#201E1E99]">Changes to this Privacy Policy </span>
                </div>
                <div className="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[18px]">
                    <span className="text-base px-5 leading-[28px] text-[#201E1E99]">Contact Information </span>
                </div>
            </div>
        </div>
    </div>
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
                        className="w-full max-[400px]:max-w-[239px] block mx-auto text-[#201E1ECC] md:text-base text-xs leading-[18px] md:leading-[26px]">70,000
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
                    <div className="hidden md:flex items-center gap-10 text-sm">
                        <a href="home" className="h-[24px]">Home</a>
                        <a href="all-team" className="h-[24px]">Teams</a>
                        <a href="all-tournaments" className="h-[24px]">Tournament</a>
                    </div>
                    <div className="md:hidden flex justify-between gap-2 gap-6 text-xs text-[#FFFFFFCC]">
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
                <span className="text-xs text-[#FFFFFFCC]">© 2022
                    Stadiumz. All Rights Reserved.</span>
                <div className="hidden md:flex justify-between gap-2 gap-[25px] text-xs font-medium text-[#FFFFFFCC]">
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
    </div>
  )
}

export default TandC