import React from 'react'

function EventDetail() {
  return (
    <div>
           <header class=" max-md:hidden container-lg max-w-[1214px] px-4 mx-auto py-5 bg-white">
        <div class="flex justify-between items-center gap-4">
            <img src="./assets/png/logo.png" class="h-6 w-[157px]" alt="logo" />
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
                <img src="./assets/svg/trolly.svg" alt="Trolly" />
            </div>
        </div>
    </header>
    <div id="bannerSection" class="w-full flex justify-center items-center pt-4 pb-[17px] md:py-[45px] md:h-[330px] bg-[url(./assets/png/banner5-mobile.png)] md:bg-[url(./assets/png/banner5.png)] bg-cover bg-center">
        <div class="w-full text-white text-center">
            <div id="backArrow" class="shrink-0 md:hidden w-8 h-8 fixed top-4 left-4 rounded-full bg-white bg-opacity-[5%] flex items-center justify-center">
                <img src="./assets/svg/back-arrow-white.svg" alt="arrow" />
            </div>
            <div id="shirtBox" class="flex mx-auto w-fit mb-2.5">
                <div class="w-[70px] md:w-[120px] h-[70px] md:h-[120px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                    <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image" />
                </div>
                <div class="z-10 -ml-[27px] w-[70px] md:w-[120px] h-[70px] md:h-[120px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                    <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image" />
                </div>
            </div>
            <h1 id="title" class="text-xl md:text-[40px] font-semibold leading-[30px] md:leading-[50px]">Liverpool vs Man City</h1>
            <p id="subTitle" class="text-sm leading-[21px] md:text-base md:leading-[26px] font-normal mt-1 opacity-80 mt-0.5 md:mt-[5px]">20 tickets remaining</p>
        </div>
    </div>
    <div class="max-md:hidden container-lg px-[112px] bg-white py-4 flex items-center justify-center min-[1123px]:justify-between flex-wrap gap-4">
        <div>
            <div class="flex items-center gap-[21px]">
                <div class="flex gap-2 items-center">
                    <img src="./assets/svg/location.svg" class="w-6 h-6" alt="location icon" />
                    <p class="text-base leading-[26px] text-[#201E1ECC]">Prince Abdullah AlFaisal Stadium</p>
                </div>
                <span class="w-[1px] h-3 bg-[#4267B366] rounded-[1px]"></span>
                <div class="flex gap-2 items-center">
                    <img src="./assets/svg/calendar.svg" class="w-6 h-6" alt="location icon" />
                    <p class="text-base leading-[26px] text-[#201E1ECC]">Thu 07 Dec</p>
                </div>
                <span class="w-[1px] h-3 bg-[#4267B366] rounded-[1px]"></span>
                <div class="flex gap-2 items-center">
                    <img src="./assets/svg/clock.svg" class="w-6 h-6" alt="location icon" />
                    <p class="text-base leading-[26px] text-[#201E1ECC]">8:15 PM</p>
                </div>
            </div>
        </div>
        <div class="flex items-center gap-3 max-md:mt-5 max-md:mb-[30px]">
            <p class="text-xs leading-[18px] md:text-sm md:leading-6 font-medium">Share:</p>
            <div class="flex gap-2.5">
                <div
                    class="w-10 h-10 rounded-full">
                    <img src="./assets/svg/facebook.svg" class="w-full h-full" alt="facebook-logo" />
                </div>
                <div
                    class="w-10 h-10 rounded-full">
                    <img src="./assets/svg/instagram.svg" class="w-full h-full" alt="youtube-logo" />
                </div>
                <div
                    class="w-10 h-10 rounded-full">
                    <img src="./assets/svg/whatsapp.svg" class="w-full h-full" alt="insta-logo" />
                </div>
                <div
                    class="w-10 h-10 rounded-full">
                    <img src="./assets/svg/x.svg" class="w-full h-full" alt="x-logo" />
                </div>
                <div
                    class="w-10 h-10 rounded-full">
                    <img src="./assets/svg/link.svg" class="w-full h-full" alt="link logo" />
                </div>
            </div>
        </div>
    </div>
    <div id="contentSection" class="bg-neutral-100">
        <div  class="container-lg px-4 py-5 md:py-10 md:px-[112px] md:flex items-start gap-5">
            <div class="md:flex-1">
                <p class="text-base md:text-[30px] leading-6 md:leading-[50px] font-semibold">Details</p>
                <p class="max-md:hidden text-sm leading-[21px] text-[#201E1E99] mt-[15px]">Sed ut perspiciatis unde omnis iste natus eratusror Sed ut perspiciatis unde omnis iste natus eratus rored ut perspiciatis unde omnis iste natus eratusror Sed ut perspiciatis unde omnis iste natus eratusror.</p>
                <p class="md:hidden text-[#201E1E99] text-xs leading-[18px] mt-2.5">Sed ut perspiciatis unde omnis iste natus eratusror Sed ut perspiciatis unde omnis iste natus eratusror.</p>
                <div class="md:hidden">
                    <hr class="my-[15px] border-[#0000001A]" />
                <div class="flex gap-2.5 items-center md:my-[15px]">
                    <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon" />
                    <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Prince Abdullah AlFaisal Stadium</p>
                </div>
                <div class="flex items-center gap-[19px] mt-5">
                    <div class="flex gap-1 items-center">
                        <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon" />
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                    </div>
                    <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                    <div class="flex gap-1 items-center">
                        <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon" />
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM</p>
                    </div>
                </div>
                <div class="flex items-center gap-3 max-md:mt-5 max-md:mb-[30px]">
                    <p class="text-xs leading-[18px] md:text-sm md:leading-6 font-medium">Share:</p>
                    <div class="md:hidden flex gap-2.5">
                        <div
                            class="h-6 md:w-10 w-6 md:h-10 rounded-full">
                            <img src="./assets/svg/facebook.svg" class="w-full h-full" alt="facebook-logo" />
                        </div>
                        <div
                            class="h-6 md:w-10 w-6 md:h-10 rounded-full">
                            <img src="./assets/svg/instagram.svg" class="w-full h-full" alt="youtube-logo" />
                        </div>
                        <div
                            class="h-6 md:w-10 w-6 md:h-10 rounded-full">
                            <img src="./assets/svg/whatsapp.svg" class="w-full h-full" alt="insta-logo" />
                        </div>
                        <div
                            class="h-6 md:w-10 w-6 md:h-10 rounded-full">
                            <img src="./assets/svg/x.svg" class="w-full h-full" alt="x-logo" />
                        </div>
                        <div
                            class="h-6 md:w-10 w-6 md:h-10 rounded-full">
                            <img src="./assets/svg/link.svg" class="w-full h-full" alt="x-logo" />
                        </div>
                    </div>
                </div>
                </div>
                <p class="text-base md:text-[30px] leading-6 md:leading-[50px] font-semibold mt-[30px] md:mt-5">Ticket Booking</p>
                <img src="./assets/svg/stadium.svg" class="md:hidden mt-5 mx-auto" alt="stadium image" />
                <div class="flex items-center md:flex-wrap gap-2.5 mt-5 md:gap-5 overflow-auto no-scrollbar pb-5">
                    <div class="w-[160px] md:w-[230px] h-[114px] md:h-[144px] shadow-small rounded-[10px] bg-white shrink-0">
                        <div class="p-2.5 pb-3 md:p-5">
                            <div class="flex items-center justify-between">
                                <p class="text-base md:text-xl leading-[22px] md:leading-[30px] font-semibold">Kit Room</p>
                                <input type="radio" name="kit" id="kit"/>
                            </div>
                            <p class="text-base leading-[22px] mt-2.5 md:mt-[7px]">$200 <span class="text-xs leading-5 ml-[5px] text-[#2F2F2F99]">per person</span></p>
                        </div>
                        <div class="border-t border-[#2F2F2F0D] px-2.5 md:px-5 pt-[7px] pb-[11px] md:py-[13px]">
                            <p class="text-xs md:text-sm leading-5 text-[#2F2F2F99]">2 tickets remaining</p>
                        </div>
                    </div>
                    <div class="w-[160px] md:w-[230px] h-[114px] md:h-[144px] shadow-small rounded-[10px] bg-white shrink-0">
                        <div class="p-2.5 pb-3 md:p-5">
                            <div class="flex items-center justify-between">
                                <p class="text-base md:text-xl leading-[22px] md:leading-[30px] font-semibold">Kit Room</p>
                                <input type="radio" name="kit" id="kit"/>
                            </div>
                            <p class="text-base leading-[22px] mt-2.5 md:mt-[7px]">$200 <span class="text-xs leading-5 ml-[5px] text-[#2F2F2F99]">per person</span></p>
                        </div>
                        <div class="border-t border-[#2F2F2F0D] px-2.5 md:px-5 pt-[7px] pb-[11px] md:py-[13px]">
                            <p class="text-xs md:text-sm leading-5 text-[#2F2F2F99]">2 tickets remaining</p>
                        </div>
                    </div>
                    <div class="w-[160px] md:w-[230px] h-[114px] md:h-[144px] shadow-small rounded-[10px] bg-white shrink-0">
                        <div class="p-2.5 pb-3 md:p-5">
                            <div class="flex items-center justify-between">
                                <p class="text-base md:text-xl leading-[22px] md:leading-[30px] font-semibold">Kit Room</p>
                                <input type="radio" name="kit" id="kit"/>
                            </div>
                            <p class="text-base leading-[22px] mt-2.5 md:mt-[7px]">$200 <span class="text-xs leading-5 ml-[5px] text-[#2F2F2F99]">per person</span></p>
                        </div>
                        <div class="border-t border-[#2F2F2F0D] px-2.5 md:px-5 pt-[7px] pb-[11px] md:py-[13px]">
                            <p class="text-xs md:text-sm leading-5 text-[#2F2F2F99]">2 tickets remaining</p>
                        </div>
                    </div>
                </div>
                <p class="text-base md:text-[30px] leading-6 md:leading-[50px] font-semibold">What's included?</p>
                <div class="text-[#201E1EB2] mt-2.5 md:mt-[15px]">
                    <p class="text-sm leading-[21px]">Premium padded seating, Tier 2, East Stand (See stadium seating map below)</p>
                    <ul class="list-disc pl-6 text-sm">
                        <li>Access to the Travel Club Lounge 2 hours before kick-off & up to 1 hour after the final whistle</li>
                        <li>Seating in Blocks 240</li>
                        <li>Pre-match grazing menu buffet</li>
                        <li>Complimentary half time drink</li>
                        <li>Licensed bar</li>
                        <li>Former player appearances (subject to availability)</li>
                        <li>Families and children welcome</li>
                        <li>E-tickets supplied roughly 4 days in advance</li>
                        <li>Tickets are located in Home supporters areas. Any guests seen to be openly supporting the opposition or wearing away team colours are liable to be refused entry/ejected without compensation</li>
                        <li>Please note that due to TV scheduling, fixture dates and times are always subject to change. Your tickets cannot be refunded or cancelled if there is a change of date or time of the fixture</li>
                    </ul>
                </div>
            </div>
            <div class="md:min-w-[392px]">
                <div class="p-4 bg-white md:rounded-[20px] max-md:fixed bottom-0 left-0 w-full flex flex-row md:flex-col items-center justify-between">
                    <div class="flex flex-row md:flex-col max-md:items-center w-full">
                        <div class="custom-select-wrapper2 relative">
                            <select id="options" class="bg-white w-[74px] md:w-full h-12 border border-[#201E1E1A] md:w-full rounded-[10px] pl-[21px]">
                                <option selected>1</option>
                                <option value="option2">2</option>
                                <option value="option3">3</option>
                                <option value="option1">4</option>
                            </select>
                        </div>
                        <div class="ml-3 md:flex md:items-center md:justify-between md:mt-5 md:mb-[30px]">
                            <span class="text-xs md:text-sm text-[#201E1E66] leading-3 md:leading-6">Best Seats</span>
                            <p class="text-base md:text-xl font-semibold leading-6 md:leading-[30px]">Total $200</p>
                        </div>
                    </div>
                    <button class="bg-[#E82F24] text-sm text-white h-12 w-[127px] md:w-full border border-[#E82F24] font-semibold rounded-full">Book</button>
                </div>
                <img src="./assets/svg/stadium.svg" class="max-md:hidden mt-[30px] w-full" alt="stadium image" />
            </div>
        </div>
    </div>
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
                    <img src="./assets/svg/footer-logo.svg" class="h-[39px] max-md:hidden" alt="logo" />
                    <img src="./assets/svg/blue-logo.svg" class="h-[23px] w-[157px] md:hidden" alt="logo" />
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
                            <img src="./assets//svg/facebook-logo.svg" class="w-5 h-5" alt="facebook-logo" />
                        </div>
                        <div
                            class="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src="./assets//svg/youtube-logo.svg" class="w-5 h-5" alt="youtube-logo" />
                        </div>
                        <div
                            class="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src="./assets//svg/insta-logo.svg" class="w-5 h-5" alt="insta-logo" />
                        </div>
                        <div
                            class="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                            <img src="./assets//svg/x-logo.svg" class="w-5 h-5" alt="x-logo" />
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
                        <img src="./assets//svg/facebook-logo.svg" class="w-4 h-4" alt="facebook-logo" />
                    </div>
                    <div
                        class="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets//svg/youtube-logo.svg" class="w-4 h-4" alt="youtube-logo" />
                    </div>
                    <div
                        class="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets//svg/insta-logo.svg" class="w-4 h-4" alt="insta-logo" />
                    </div>
                    <div
                        class="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets//svg/x-logo.svg" class="w-4 h-4" alt="x-logo" />
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default EventDetail