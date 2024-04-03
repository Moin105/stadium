import React from 'react'

function TournamentDetail() {
  return (
    <div>
    <body data-page="tournament-details-page">
    <header class="container-lg max-w-[1214px] hidden md:block px-4 mx-auto py-5 bg-white">
        <div class="flex justify-between items-center gap-4">
            <img src="./assets/png/logo.png" class="h-6 w-[157px]" alt="logo"/>
            <div class="flex gap-[30px]">
                <div class="gap-10 md:flex">
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
                    <img src="./assets/svg/trolly.svg" alt="Trolly"/>
                </div>
            </div>
        </div>
    </header>

    <div id="bannerSection"
        class="z-50 w-full flex justify-center items-center pb-6 pt-5 md:h-[300px] bg-[url(./assets/png/banner3-mobile.png)] md:bg-[url(./assets/png/banner3.png)] bg-cover">
        <div class="w-full text-white text-center">
            <div
                class="w-8 h-8 bg-[#FFFFFF0D] fixed top-5 left-[17px] md:hidden flex items-center justify-center shrink-0 border border-white border-opacity-[80%]  rounded-full cursor-pointer">
                <img src="./assets//svg/back-arrow-white.svg" alt="arrow"/>
            </div>
            <div id="logoBox"
                class="logoBox md:h-[110px] h-[80px] w-[80px] mx-auto flex justify-center items-center border border-[#FFFFFF33] text-white md:w-[110px] bg-[#232665] rounded-[20px] mt-2">
                {/* <img class="md:h-[76px] md:w-[77px] h-[56px] w-[56px]" src="./assets/svg/champions-logo-white.svg" */}
                    alt=""/>
            </div>
            <h1 id="title" class="md:text-[40px] mt-2.5 text-[20px] font-semibold leading-[30px] md:leading-[50px]">Champions Leagues</h1>
            <p id="subTitle" class="text-xs leading-5 mt-0.5 md:mt-[5px] md:text-base md:leading-[26px] text-[#FFFFFFCC]">25 Dec, 2023 - 15 Jan, 2024 </p>
        </div>
    </div>
    <div id="contentSection" class="w-full bg-neutral-100">
        <div class="container-lg md:px-[112px] px-[16px]">
            <div class="flex pt-5 md:pt-10 justify-between items-center">
                <span class="md:text-[30px] text-[20px] leading-[30px] md:leading-[50px] font-semibold ">Match Fixtures</span>
                <div class="md:text-base text-xs font-medium text-[#201E1ECC] ">
                    <div class="custom-select-wrapper">
                        <label for="options" class="">Sort:</label>
                        <select id="options" class="bg-neutral-100 w-16 md:w-20 focus:border-neutral-100">
                            <option selected>Default</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="pt-3.5 md:pt-5 pb-[62px] md:pb-[98px] flex max-md:justify-center gap-5 flex-wrap">
                <div class=" w-[343px] h-[130px] md:w-[392px] md:h-[214px] bg-[#FFFFFF] card-shadow-lg rounded-[20px]">
                    <div class="flex justify-center gap-3.5 md:gap-[26px] pt-[20px] md:pt-[25px] ">
                        <div class="flex flex-row-reverse text-center items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-2 md:mt-3 object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Liverpool</p>
                        </div>
                        <div class="flex flex-col text-center md:pt-[37px] pt-[10px]">
                            <span class="md:text-xs text-[10px] text-[#FF7438]  leading-[15px]">10pm </span>
                            <span class="md:text-xs text-[10px] text-[#201E1E99] leading-[15px] max-md:mt-0.5">30 Dec</span>
                        </div>
                        <div class="flex text-center flex-row items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/manchester-united.png" class="w-full scale-[1.2] h-full mt-4 md:mt-[25px] object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Man City</p>
                        </div>
                    </div>
                    <div
                        class=" flex justify-between items-center pl-[12.5px] md:pl-[24px] p-2.5 md:pr-[18.5px] mt-[20px] md:mt-[25px] md:py-[15px] border-t border-[#4267B31A]">
                        <p class="text-xs md:text-sm text-[#201E1E99] leading-5" > Match 1</p>
                        <div class="flex items-center gap-1.5">
                            <p class="text-[#E82F24] text-xs md:text-base font-semibold ">Book Ticket</p>
                            <img src="./assets/svg/red-arrow.svg" alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div class=" w-[343px] h-[130px] md:w-[392px] md:h-[214px] bg-[#FFFFFF] card-shadow-lg rounded-[20px]">
                    <div class="flex justify-center gap-3.5 md:gap-[26px] pt-[20px] md:pt-[25px] ">
                        <div class="flex flex-row-reverse text-center items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-2 md:mt-3 object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Liverpool</p>
                        </div>
                        <div class="flex flex-col text-center md:pt-[37px] pt-[10px]">
                            <span class="md:text-xs text-[10px] text-[#FF7438]  leading-[15px]">10pm </span>
                            <span class="md:text-xs text-[10px] text-[#201E1E99] leading-[15px] max-md:mt-0.5">30 Dec</span>
                        </div>
                        <div class="flex text-center flex-row items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/manchester-united.png" class="w-full scale-[1.2] h-full mt-4 md:mt-[25px] object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Man City</p>
                        </div>
                    </div>
                    <div
                        class=" flex justify-between items-center pl-[12.5px] md:pl-[24px] p-2.5 md:pr-[18.5px] mt-[20px] md:mt-[25px] md:py-[15px] border-t border-[#4267B31A]">
                        <p class="text-xs md:text-sm text-[#201E1E99] leading-5" > Match 1</p>
                        <div class="flex items-center gap-1.5">
                            <p class="text-[#E82F24] text-xs md:text-base font-semibold ">Book Ticket</p>
                            <img src="./assets/svg/red-arrow.svg" alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div class=" w-[343px] h-[130px] md:w-[392px] md:h-[214px] bg-[#FFFFFF] card-shadow-lg rounded-[20px]">
                    <div class="flex justify-center gap-3.5 md:gap-[26px] pt-[20px] md:pt-[25px] ">
                        <div class="flex flex-row-reverse text-center items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-2 md:mt-3 object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Liverpool</p>
                        </div>
                        <div class="flex flex-col text-center md:pt-[37px] pt-[10px]">
                            <span class="md:text-xs text-[10px] text-[#FF7438]  leading-[15px]">10pm </span>
                            <span class="md:text-xs text-[10px] text-[#201E1E99] leading-[15px] max-md:mt-0.5">30 Dec</span>
                        </div>
                        <div class="flex text-center flex-row items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/manchester-united.png" class="w-full scale-[1.2] h-full mt-4 md:mt-[25px] object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Man City</p>
                        </div>
                    </div>
                    <div
                        class=" flex justify-between items-center pl-[12.5px] md:pl-[24px] p-2.5 md:pr-[18.5px] mt-[20px] md:mt-[25px] md:py-[15px] border-t border-[#4267B31A]">
                        <p class="text-xs md:text-sm text-[#201E1E99] leading-5" > Match 1</p>
                        <div class="flex items-center gap-1.5">
                            <p class="text-[#E82F24] text-xs md:text-base font-semibold ">Book Ticket</p>
                            <img src="./assets/svg/red-arrow.svg" alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div class=" w-[343px] h-[130px] md:w-[392px] md:h-[214px] bg-[#FFFFFF] card-shadow-lg rounded-[20px]">
                    <div class="flex justify-center gap-3.5 md:gap-[26px] pt-[20px] md:pt-[25px] ">
                        <div class="flex flex-row-reverse text-center items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-2 md:mt-3 object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Liverpool</p>
                        </div>
                        <div class="flex flex-col text-center md:pt-[37px] pt-[10px]">
                            <span class="md:text-xs text-[10px] text-[#FF7438]  leading-[15px]">10pm </span>
                            <span class="md:text-xs text-[10px] text-[#201E1E99] leading-[15px] max-md:mt-0.5">30 Dec</span>
                        </div>
                        <div class="flex text-center flex-row items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/manchester-united.png" class="w-full scale-[1.2] h-full mt-4 md:mt-[25px] object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Man City</p>
                        </div>
                    </div>
                    <div
                        class=" flex justify-between items-center pl-[12.5px] md:pl-[24px] p-2.5 md:pr-[18.5px] mt-[20px] md:mt-[25px] md:py-[15px] border-t border-[#4267B31A]">
                        <p class="text-xs md:text-sm text-[#201E1E99] leading-5" > Match 1</p>
                        <div class="flex items-center gap-1.5">
                            <p class="text-[#E82F24] text-xs md:text-base font-semibold ">Book Ticket</p>
                            <img src="./assets/svg/red-arrow.svg" alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div class=" w-[343px] h-[130px] md:w-[392px] md:h-[214px] bg-[#FFFFFF] card-shadow-lg rounded-[20px]">
                    <div class="flex justify-center gap-3.5 md:gap-[26px] pt-[20px] md:pt-[25px] ">
                        <div class="flex flex-row-reverse text-center items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-2 md:mt-3 object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Liverpool</p>
                        </div>
                        <div class="flex flex-col text-center md:pt-[37px] pt-[10px]">
                            <span class="md:text-xs text-[10px] text-[#FF7438]  leading-[15px]">10pm </span>
                            <span class="md:text-xs text-[10px] text-[#201E1E99] leading-[15px] max-md:mt-0.5">30 Dec</span>
                        </div>
                        <div class="flex text-center flex-row items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/manchester-united.png" class="w-full scale-[1.2] h-full mt-4 md:mt-[25px] object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Man City</p>
                        </div>
                    </div>
                    <div
                        class=" flex justify-between items-center pl-[12.5px] md:pl-[24px] p-2.5 md:pr-[18.5px] mt-[20px] md:mt-[25px] md:py-[15px] border-t border-[#4267B31A]">
                        <p class="text-xs md:text-sm text-[#201E1E99] leading-5" > Match 1</p>
                        <div class="flex items-center gap-1.5">
                            <p class="text-[#E82F24] text-xs md:text-base font-semibold ">Book Ticket</p>
                            <img src="./assets/svg/red-arrow.svg" alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div class=" w-[343px] h-[130px] md:w-[392px] md:h-[214px] bg-[#FFFFFF] card-shadow-lg rounded-[20px]">
                    <div class="flex justify-center gap-3.5 md:gap-[26px] pt-[20px] md:pt-[25px] ">
                        <div class="flex flex-row-reverse text-center items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-2 md:mt-3 object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Liverpool</p>
                        </div>
                        <div class="flex flex-col text-center md:pt-[37px] pt-[10px]">
                            <span class="md:text-xs text-[10px] text-[#FF7438]  leading-[15px]">10pm </span>
                            <span class="md:text-xs text-[10px] text-[#201E1E99] leading-[15px] max-md:mt-0.5">30 Dec</span>
                        </div>
                        <div class="flex text-center flex-row items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/manchester-united.png" class="w-full scale-[1.2] h-full mt-4 md:mt-[25px] object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Man City</p>
                        </div>
                    </div>
                    <div
                        class=" flex justify-between items-center pl-[12.5px] md:pl-[24px] p-2.5 md:pr-[18.5px] mt-[20px] md:mt-[25px] md:py-[15px] border-t border-[#4267B31A]">
                        <p class="text-xs md:text-sm text-[#201E1E99] leading-5" > Match 1</p>
                        <div class="flex items-center gap-1.5">
                            <p class="text-[#E82F24] text-xs md:text-base font-semibold ">Book Ticket</p>
                            <img src="./assets/svg/red-arrow.svg" alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div class=" w-[343px] h-[130px] md:w-[392px] md:h-[214px] bg-[#FFFFFF] card-shadow-lg rounded-[20px]">
                    <div class="flex justify-center gap-3.5 md:gap-[26px] pt-[20px] md:pt-[25px] ">
                        <div class="flex flex-row-reverse text-center items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-2 md:mt-3 object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Liverpool</p>
                        </div>
                        <div class="flex flex-col text-center md:pt-[37px] pt-[10px]">
                            <span class="md:text-xs text-[10px] text-[#FF7438]  leading-[15px]">10pm </span>
                            <span class="md:text-xs text-[10px] text-[#201E1E99] leading-[15px] max-md:mt-0.5">30 Dec</span>
                        </div>
                        <div class="flex text-center flex-row items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/manchester-united.png" class="w-full scale-[1.2] h-full mt-4 md:mt-[25px] object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Man City</p>
                        </div>
                    </div>
                    <div
                        class=" flex justify-between items-center pl-[12.5px] md:pl-[24px] p-2.5 md:pr-[18.5px] mt-[20px] md:mt-[25px] md:py-[15px] border-t border-[#4267B31A]">
                        <p class="text-xs md:text-sm text-[#201E1E99] leading-5" > Match 1</p>
                        <div class="flex items-center gap-1.5">
                            <p class="text-[#E82F24] text-xs md:text-base font-semibold ">Book Ticket</p>
                            <img src="./assets/svg/red-arrow.svg" alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div class=" w-[343px] h-[130px] md:w-[392px] md:h-[214px] bg-[#FFFFFF] card-shadow-lg rounded-[20px]">
                    <div class="flex justify-center gap-3.5 md:gap-[26px] pt-[20px] md:pt-[25px] ">
                        <div class="flex flex-row-reverse text-center items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-2 md:mt-3 object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Liverpool</p>
                        </div>
                        <div class="flex flex-col text-center md:pt-[37px] pt-[10px]">
                            <span class="md:text-xs text-[10px] text-[#FF7438]  leading-[15px]">10pm </span>
                            <span class="md:text-xs text-[10px] text-[#201E1E99] leading-[15px] max-md:mt-0.5">30 Dec</span>
                        </div>
                        <div class="flex text-center flex-row items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/manchester-united.png" class="w-full scale-[1.2] h-full mt-4 md:mt-[25px] object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Man City</p>
                        </div>
                    </div>
                    <div
                        class=" flex justify-between items-center pl-[12.5px] md:pl-[24px] p-2.5 md:pr-[18.5px] mt-[20px] md:mt-[25px] md:py-[15px] border-t border-[#4267B31A]">
                        <p class="text-xs md:text-sm text-[#201E1E99] leading-5" > Match 1</p>
                        <div class="flex items-center gap-1.5">
                            <p class="text-[#E82F24] text-xs md:text-base font-semibold ">Book Ticket</p>
                            <img src="./assets/svg/red-arrow.svg" alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div class=" w-[343px] h-[130px] md:w-[392px] md:h-[214px] bg-[#FFFFFF] card-shadow-lg rounded-[20px]">
                    <div class="flex justify-center gap-3.5 md:gap-[26px] pt-[20px] md:pt-[25px] ">
                        <div class="flex flex-row-reverse text-center items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-2 md:mt-3 object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Liverpool</p>
                        </div>
                        <div class="flex flex-col text-center md:pt-[37px] pt-[10px]">
                            <span class="md:text-xs text-[10px] text-[#FF7438]  leading-[15px]">10pm </span>
                            <span class="md:text-xs text-[10px] text-[#201E1E99] leading-[15px] max-md:mt-0.5">30 Dec</span>
                        </div>
                        <div class="flex text-center flex-row items-center gap-1.5 md:block">
                            <div
                                class="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full overflow-hidden">
                                {/* <img src="./assets/png/manchester-united.png" class="w-full scale-[1.2] h-full mt-4 md:mt-[25px] object-contain" */}
                                    alt="image"/>
                            </div>
                            <p class="text-sm md:text-base font-medium leading-[21px] md:leading-[24px] md:mt-2.5">Man City</p>
                        </div>
                    </div>
                    <div
                        class=" flex justify-between items-center pl-[12.5px] md:pl-[24px] p-2.5 md:pr-[18.5px] mt-[20px] md:mt-[25px] md:py-[15px] border-t border-[#4267B31A]">
                        <p class="text-xs md:text-sm text-[#201E1E99] leading-5" > Match 1</p>
                        <div class="flex items-center gap-1.5">
                            <p class="text-[#E82F24] text-xs md:text-base font-semibold ">Book Ticket</p>
                            <img src="./assets/svg/red-arrow.svg" alt="arrow"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <div class="w-full">
        <div class="bg-[#f6eb16] bg-[url(./assets/svg/small-logo.svg)]">
            <div
                class="container-lg px-6 gap-5 py-[35px]  md:pr-[112px] md:pl-[82px] md:py-[79px] flex flex-col md:flex-row md:justify-between md:items-center">
                <div class="text-center md:text-left">
                    <p
                        class="font-semibold text-[20px] md:text-[30px] leading-[30px] md:leading-[40px] lg:text-[40px] lg:leading-[50px] mb-[5px] md:mb-2.5">
                        Subscribe
                        to our newsletter</p>
                    <span
                        class="w-full max-[400px]:max-w-[239px] block mx-auto text-[#201E1ECC] md:text-base text-xs leading-[18px] md:leading-[26px]">70,000
                        fans get
                        notified about the hottest events. </span>
                </div>
                <div class="flex flex-col md:flex-row gap-5 items-center">
                    <div
                        class="flex items-center w-full md:min-w-[300px] lg:min-w-[350px] rounded-full bg-white h-[42px] md:h-[50px] overflow-hidden">
                        <input
                            class="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]"
                            type="email" name="search" placeholder="Enter your mail here" />
                    </div>
                    <button
                        class="bg-black text-sm text-white h-[42px] md:h-[50px] w-full md:w-[143px] font-semibold rounded-full">
                        Submit</button>
                </div>
            </div>

        </div>
        <div class="bg-black">
            <div class="container-lg ">
                <div
                    class="px-4 md:px-[112px] py-[35px] md:py-[60px] flex flex-col flex-wrap gap-[42px] md:gap-4 items-center md:flex-row text-white md:justify-between">
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
                        <img src="./assets/svg/facebook-logo.svg" class="w-4 h-4" alt="facebook-logo"/>
                    </div>
                    <div
                        class="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets/svg/youtube-logo.svg" class="w-4 h-4" alt="youtube-logo"/>
                    </div>
                    <div
                        class="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets/svg/insta-logo.svg" class="w-4 h-4" alt="insta-logo"/>
                    </div>
                    <div
                        class="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets/svg/x-logo.svg" class="w-4 h-4" alt="x-logo"/>
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
    <script src="script.js"></script>

</body>
    </div>
  )
}

export default TournamentDetail