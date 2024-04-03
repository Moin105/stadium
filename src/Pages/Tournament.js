import React from 'react'

function Tournament() {
  return (
    <div>
          <header class="container-lg max-w-[1214px] hidden md:block px-4 mx-auto py-5 bg-white">
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
                        <button
                            class="bg-white text-sm text-[#E82F24] h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Login</button>
                        <button
                            class="bg-[#E82F24] text-sm text-white h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Sign
                            up</button>
                    </div>
                </div>
                <img src="./assets/svg/trolly.svg" alt="Trolly"/>
            </div>
        </div>
        <div
            class="md:hidden mt-[25px] bg-neutral-100 flex items-center pr-5 w-full rounded-full border border-[#e8e8e8] mt-10 h-[50px] overflow-hidden">
            <input
                class="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]"
                type="text" name="search" placeholder="Search" />
            <img src="./assets/svg/search.svg" class="w-5 h-5" alt="search"/>
        </div>

    </header>
    <div class="md:hidden w-full h-[63px] bg-[#FFFFFF] px-[17px] flex items-center">
        <div
            class="w-[31.32px] h-[31.32px] flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
            <img src="./assets//svg/back-arrow.svg" alt="arrow"></div/>
        <p class="text-base font-semibold flex-1 -ml-[31.32px] text-center">Tournament</p>
    </div>
    {/* <!-- Content 1 --/> */}
    <div class="max-md:hidden w-full flex justify-center items-center  h-[260px] bg-[#4267B333] ">
        <div class="w-full max-w-[500px]  text-center">
            <span class="text-[40px] font-semibold  text-black leading-[50px]">Tournament</span>
            <p class="leading-[26px] text-base  text-[#201E1ECC] mt-2.5">Sed
                ut perspiciatis unde omnis iste natus eratusror Sed ut pers
                piciatis unde omnis iste natus eratusror </p>
        </div>
    </div>
    {/* <!-- Content  2 --/> */}
    <div class="w-full container-lg pb-20 bg-neutral-100">
        <div
            class="flex items-center justify-center flex-wrap gap-5 pb-5 md:pb-[20px] no-scrollbar px-4 pt-5 md:pt-[60px] md:px-[112px]">
            <div class="relative w-[343px] md:w-[392px] md:h-[375px] h-[330px]  rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner1.png" class="w-full h-[90px] md:h-[130px]" alt="banner"/>
                <div
                    class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div
                        class="w-[70px] md:w-[80px] h-[70px] md:h-[80px]  bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        {/* <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3 object-contain" */}
                            alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div
                        class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5]  shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[40px] md:pt-[37px] md:pb-[18px]">
                    <div
                        class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">
                        Premier
                        League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">
                        Liverpool
                        vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[15px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield
                            Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu
                                07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15
                                PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[30px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399
                            <span class="text-[10px] text-[#201E1E99] md:hidden">
                                per person</span>
                        </h4>
                        <button
                            class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[343px] md:w-[392px] md:h-[375px] h-[330px]  rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner1.png" class="w-full h-[90px] md:h-[130px]" alt="banner"/>
                <div
                    class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div
                        class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2]  shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        {/* <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3 object-contain" */}
                            alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div
                        class="w-[70px] md:w-[80px] h-[70px] md:h-[80px]  bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[40px] md:pt-[37px] md:pb-[18px]">
                    <div
                        class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">
                        Premier
                        League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">
                        Liverpool
                        vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[15px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield
                            Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu
                                07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15
                                PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[30px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399
                            <span class="text-[10px] text-[#201E1E99] md:hidden">
                                per person</span>
                        </h4>
                        <button
                            class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[343px] md:w-[392px] md:h-[375px] h-[330px]  rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner3.png" class="w-full h-[90px] md:h-[130px]" alt="banner"/>
                <div
                    class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div
                        class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        {/* <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3 object-contain" */}
                            alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div
                        class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[40px] md:pt-[37px] md:pb-[18px]">
                    <div
                        class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">
                        Premier
                        League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">
                        Liverpool
                        vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[15px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield
                            Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu
                                07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15
                                PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[30px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399
                            <span class="text-[10px] text-[#201E1E99] md:hidden">
                                per person</span>
                        </h4>
                        <button
                            class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[343px] md:w-[392px] md:h-[375px] h-[330px]  rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner3.png" class="w-full h-[90px] md:h-[130px]" alt="banner"/>
                <div
                    class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div
                        class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        {/* <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3 object-contain" */}
                            alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div
                        class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[40px] md:pt-[37px] md:pb-[18px]">
                    <div
                        class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">
                        Premier
                        League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">
                        Liverpool
                        vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[15px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield
                            Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu
                                07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15
                                PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[30px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399
                            <span class="text-[10px] text-[#201E1E99] md:hidden">
                                per person</span>
                        </h4>
                        <button
                            class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[343px] md:w-[392px] md:h-[375px] h-[330px]  rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner4.png" class="w-full h-[90px] md:h-[130px]" alt="banner"/>
                <div
                    class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div
                        class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        {/* <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3 object-contain" */}
                            alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div
                        class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[40px] md:pt-[37px] md:pb-[18px]">
                    <div
                        class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">
                        Premier
                        League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">
                        Liverpool
                        vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[15px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield
                            Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu
                                07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15
                                PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[30px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399
                            <span class="text-[10px] text-[#201E1E99] md:hidden">
                                per person</span>
                        </h4>
                        <button
                            class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[343px] md:w-[392px] md:h-[375px] h-[330px]  rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner3.png" class="w-full h-[90px] md:h-[130px]" alt="banner"/>
                <div
                    class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div
                        class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        {/* <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3 object-contain" */}
                            alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div
                        class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[40px] md:pt-[37px] md:pb-[18px]">
                    <div
                        class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">
                        Premier
                        League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">
                        Liverpool
                        vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[15px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield
                            Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu
                                07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15
                                PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[30px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399
                            <span class="text-[10px] text-[#201E1E99] md:hidden">
                                per person</span>
                        </h4>
                        <button
                            class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer --/> */}
    <div class="w-full">
        <div class="bg-[#f6eb16] bg-[url(./assets/svg/small-logo.svg)]">
            <div
                class="container-lg px-6 gap-5 py-[35px]  md:pr-[112px] md:pl-[82px] md:py-[79px] flex flex-col md:flex-row md:justify-between md:items-center">
                <div class="text-center md:text-left">
                    <p class="font-semibold text-[20px] md:text-[30px] leading-[30px] md:leading-[40px] lg:text-[40px] lg:leading-[50px] mb-[5px] md:mb-2.5">Subscribe
                        to our newsletter</p>
                    <span class="w-full max-[400px]:max-w-[239px] block mx-auto text-[#201E1ECC] md:text-base text-xs leading-[18px] md:leading-[26px]">70,000 fans get
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
                    <div class="hidden md:flex items-center gap-10 text-sm">
                        <a href="home.html" class="h-[24px]">Home</a>
                        <a href="all-team.html" class="h-[24px]">Teams</a>
                        <a href="all-tournaments.html" class="h-[24px]">Tournament</a>
                    </div>
                    <div class="md:hidden flex justify-between gap-2 gap-6 text-xs text-[#FFFFFFCC]">
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
                class=" container-lg md:mx- auto md:px-[112px] pt-[30px] pb-[35px] md:py-[30px] flex text-white flex flex-col md:flex-row gap-5 items-center md:justify-between ">
                <span class="text-xs text-[#FFFFFFCC]">© 2022
                    Stadiumz. All Rights Reserved.</span>
                <div class="hidden md:flex justify-between gap-2 gap-[25px] text-xs font-medium text-[#FFFFFFCC]">
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

    {/* <!-- Tabbar for mobile --/> */}

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

export default Tournament