import React from 'react'

function MyCart() {
  return (
    <div>
        <!-- Header --/>
    <header class=" max-md:hidden container-lg max-w-[1214px] px-4 mx-auto py-5 bg-white">
        <div class="flex justify-between items-center gap-4">
            <img src="./assets/png/logo.png" class="h-6 w-[157px]" alt="logo"/>
            <div class="flex gap-[30px]">
                <div class="gap-10 hidden md:flex">
                    <ul class="flex gap-5 lg:gap-10 items-center text-sm">
                        <li><a href="home.html">Home</a></li>
                        <li><a href="all-team.html">Teams</a></li>
                        <li><a href="all-tournaments.html">Tournament</a></li>
                    </ul>
                    <div class="flex gap-5">
                        <button class="bg-white text-sm text-[#E82F24] h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Login</button>
                        <button class="bg-[#E82F24] text-sm text-white h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Sign up</button>
                    </div>
                </div>
                <img src="./assets/svg/trolly.svg" alt="Trolly"/>
            </div>
        </div>
    </header>
    <!-- header for mobile --/>
    <div class="md:hidden w-full h-[63px] bg-[#FFFFFF] px-[17px] flex items-center">
        <div
            class="w-[31.32px] h-[31.32px] flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
            <img src="./assets//svg/back-arrow.svg" alt="arrow"></div/>
        <p class="text-base font-semibold flex-1 -ml-[31.32px] text-center">My Cart</p>
    </div>
    <!-- Content --/>
    <div class="bg-neutral-100">
        <div class="container-lg px-4 md:px-[112px] pt-5 md:pt-[60px] pb-[38px] md:pb-[100px]">
            <div class="max-md:hidden flex items-center gap-1.5 mb-[15px]">
                <span class="flex text-sm leading-[21px] text-[#201E1E99]">Home </span>
                <img class="w-3 h-3" src="./assets/svg/arrow-grey.svg" alt="arrow"/>
                <span class="flex text-[14px] text-black">My Cart</span>
            </div>
            <div class="flex flex-col lg:flex-row gap-5 items-start">
                <div class="flex-1 bg-white rounded-[10px] shadow-small max-md:w-full">
                    <div class="max-md:hidden py-[15px] pl-[46px] pr-[37px] border-b border-[#0000000D] flex items-center justify-between">
                        <p class="text-base leading-[26px] text-[#201E1E99]">Product</p>
                        <div class="flex items-center gap-[116px]">
                            <p class="text-base leading-[26px] text-[#201E1E99]">Quantity</p>
                            <p class="text-base leading-[26px] text-[#201E1E99]">Product</p>
                        </div>
                    </div>
                    <!-- Card --/>
                    <div class="pt-[15px] pb-5 md:py-[25px] pl-[15px] md:pl-2.5 pr-5 md:pr-[37px] flex md:items-center">
                        <img src="./assets/svg/delete.svg" class="w-6 h-6 mr-3 max-md:hidden" alt="bucket"/>
                        <div class="flex mr-2.5 md:mr-5">
                            <div class="w-[50px] md:w-[77.71px] h-[50px] md:h-[77.71px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                                <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                            </div>
                            <div class="z-10 -ml-[18px] w-[50px] md:w-[77.71px] h-[50px] md:h-[77.71px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                                <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row md:items-center justify-between flex-1 gap-4 flex-wrap">
                            <div>
                                <div class="px-2.5 py-[4.5px] md:py-[5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                                <p class="text-sm md:text-xl leading-[30px] md:my-1.5 md:mt-[5px] md:mb-0">Liverpool vs Man City</p>
                                <p class="text-xs leading-[22px] md:text-sm md:leading-[24px] text-[#201E1ECC]">Kit Room</p>
                            </div>
                            <div class="flex justify-between gap-4 md:gap-[70px] h-fit md:w-[246.58px]">
                                <div class="w-[88px] h-[34px] md:h-[38px] md:w-[110px] border border-[#201E1E1A] flex items-center justify-center gap-4 rounded-[10px]">
                                    <a href="#" class="text-base leading-6">+</a>
                                    <p class="text-base leading-6 text-[#201E1E99]">1</p>
                                    <a href="#" class="text-base leading-6">-</a>
                                </div>
                                <p class="text-sm md:text-xl leading-[22px] md:leading-[30px] self-end">$299</p>
                            </div>
                        </div>
                    </div>
                    <!-- Card --/>
                    <div class="pt-[15px] pb-5 md:py-[25px] pl-[15px] md:pl-2.5 pr-5 md:pr-[37px] flex md:items-center border-t border-[#0000000D]">
                        <img src="./assets/svg/delete.svg" class="w-6 h-6 mr-3 max-md:hidden" alt="bucket"/>
                        <div class="flex mr-2.5 md:mr-5">
                            <div class="w-[50px] md:w-[77.71px] h-[50px] md:h-[77.71px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                                <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                            </div>
                            <div class="z-10 -ml-[18px] w-[50px] md:w-[77.71px] h-[50px] md:h-[77.71px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                                <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row md:items-center justify-between flex-1 gap-4 flex-wrap">
                            <div>
                                <div class="px-2.5 py-[4.5px] md:py-[5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                                <p class="text-sm md:text-xl leading-[30px] md:my-1.5 md:mt-[5px] md:mb-0">Liverpool vs Man City</p>
                                <p class="text-xs leading-[22px] md:text-sm md:leading-[24px] text-[#201E1ECC]">Kit Room</p>
                            </div>
                            <div class="flex justify-between gap-4 md:gap-[70px] h-fit md:w-[246.58px]">
                                <div class="w-[88px] h-[34px] md:h-[38px] md:w-[110px] border border-[#201E1E1A] flex items-center justify-center gap-4 rounded-[10px]">
                                    <a href="#" class="text-base leading-6">+</a>
                                    <p class="text-base leading-6 text-[#201E1E99]">1</p>
                                    <a href="#" class="text-base leading-6">-</a>
                                </div>
                                <p class="text-sm md:text-xl leading-[22px] md:leading-[30px] self-end">$299</p>
                            </div>
                        </div>
                    </div>
                    <!-- Card --/>
                    <div class="pt-[15px] pb-5 md:py-[25px] pl-[15px] md:pl-2.5 pr-5 md:pr-[37px] flex md:items-center border-t border-[#0000000D]">
                        <img src="./assets/svg/delete.svg" class="w-6 h-6 mr-3 max-md:hidden" alt="bucket"/>
                        <div class="flex mr-2.5 md:mr-5">
                            <div class="w-[50px] md:w-[77.71px] h-[50px] md:h-[77.71px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                                <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                            </div>
                            <div class="z-10 -ml-[18px] w-[50px] md:w-[77.71px] h-[50px] md:h-[77.71px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                                <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row md:items-center justify-between flex-1 gap-4 flex-wrap">
                            <div>
                                <div class="px-2.5 py-[4.5px] md:py-[5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                                <p class="text-sm md:text-xl leading-[30px] md:my-1.5 md:mt-[5px] md:mb-0">Liverpool vs Man City</p>
                                <p class="text-xs leading-[22px] md:text-sm md:leading-[24px] text-[#201E1ECC]">Kit Room</p>
                            </div>
                            <div class="flex justify-between gap-4 md:gap-[70px] h-fit md:w-[246.58px]">
                                <div class="w-[88px] h-[34px] md:h-[38px] md:w-[110px] border border-[#201E1E1A] flex items-center justify-center gap-4 rounded-[10px]">
                                    <a href="#" class="text-base leading-6">+</a>
                                    <p class="text-base leading-6 text-[#201E1E99]">1</p>
                                    <a href="#" class="text-base leading-6">-</a>
                                </div>
                                <p class="text-sm md:text-xl leading-[22px] md:leading-[30px] self-end">$299</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-[392px]">
                    <div class="flex gap-4 justify-between items-center">
                        <p class="text-sm md:text-base leading-[21px] md:leading-[26px]">Subtotal</p>
                        <p class="text-sm md:text-base leading-[21px] md:leading-[26px]">$600</p>
                    </div>
                    <div class="flex gap-4 justify-between items-center mt-5 md:mt-[25px]">
                        <p class="text-sm md:text-base leading-[21px] md:leading-[26px]">Tax</p>
                        <p class="text-sm md:text-base leading-[21px] md:leading-[26px]">10%</p>
                    </div>
                    <div class="flex gap-4 justify-between items-center mt-5 md:mt-[25px]">
                        <p class="text-sm md:text-base leading-[21px] md:leading-[26px]">Total</p>
                        <p class="text-base md:text-[24px] leading-[22px] md:leading-[34px] font-semibold">$550</p>
                    </div>
                    <button class="bg-[#E82F24] text-sm text-white h-12 w-full border border-[#E82F24] font-semibold rounded-full mt-[30px] mt-[35.64px]">Checkout</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer --/>
    <div class="w-full">
        <div class="bg-[#f6eb16] bg-[url(./assets/svg/small-logo.svg)]">
            <div
                class="container-lg px-6 gap-5 py-[35px]  md:pr-[112px] md:pl-[82px] md:py-[79px] flex flex-col md:flex-row md:justify-between md:items-center">
                <div class="text-center md:text-left">
                    <p class="font-semibold text-[20px] md:text-[30px] leading-[30px] md:leading-[40px] lg:text-[40px] lg:leading-[50px] mb-[5px] md:mb-2.5">Subscribe
                        to our newsletter</p>
                    <span class="w-full max-[400px]:max-w-[239px] block mx-auto text-[#201E1ECC] md:text-base text-[12px] leading-[18px] md:leading-[26px]">70,000 fans get
                        notified about the hottest events. </span>
                </div>
                <div class="flex flex-col md:flex-row gap-5 items-center">
                    <div class="flex items-center w-full md:min-w-[300px] lg:min-w-[350px] rounded-full bg-white h-[42px] md:h-[50px] overflow-hidden">
                        <input
                            class="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]"
                            type="email" name="search" placeholder="Enter your mail here" />
                    </div>
                    <button class="bg-black text-sm text-white h-[42px] md:h-[50px] w-full md:w-[143px] font-semibold rounded-full">
                        Submit</button>
                </div>
            </div>
        </div>
        <div class="bg-black">
            <div class="container-lg ">
                <div class="px-4 md:px-[112px] py-[35px] md:py-[60px] flex flex-col flex-wrap gap-[42px] md:gap-4 items-center md:flex-row text-white md:justify-between">
                    <img src="./assets/svg/footer-logo.svg" class="h-[39px] max-md:hidden" alt="logo"/>
                    <img src="./assets/svg/blue-logo.svg" class="h-[23px] w-[157px] md:hidden" alt="logo"/>
                    <div class="hidden md:flex items-center gap-10 text-[14px]">
                        <a href="home.html" class="h-[24px]">Home</a>
                        <a href="all-team.html" class="h-[24px]">Teams</a>
                        <a href="all-tournaments.html" class="h-[24px]">Tournament</a>
                    </div>
                    <div class="md:hidden flex justify-between gap-2 gap-6 text-[12px] text-[#FFFFFFCC]">
                        <a href="privacy.html" class="h-[18px]">Privacy Policy</a>
                        <a href="terms&conditions.html" class="h-[18px]">Terms & Conditions</a>
                        <a href="#" class="h-[18px]">Cookies Policy</a>
                    </div>
                    <div class="hidden md:flex gap-4">
                        <div
                            class="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src="./assets//svg/facebook-logo.svg" class="w-5 h-5" alt="facebook-logo"/>
                        </div>
                        <div
                            class="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src="./assets//svg/youtube-logo.svg" class="w-5 h-5" alt="youtube-logo"/>
                        </div>
                        <div
                            class="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src="./assets//svg/insta-logo.svg" class="w-5 h-5" alt="insta-logo"/>
                        </div>
                        <div
                            class="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src="./assets//svg/x-logo.svg" class="w-5 h-5" alt="x-logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t border-[#0D0D0D]"></div>
            <div
                class=" container-lg md:mx- auto md:px-[112px] pt-[30px] pb-[115px] md:py-[30px] flex text-white flex flex-col md:flex-row gap-5 items-center md:justify-between ">
                <span class="text-[12px] text-[#FFFFFFCC]">© 2022
                    Stadiumz. All Rights Reserved.</span>
                <div class="hidden md:flex justify-between gap-2 gap-[25px] text-[12px] font-medium text-[#FFFFFFCC]">
                    <a href="privacy.html" class="h-[18px]">Privacy Policy</a>
                    <a href="terms&conditions.html" class="h-[18px]">Terms & Conditions</a>
                    <a href="#" class="h-[18px]">Cookies Policy</a>
                </div>
                <div class="md:hidden flex gap-4">
                    <div
                        class="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets//svg/facebook-logo.svg" class="w-4 h-4" alt="facebook-logo"/>
                    </div>
                    <div
                        class="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets//svg/youtube-logo.svg" class="w-4 h-4" alt="youtube-logo"/>
                    </div>
                    <div
                        class="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets//svg/insta-logo.svg" class="w-4 h-4" alt="insta-logo"/>
                    </div>
                    <div
                        class="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets//svg/x-logo.svg" class="w-4 h-4" alt="x-logo"/>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="md:hidden card-shadow-xl w-full fixed bottom-0 left-0 px-6 pt-[18px] pb-[15px] bg-white rounded-t-[30.5px] flex items-center justify-between gap-3">
        <a href="home.html" class="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src="./assets/svg/home.svg" class="mx-auto mb-[5px]" alt="icon"/>
            Home
        </a>
        <a href="all-team.html" class="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src="./assets/svg/teams.svg" class="mx-auto mb-[5px]" alt="icon"/>
            Teams
        </a>
        <a href="all-tournaments.html" class="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src="./assets/svg/award.svg" class="mx-auto mb-[5px]" alt="icon"/>
            Tournament
        </a>
        <a href="my-account.html" class="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src="./assets/svg/person.svg" class="mx-auto mb-[5px]" alt="icon"/>
            Account
        </a>
    </div>
    </div>
    </div>
  )
}

export default MyCart