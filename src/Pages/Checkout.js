import React from 'react'

function Checkout() {
  return (
    <div>
            <header className="container-lg max-w-[1214px] hidden md:block px-4 mx-auto py-5 bg-white">
        <div className="flex justify-between items-center gap-4">
            <img src="./assets/png/logo.png" className="h-6 w-[157px]" alt="logo"/>
            <div className="flex gap-[30px]">
                <div className="gap-10 hidden md:flex">
                    <ul className="flex gap-5 lg:gap-10 items-center text-sm">
                        <li><a href="home.html">Home</a></li>
                        <li><a href="all-team.html">Teams</a></li>
                        <li><a href="all-tournaments.html">Tournament</a></li>
                    </ul>
                    <div className="flex gap-5">
                        <button
                            className="bg-white text-sm text-[#E82F24] h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Login</button>
                        <button
                            className="bg-[#E82F24] text-sm text-white h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Sign
                            up</button>

                    </div>
                </div>
                <img src="./assets/svg/trolly.svg" alt="Trolly"/>
            </div>
        </div>
        <div
            className="md:hidden mt-[25px] bg-neutral-100 flex items-center pr-5 w-full rounded-full border border-[#e8e8e8] mt-10 h-[50px] overflow-hidden">
            <input
                className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]"
                type="text" name="search" placeholder="Search" />
            <img src="./assets/svg/search.svg" className="w-5 h-5" alt="search"/>
        </div>

    </header>
    <div className="md:hidden w-full h-[63px] bg-[#FFFFFF] px-[17px] flex items-center">
        <div
            className="w-[31.32px] h-[31.32px] flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
            <img src="./assets//svg/back-arrow.svg" alt="arrow"/>
        </div>
        <p className="text-base font-semibold flex-1 -ml-[31.32px] text-center">Checkout</p>
    </div>
    <div className="w-full bg-neutral-100">
        <div className="max-w-[598px] pb-[34px] md:pb-[100px] max-md:px-4 pt-[20px] md:pt-[60px] mx-auto">
            <div className=" hidden md:block">
                <div className="flex items-center gap-1.5">
                    <span className="flex text-[14px] text-[#201E1E99]">Home </span>
                    <img className="w-4 h-4" src="./assets/svg/arrow-grey.svg" alt="arrow"/>
                    <span className="flex text-[14px] text-[#201E1E99]">My Cart </span>
                    <img className="w-4 h-4" src="./assets/svg/arrow-grey.svg" alt="arrow"/>
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
                        <img src="./assets/svg/shoppay-logo.svg" alt="shoppay"/>
                    </button>
                    <div className="flex flex-row gap-3.5">
                        <button className="bg-[#121212] h-12 rounded-[10px] w-full flex justify-center items-center md:w-[190px]">
                           <img src="./assets/svg/gpay.svg" alt="gpay"/>
                        </button>
                        <button className="bg-[#FFC339] h-12 rounded-[10px] w-full flex justify-center items-center md:w-[190px]">
                          <img src="./assets/svg/paypal.svg" alt="paypal"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center pt-[30px] md:pt-10 pb-[18.59px]">
                <span className="w-[268px] h-[1px] mx-auto bg-[#0000001A]"></span>
                <span className=" text-[14px] leading-[22px] text-[#201E1E99] px-[23px]">or</span>
                <span className="w-[268px] h-[1px] mx-auto bg-[#0000001A]"></span>
            </div>
            <div className="w-full">
                <span className="text-[14px] leading-[22px] font-medium"> First Name</span>
                <div className=" mt-1.5 bg-white flex items-center pr-5 w-full rounded-full h-[48px] overflow-hidden">
                    <input
                        className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#06060680]"
                        type="text" name="name" placeholder="Enter First Name" />
                </div>
            </div>
            <div className="w-full mt-[20px]">
                <span className="text-[14px] leading-[22px] font-medium"> Enter Card Number</span>
                <div className=" mt-1.5 bg-white flex items-center pr-5 w-full rounded-full h-[48px] overflow-hidden">
                    <img src="./assets/svg/card.svg" className="w-5 h-5 ml-4" alt="search"/>
                    <input
                        className="text-black text-sm w-full border-none bg-transparent px-2.5 py-1 outline-none focus:outline-none placeholder:text-[#06060680] placeholder:text-[14px]"
                        type="text" name="cardnumber" placeholder="Enter Card Number" />
                </div>
            </div>
            <div className="w-full mt-5 flex justify-between gap-[13px] md:gap-[22.66px]">
                <div className="flex-1">
                    <span className="text-[14px] leading-[22px] font-medium"> Expiry Date</span>
                    <div className=" mt-1.5 bg-white flex items-center pr-5 w-full rounded-full h-[48px] overflow-hidden">
                        <img src="./assets/svg/calender-checkout.svg" className="w-6 h-6 ml-4" alt="search"/>
                        <input className="text-black text-sm w-full border-none bg-transparent px-2.5 py-1 outline-none focus:outline-none placeholder:text-[#06060680] placeholder:text-[14px]"
                            type="text" name="expiry" placeholder="Expiry Date" />
                    </div>
                </div>
                <div className="flex-1">
                    <span className="text-[14px] leading-[22px] font-medium"> CVC</span>
                    <div className=" mt-1.5 bg-white flex items-center pr-5 w-full rounded-full h-[48px] overflow-hidden">
                        <img src="./assets/svg/lock.svg" className="w-6 h-6 ml-4" alt="search"/>
                        <input className="text-black text-sm w-full border-none bg-transparent px-2.5 py-1 outline-none focus:outline-none placeholder:text-[#06060680] placeholder:text-[14px]"
                            type="text" name="cvc" placeholder="Enter CVC" />
                    </div>
                </div>

            </div>
            <div className="mt-[20px] flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5 "/>
                <span className="text-[14px] leading-[22px] text-[#201E1E99]">Set as default method</span>
            </div>
            <div className="w-full rounded-full mt-[40px]">
                <button className="bg-[#E82F24] text-sm h-12 text-white leading-[21px] w-full py-[13.5px] border border-[#E82F24] font-semibold rounded-full">
                    Confirm Order
                </button>            
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
                    <span className="w-full max-[400px]:max-w-[239px] block mx-auto text-[#201E1ECC] md:text-base text-[12px] leading-[18px] md:leading-[26px]">70,000 fans get
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
                    <img src="./assets/svg/footer-logo.svg" className="h-[39px] max-md:hidden" alt="logo"/>
                    <img src="./assets/svg/blue-logo.svg" className="h-[23px] w-[157px] md:hidden" alt="logo"/>
                    <div className="hidden md:flex items-center gap-10 text-[14px]">
                        <a href="home.html" className="h-[24px]">Home</a>
                        <a href="all-team.html" className="h-[24px]">Teams</a>
                        <a href="all-tournaments.html" className="h-[24px]">Tournament</a>
                    </div>
                    <div className="md:hidden flex justify-between gap-2 gap-6 text-[12px] text-[#FFFFFFCC]">
                        <a href="privacy.html" className="h-[18px]">Privacy Policy</a>
                        <a href="terms&conditions.html" className="h-[18px]">Terms & Conditions</a>
                        <a href="#" className="h-[18px]">Cookies Policy</a>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <div
                            className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src="./assets//svg/facebook-logo.svg" className="w-5 h-5" alt="facebook-logo"/>
                        </div>
                        <div
                            className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src="./assets//svg/youtube-logo.svg" className="w-5 h-5" alt="youtube-logo"/>
                        </div>
                        <div
                            className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src="./assets//svg/insta-logo.svg" className="w-5 h-5" alt="insta-logo"/>
                        </div>
                        <div
                            className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src="./assets//svg/x-logo.svg" className="w-5 h-5" alt="x-logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#0D0D0D]"></div>
            <div
                className=" container-lg md:mx-auto md:px-[112px] pt-[30px] pb-[106px] md:pb-[35px] md:py-[30px] flex text-white flex flex-col md:flex-row gap-5 items-center md:justify-between ">
                <span className="text-[12px] text-[#FFFFFFCC]">© 2022
                    Stadiumz. All Rights Reserved.</span>
                <div className="hidden md:flex justify-between gap-2 gap-[25px] text-[12px] font-medium text-[#FFFFFFCC]">
                    <a href="privacy.html" className="h-[18px]">Privacy Policy</a>
                    <a href="terms&conditions.html" className="h-[18px]">Terms & Conditions</a>
                    <a href="#" className="h-[18px]">Cookies Policy</a>
                </div>
                <div className="md:hidden flex gap-4">
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets//svg/facebook-logo.svg" className="w-4 h-4" alt="facebook-logo"/>
                    </div>
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets//svg/youtube-logo.svg" className="w-4 h-4" alt="youtube-logo"/>
                    </div>
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets//svg/insta-logo.svg" className="w-4 h-4" alt="insta-logo"/>
                    </div>
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets//svg/x-logo.svg" className="w-4 h-4" alt="x-logo"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="md:hidden card-shadow-xl w-full fixed bottom-0 left-0 px-6 pt-[18px] pb-[15px] bg-white rounded-t-[30.5px] flex items-center justify-between gap-3">
        <a href="home.html" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src="./assets/svg/home.svg" className="mx-auto mb-[5px]" alt="icon"/>
            Home
        </a>
        <a href="all-team.html" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src="./assets/svg/teams.svg" className="mx-auto mb-[5px]" alt="icon"/>
            Teams
        </a>
        <a href="all-tournaments.html" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src="./assets/svg/award.svg" className="mx-auto mb-[5px]" alt="icon"/>
            Tournament
        </a>
        <a href="my-account.html" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src="./assets/svg/person.svg" className="mx-auto mb-[5px]" alt="icon"/>
            Account
        </a>
    </div>
    </div>
  )
}

export default Checkout