import React from 'react'

function Home() {
  return (
    <div>
      <header class="container-lg max-w-[1214px] px-4 mx-auto py-5 bg-white">
        <div class="flex justify-between items-center gap-4">
            <img src="./assets/png/logo.png" class="h-6 w-[157px]" alt="logo"/>
            <div class="flex gap-[30px]">
                <div class="gap-10 hidden md:flex">
                    <ul class="flex gap-5 lg:gap-10 items-center text-sm">
                        <li><a href="/home.html">Home</a></li>
                        <li><a href="/all-team.html">Teams</a></li>
                        <li><a href="/all-tournaments.html">Tournament</a></li>
                    </ul>
                    <div class="flex gap-5">
                        <button class="bg-white text-sm text-[#E82F24] h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Login</button>
                        <button class="bg-[#E82F24] text-sm text-white h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Sign up</button>
                    </div>
                </div>
                <img src="./assets/svg/trolly.svg" alt="Trolly"/>
            </div>
        </div>
        <div class="md:hidden mt-[25px] bg-neutral-100 flex items-center pr-5 w-full rounded-full border border-[#e8e8e8] mt-10 h-[50px] overflow-hidden">
            <input class="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]" type="text" name="search" placeholder="Search" />
            <img src="./assets/svg/search.svg" class="w-5 h-5" alt="search"/>
        </div>
    </header>

    <div class="max-md:hidden w-full flex justify-center items-center h-[330px] bg-[url(./assets/png/banner1.png)] bg-cover">
        <div class="w-full max-w-[500px] text-white text-center">
            <h1 class="text-[40px] font-semibold leading-[50px]">Welcome to Stadiumz</h1>
            <p class="leading-[26px] font-normal mt-1">Sed ut perspiciatis unde omnis iste natus eratusror Sed ut pers piciatis unde omnis iste natus eratusror </p>
            <div class="flex items-center pr-5 w-full rounded-full bg-white mt-10 h-[50px] overflow-hidden">
                <input class="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]" type="text" name="search" placeholder="Search" />
                <img src="./assets/svg/search.svg" class="w-5 h-5" alt="search"/>
            </div>
        </div>
    </div>

    <div class="carousel-container container-lg md:px-[52px] bg-neutral-100 md:bg-white py-5 md:py-[45px] flex items-center gap-5" data-gap="29">
        <div class="leftBtn max-md:hidden w-10 h-10 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
        <img src="./assets//svg/arrow.svg" alt="arrow"/>
        </div>
        <div class="overflow-auto no-scrollbar md:overflow-hidden">
            <div class="carousel flex max-md:px-4 gap-[12.82px] md:gap-[29px] transition-transform duration-700 ease-in-out">
                <div class="min-w-fit">
                    <div class="border-[3px] border-[#D0003166] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div class="border-[3px] border-white bg-[#D000311A] rounded-full">
                            <img src="./assets/svg/standard-shirt.svg" class="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p class="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div class="min-w-fit">
                    <div class="border-[3px] border-[#0017BB66] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div class="border-[3px] border-white bg-[#0017BB1A] rounded-full">
                            <img src="./assets/svg/chelsea-shirt.svg" class="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p class="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div class="min-w-fit">
                    <div class="border-[3px] border-[#D0003166] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div class="border-[3px] border-white bg-[#D000311A] rounded-full">
                            <img src="./assets/svg/standard-shirt.svg" class="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p class="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div class="min-w-fit">
                    <div class="border-[3px] border-[#13417366] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div class="border-[3px] border-white bg-[#1341731A] rounded-full">
                            <img src="./assets/svg/stake-shirt.svg" class="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p class="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div class="min-w-fit">
                    <div class="border-[3px] border-[#D0003166] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div class="border-[3px] border-white bg-[#D000311A] rounded-full">
                            <img src="./assets/svg/standard-shirt.svg" class="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p class="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div class="min-w-fit">
                    <div class="border-[3px] border-[#6AB4DB] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div class="border-[3px] border-white bg-[#B5DDF733] rounded-full">
                            <img src="./assets/svg/etihad-shirt.svg" class="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p class="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div class="min-w-fit">
                    <div class="border-[3px] border-[#D0003166] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div class="border-[3px] border-white bg-[#D000311A] rounded-full">
                            <img src="./assets/svg/standard-shirt.svg" class="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p class="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div class="min-w-fit">
                    <div class="border-[3px] border-[#252E6E] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div class="border-[3px] border-white bg-[#66CCDE] rounded-full">
                            <img src="./assets/svg/england-shirt.svg" class="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p class="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div class="min-w-fit">
                    <div class="border-[3px] border-[#D0003166] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div class="border-[3px] border-white bg-[#D000311A] rounded-full">
                            <img src="./assets/svg/standard-shirt.svg" class="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p class="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
            </div>
        </div>
        <div class="rightBtn max-md:hidden w-10 h-10 rotate-180 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
        <img src="./assets//svg/arrow.svg" alt="arrow" />
        </div>
    </div>
    <div class="w-full bg-neutral-100 pt-5 md:pt-[60px] pb-5 md:pb-20">
        <div class="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
            <h2 class="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">Popular</h2>
            <a class="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="all-tournaments.html">View all <img src="./assets/svg/arrow.svg" class="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow" /></a>
        </div>
        <div class="carousel-container container-lg md:px-[52px] bg-neutral-100 flex gap-2.5 md:gap-5" data-gap="20">
            <div class="leftBtn mt-[63px] max-md:hidden w-10 h-10 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer"><img src="./assets//svg/arrow.svg" class="w-5 h-5" alt="arrow"/></div>
            <div class="overflow-auto no-scrollbar md:overflow-hidden">
                <div class="carousel max-md:px-4 flex items-center gap-5 pb-5 md:pb-[60px] transition-transform duration-700 ease-in-out">
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/champions-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/laliga.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/bundes-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/euro-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/qualifires-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/liber-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/champions-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/laliga.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/champions-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/laliga.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                </div>
            </div>
            <div class="rightBtn mt-[63px] max-md:hidden w-10 h-10 rotate-180 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer"><img src="./assets//svg/arrow.svg" class="w-5 h-5" alt="arrow"/></div>
        </div>
        <div class="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
            <h2 class="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">Tournament</h2>
            <a class="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="tournament.html">View all <img src="./assets/svg/arrow.svg" class="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow"/></a>
        </div>
        <div class="flex items-center gap-[12.42px] md:gap-5 overflow-x-auto pb-5 md:pb-[60px] no-scrollbar container-lg px-4 md:px-[112px]">
            <div class="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner1.webp" class="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
                    <div class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner1.webp" class="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
                    <div class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner3.webp" class="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
                    <div class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner3.webp" class="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
                    <div class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
            <h2 class="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">Upcoming</h2>
            <a class="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="upcoming.html">View all 
            <img src="./assets/svg/arrow.svg" class="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow" /></a>
        </div>
        <div class="flex items-center gap-[12.42px] md:gap-5 overflow-x-auto pb-5 md:pb-[60px] no-scrollbar container-lg px-4 md:px-[112px]">
            <div class="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner4.webp" class="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-3 object-contain" alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
                    <div class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner3.webp" class="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
                    <div class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner1.webp" class="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
                    <div class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner3.webp" class="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
                    <div class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
            <h2 class="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">Deals</h2>
            <a class="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="#">View all <img src="./assets/svg/arrow.svg" class="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow"/>
            </a>
        </div>
        <div class="flex items-center gap-[12.42px] md:gap-5 overflow-x-auto pb-5 md:pb-[60px] no-scrollbar container-lg px-4 md:px-[112px]">
            <div class="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner4.webp" class="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#E2E4F5] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/infinite-shirt.png" class="w-full h-full mt-3 object-contain" alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
                    <div class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner3.webp" class="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
                    <div class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner1.webp" class="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
                    <div class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
            <div class="relative w-[230px] md:w-[392px] h-[304px] md:h-[375px] rounded-[20px] card-shadow-lg shrink-0">
                <img src="./assets/png/card-banner3.webp" class="w-full h-[70px] md:h-[130px]" alt="banner"/>
                <div class="flex gap-1.5 items-end md:items-center absolute top-[43px] md:top-[67px] left-3 md:left-[18px]">
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#FFE0E2] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/manchester-united.png" class="w-full h-full mt-3.5" alt="image"/>
                    </div>
                    <p class="text-sm md:text-base max-md:mb-0.5 md:text-white">vs</p>
                    <div class="w-[70px] md:w-[80px] h-[70px] md:h-[80px] bg-[#EEEEEE] shrink-0 rounded-full border-[3px] md:border-4 border-white overflow-hidden">
                        <img src="./assets/png/stake-shirt.png" class="w-full h-full mt-1 object-contain" alt="image"/>
                    </div>
                </div>
                <div class="px-3 md:px-5 pt-[63px] md:pt-[37px] pb-3 md:pb-[18px]">
                    <div class="px-2.5 py-[4.5px] rounded-full bg-[#4267B3] bg-opacity-10 text-[#4267B3] text-[10px] leading-[15px] md:leading-[18px] md:text-xs w-fit">Premier League</div>
                    <h3 class="text-base md:text-xl font-semibold mt-[5px] md:mt-2 leading-[24px] md:leading-[30px]">Liverpool vs Man City</h3>
                    <div class="flex gap-2.5 items-center my-[12px] md:my-[15px]">
                        <img src="./assets/svg/location.svg" class="w-4 h-4" alt="location icon"/>
                        <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Anfield Stadium</p>
                    </div>
                    <div class="flex items-center gap-[19px]">
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/calendar.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">Thu 07 Dec</p>
                        </div>
                        <span class="w-[1px] h-3 bg-[#4267B366] rounded-"></span>
                        <div class="flex gap-1 items-center">
                            <img src="./assets/svg/clock.svg" class="w-4 h-4" alt="location icon"/>
                            <p class="text-[10px] md:text-xs leading-[15px] md:leading-[18px] text-[#201E1ECC]">8:15 PM ko</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-[15px] md:mt-5 gap-4">
                        <h4 class="text-base leading-[24px] md:text-xl md:leading-[30px] font-semibold">$399</h4>
                        <button class="bg-[#E82F24] text-sm text-white h-[35px] md:h-[38px] w-[98px] border border-[#E82F24] font-semibold rounded-full">Book</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
            <h2 class="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">All Teams</h2>
            <a class="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="all-team.html">View all <img src="./assets/svg/arrow.svg" class="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow"/></a>
        </div>
        <div class="carousel-container container-lg md:px-[52px] bg-neutral-100 flex gap-5" data-gap="20">
            <div class="leftBtn mt-[63px] max-md:hidden w-10 h-10 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
            <img src="./assets//svg/arrow.svg" class="w-5 h-5" alt="arrow"/></div>
            <div class="overflow-auto no-scrollbar md:overflow-hidden">
                <div class="carousel max-md:px-4 flex items-center gap-5 pb-5 md:pb-[60px] transition-transform duration-700 ease-in-out">
                    <div class="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#FAE5EA] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div class="bg-[#FFFFFF4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src="./assets/svg/standard-shirt.svg" class="w-[110px] md:w-[130px] h-[110px] md:h-[130px] max-md:-mt-1.5" alt="logo"/>
                        </div>
                        <div class="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Liverpool</div>
                    </div>
                    <div class="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#0017BB36] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div class="bg-[#FFFFFF4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src="./assets/svg/chelsea-shirt.svg" class="w-[110px] md:w-[130px] h-[110px] md:h-[130px] max-md:-mt-1.5" alt="logo"/>
                        </div>
                        <div class="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Chelsea</div>
                    </div>
                    <div class="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#1341731A] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div class="bg-[#FFFFFF4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src="./assets/svg/england-shirt.svg" class="w-[110px] md:w-[130px] h-[110px] md:h-[130px] max-md:-mt-1.5" alt="logo"/>
                        </div>
                        <div class="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">England</div>
                    </div>
                    <div class="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#1341731A] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div class="bg-[#1B2F4A1A] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src="./assets/svg/husky-shirt.svg" class="w-[110px] md:w-[130px] h-[110px] md:h-[130px] -mt-1.5 md:-mt-5" alt="logo"/>
                        </div>
                        <div class="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Millwall</div>
                    </div>
                    <div class="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#CAEDFF] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div class="bg-[#6AB4DB4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src="./assets/svg/unibet-shirt.svg" class="w-[110px] md:w-[130px] h-[110px] md:h-[130px] -mt-1.5 md:-mt-5" alt="logo"/>
                        </div>
                        <div class="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Liverpool</div>
                    </div>
                    <div class="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#FAE5EA] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div class="bg-[#FFFFFF4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src="./assets/svg/standard-shirt.svg" class="w-[110px] md:w-[130px] h-[110px] md:h-[130px] max-md:-mt-1.5" alt="logo"/>
                        </div>
                        <div class="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Liverpool</div>
                    </div>
                    <div class="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#CAEDFF] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div class="bg-[#6AB4DB4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src="./assets/svg/unibet-shirt.svg" class="w-[110px] md:w-[130px] h-[110px] md:h-[130px] -mt-1.5 md:-mt-5" alt="logo"/>
                        </div>
                        <div class="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Liverpool</div>
                    </div>
                    <div class="relative overflow-hidden card-shadow-sm w-[144px] md:w-[186px] h-[136px] md:h-[176px] shrink-0 bg-[#FAE5EA] rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <div class="bg-[#FFFFFF4D] rounded-full w-[130px] h-[130px] md:w-[168.34px] md:h-[168.34px] flex justify-center items-center md:mt-2">
                            <img src="./assets/svg/standard-shirt.svg" class="w-[110px] md:w-[130px] h-[110px] md:h-[130px] max-md:-mt-1.5" alt="logo"/>
                        </div>
                        <div class="bg-white w-full text-xs md:text-base h-9 md:h-[46.59px] text-[#201E1ECC] font-medium flex justify-center items-center absolute bottom-0 left-0">Liverpool</div>
                    </div>
                </div>
            </div>
            <div class="rightBtn mt-[63px] max-md:hidden w-10 h-10 rotate-180 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer"><img src="./assets//svg/arrow.svg" class="w-5 h-5" alt="arrow"/></div>
        </div>
        <div class="container-lg flex items-center justify-between gap-4 mb-[15px] md:mb-5 px-4 md:px-[112px]">
            <h2 class="text-xl md:text-[30px] leading-[30px] md:leading-[50px] font-semibold">Popular</h2>
            <a class="flex items-center gap-[5px] md:gap-2.5 text-xs md:text-base leading-[18px] md:leading-[24px] font-medium text-[#201E1ECC]" href="all-tournaments.html">View all <img src="./assets/svg/arrow.svg" class="rotate-180 w-4 h-4 md:w-5 md:h-5" alt="arrow"/></a>
        </div>
        <div class="carousel-container container-lg md:px-[52px] bg-neutral-100 flex gap-2.5 md:gap-5" data-gap="20">
            <div class="leftBtn mt-[63px] max-md:hidden w-10 h-10 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer"><img src="./assets//svg/arrow.svg" class="w-5 h-5" alt="arrow"/></div>
            <div class="overflow-auto no-scrollbar md:overflow-hidden">
                <div class="carousel max-md:px-4 flex items-center gap-5 pb-5 md:pb-[60px] transition-transform duration-700 ease-in-out">
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/champions-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/laliga.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/bundes-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/euro-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/qualifires-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/liber-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/champions-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/laliga.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/champions-logo.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                    <div class="card-shadow-sm w-[130px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                        <img src="./assets/svg/laliga.svg" class="w-[75px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
                    </div>
                </div>
            </div>
            <div class="rightBtn mt-[63px] max-md:hidden w-10 h-10 rotate-180 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer"><img src="./assets//svg/arrow.svg" class="w-5 h-5" alt="arrow"/></div>
        </div>
        <div class="container-lg px-4 md:px-[112px]">
            <div class="bg-white lg:flex md:items-center px-[27.58px] lg:px-[70px] py-[30px] md:py-[51.5px] rounded-[20px]">
                <div class="text-center lg:mr-[63px] lg:w-[262px] lg:px-3.5">
                    <div class="w-[60px] h-[60px] mb-2.5 md:mb-3 rounded-full bg-[#13B752] bg-opacity-10 flex justify-center items-center mx-auto">
                        <img src="./assets/svg/shield.svg" class="w-9 h-9" alt="icon"/>
                    </div>
                    <p class="text-base md:text-[20px] font-semibold leading-[24px] md:leading-[30px]">Only safe & secure sites</p>
                    <p class="text-sm leading-[21px] mt-[5px]">We assess the integrity of every site we recommend
                        before adding them to your search.
                        </p>
                </div>
                <span class="max-lg:hidden w-[1px] h-[167px] bg-[#4267B333]"></span>
                <div class="text-center lg:ml-[63px] lg:mr-[52px] max-lg:my-[27px] lg:w-[288px] lg:px-3.5">
                    <div class="w-[60px] h-[60px] mb-2.5 md:mb-3 rounded-full bg-[#426FB3] bg-opacity-10 flex justify-center items-center mx-auto">
                        <img src="./assets/svg/ticket.svg" class="w-9 h-9" alt="icon"/>
                    </div>
                    <p class="text-base md:text-[20px] font-semibold leading-[24px] md:leading-[30px]">We find more Tickets</p>
                    <p class="text-sm leading-[21px] mt-[5px]">Compare all the best
                        ticket sites in one
                        simple search                    
                    </p>
                </div>
                <span class="max-lg:hidden w-[1px] h-[167px] bg-[#4267B333]"></span>
                <div class="text-center lg:ml-[54px] lg:w-[288px] lg:px-[9px]">
                    <div class="w-[60px] h-[60px] mb-2.5 md:mb-3 rounded-full bg-[#FF7438] bg-opacity-10 flex justify-center items-center mx-auto">
                        <img src="./assets/svg/heart.svg" class="w-9 h-9" alt="icon"/>
                    </div>
                    <p class="text-base md:text-[20px] font-semibold leading-[24px] md:leading-[30px]">Fans love us</p>
                    <p class="text-sm text-[#201E1EB2] leading-[21px] mt-[5px]">Over 2.5 millions fans
                        each year trust
                        help get the best
                        deal on tickets.
                        </p>
                </div>
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
                class=" container-lg md:mx-auto md:px-[112px] pt-[30px] pb-[106px] md:pb-[35px] md:py-[30px] flex text-white flex flex-col md:flex-row gap-5 items-center md:justify-between ">
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
        <a href="home.html" class="relative text-[#4267B3] text-xs leading-3 text-center block w-fit">
            <span class="w-[35px] h-1 rounded-b bg-[#4267B3] absolute -top-[18px] left-1/2 -translate-x-[50%]"></span>
            <img src="./assets/svg/home-blue.svg" class="mx-auto mb-[5px]" alt="icon"/>
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
    </div></div>
  )
}

export default Home