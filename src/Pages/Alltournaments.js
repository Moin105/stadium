import React from 'react'

function Alltournaments() {
  return (
    <div>
      <header className="container-lg max-w-[1214px] px-4 mx-auto py-5 bg-white">
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
                        <button className="bg-white text-sm text-[#E82F24] h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Login</button>
                        <button className="bg-[#E82F24] text-sm text-white h-10 w-[130px] border border-[#E82F24] font-semibold rounded-full">Sign up</button>
                    </div>
                </div>
                <img src="./assets/svg/trolly.svg" alt="Trolly"/>
            </div>
        </div>
        <div className="md:hidden mt-[25px] bg-neutral-100 flex items-center pr-5 w-full rounded-full border border-[#e8e8e8] mt-10 h-[50px] overflow-hidden">
            <input className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]" type="text" name="search" placeholder="Search" />
            <img src="./assets/svg/search.svg" className="w-5 h-5" alt="search"/>
        </div>
    </header>
    <div className="max-md:hidden w-full flex justify-center items-center h-[330px] bg-[url(./assets/png/banner2.png)] bg-cover">
        <div className="w-full max-w-[500px] text-white text-center">
            <h1 className="text-[40px] font-semibold leading-[50px]">Tournaments</h1>
            <p className="leading-[26px] font-normal mt-1">Sed ut perspiciatis unde omnis iste natus eratusror Sed ut pers
                piciatis unde omnis iste natus eratusror  </p>
            <div className="flex items-center pr-5 w-full rounded-full bg-white mt-10 h-[50px] overflow-hidden">
                <input className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]" type="text" name="search" placeholder="Search" />
                <img src="./assets/svg/search.svg" className="w-5 h-5" alt="search"/>
            </div>
        </div>
    </div>
    <div className="w-full bg-neutral-100">
        <h1 className=" md:hidden text-[20px] font-semibold pt-[20px] pb-[15px] px-4">Tournament</h1>
        <div className="container-lg md:pt-[60px] px-4 pb-[20px] md:px-[112px] md:pb-[100px] flex gap-2.5 md:gap-5 flex-wrap">
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/champions-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/laliga.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/bundes-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/euro-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/qualifires-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/liber-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/copdelray-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/euro-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/confederations-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/champions-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/liber-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/qualifires-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/bundes-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/liber-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/champions-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/euro-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/qualifires-logo.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
            </div>
            <div className="card-shadow-sm w-[107px] md:w-[186px] h-[110px] md:h-[166px] shrink-0 bg-white rounded-[20px] md:rounded-[29px] flex justify-center items-center">
                <img src="./assets/svg/laliga.svg" className="w-[73px] md:w-[98px] h-[73px] md:h-[100px]" alt="logo"/>
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
                        <img src="./assets/svg/facebook-logo.svg" className="w-4 h-4" alt="facebook-logo"/>
                    </div>
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets/svg/youtube-logo.svg" className="w-4 h-4" alt="youtube-logo"/>
                    </div>
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets/svg/insta-logo.svg" className="w-4 h-4" alt="insta-logo"/>
                    </div>
                    <div
                        className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0D0D0D] border border-[#FFFFFF0D]">
                        <img src="./assets/svg/x-logo.svg" className="w-4 h-4" alt="x-logo"/>
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
        <a href="all-tournaments.html" className="relative text-[#4267B3] text-xs leading-3 text-center block w-fit">
            <span className="w-[35px] h-1 rounded-b bg-[#4267B3] absolute -top-[18px] left-1/2 -translate-x-[50%]"></span>
            <img src="./assets/svg/award-blue.svg" className="mx-auto mb-[5px]" alt="icon"/>
            Tournament
        </a>
        <a href="my-account.html" className="relative text-[#201E1E66] text-xs leading-3 text-center block w-fit">
            <img src="./assets/svg/person.svg" className="mx-auto mb-[5px]" alt="icon"/>
            Account
        </a>
    </div></div>
  )
}

export default Alltournaments