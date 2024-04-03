import React from 'react'

function SignUp() {
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
            <img src="./assets//svg/back-arrow.svg" alt="arrow"/>
        </div>
        <p class="text-base font-semibold flex-1 -ml-[31.32px] text-center">Sign up</p>
    </div>
    <div class="w-full bg-neutral-100">
        <div class="max-w-[598px] md:pb-[100px] md:pt-[73px] mx-auto">
            <div class="flex hidden md:block text-center">
                <h1 class="font-semibold text-[40px] leading-[50px]"> Sign Up</h1>
            </div>
            <div class="w-full bg-white px-4 md:px-20 pt-[27.69px] md:mt-10 md:pt-[33px] pb-[31px] border md:rounded-[10px] border-[#2F2F2F0D]">
                <div class="flex gap-[13px] md:gap-[20px]">
                    <div class="flex-1">
                        <p class="font-medium text-[14px] leading-[22px]">First Name</p>
                        <div class="flex mt-2 items-center pr-5 rounded-full border border-[#e8e8e8] h-[52px] overflow-hidden">
                            <input class="text-black text-sm w-full border-none bg-transparent md:pl-[21px] px-[14px] outline-none focus:outline-none placeholder:text-[#201E1E66]" type="text" name="fname" placeholder="First Name" />
                        </div>
                    </div>
                    <div class="flex-1">
                        <p class="font-medium text-[14px] leading-[22px]">Last Name</p>
                        <div class="flex mt-2 items-center pr-5 rounded-full border border-[#e8e8e8] h-[52px] overflow-hidden">
                            <input class="text-black text-sm w-full border-none bg-transparent md:pl-[21px] px-[14px] py-1 outline-none focus:outline-none placeholder:text-[#201E1E66]" type="text" name="lname" placeholder="Last Name" />
                        </div>
                    </div>
                </div>
                <div class="mt-[15px]" >
                    <p class="font-medium text-[14px] leading-[22px]">Email</p>
                    <div class="flex mt-2 items-center pr-5 rounded-full border border-[#e8e8e8] h-[52px] overflow-hidden">
                        <input class="text-black text-sm w-full border-none bg-transparent md:pl-[21px] px-[14px] py-1 outline-none focus:outline-none placeholder:text-[#201E1E66]" type="text" name="lname" placeholder="Email" />
                    </div>
                </div>
                <div class="mt-[15px]" >
                    <p class="font-medium text-[14px] leading-[22px]">Password</p>
                    <div class="flex mt-2 items-center pr-5 rounded-full border border-[#e8e8e8] h-[52px] overflow-hidden">
                        <input class="text-black text-sm w-full border-none bg-transparent md:pl-[21px] px-[14px] py-1 outline-none focus:outline-none placeholder:text-[#201E1E66]" type="text" name="password" placeholder="Password" />
                        <img src="./assets/svg/hide.svg" class=" w-5 h-6" alt="hide"/>
                    </div>
                </div>
                <div class="mt-[15px]" >
                    <p class="font-medium text-[14px] leading-[22px]">Confirm Password</p>
                    <div class="flex mt-2 items-center pr-5 rounded-full border border-[#e8e8e8] h-[52px] overflow-hidden">
                        <input class="text-black text-sm w-full border-none bg-transparent md:pl-[21px] px-[14px] py-1 outline-none focus:outline-none placeholder:text-[#201E1E66]" type="text" name="lname" placeholder="Confirm Password" />
                        <img src="./assets/svg/hide.svg" class=" w-5 h-6" alt="hide"/>
                    </div>
                </div>
                <div class="mt-[15px] md:mt-[30px]">
                    <button class="bg-[#E82F24] text-sm text-white h-12 md:h-[60px] w-full py-[13.5px] border border-[#E82F24] font-semibold rounded-full">
                        <p class="text-[14px] leading-[21px] font-semibold">
                            Sign up
                        </p>
                    </button>  
                </div>
                <div class=" text-center mt-5 md:mt-[30px]">
                    <p class="text-xstext-[#201E1E99] leading-[20px]">
                        By continuing, you agree to Stadiumz <span class="text-[#201E1ECC] underline">Terms of Service.</span>
                        We will manage information about you as described in our <span class="text-[#201E1ECC] underline">Privacy Policy,</span > &  <span class="text-[#201E1ECC] underline">Cookie Policy.</span>
                    </p>
                </div>
                <div class="text-center mt-[30px] md:mt-5 ">
                    <p class="text-[14px] leading-[22px] text-[#201E1ECC]">Already have an account? <span class="font-semibold text-[#E82F24]">Login</span></p>
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
                    <span class="w-full max-[400px]:max-w-[239px] block mx-auto text-[#201E1ECC] md:text-base text-xsleading-[18px] md:leading-[26px]">70,000 fans get
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
                    <div class="md:hidden flex justify-between gap-2 gap-6 text-xstext-[#FFFFFFCC]">
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
                <span class="text-xstext-[#FFFFFFCC]">© 2022
                    Stadiumz. All Rights Reserved.</span>
                <div class="hidden md:flex justify-between gap-2 gap-[25px] text-xsfont-medium text-[#FFFFFFCC]">
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
  )
}

export default SignUp