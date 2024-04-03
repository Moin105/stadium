import React from 'react'

function Privacy() {
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
    <!-- mobile header --/>
    <div class="md:hidden w-full h-[63px] bg-[#FFFFFF] px-[17px] flex items-center">
        <div
            class="w-[31.32px] h-[31.32px] flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer">
            <img src="./assets//svg/back-arrow.svg" alt="arrow"/>
        </div>
        <p class="text-base font-semibold flex-1 -ml-[31.32px] text-center">Privacy
            Policy</p>
    </div>
    <!-- Content --/>
    <div class="w-full bg-neutral-100">
        <div class="container-lg md:pt-[80px] pb-[50px] md:pb-[100px] md:px-[112px] px-5 flex ">
            <div class="flex-1">
                <div>
                    <h1 class="font-semibold text-[20px] md:text-[30px] leading-[50px]">Privacy
                        Policy</h1>
                        <div class="w-[335px] lg:hidden h-[444px] mb-[20px] bg-white border-[1px] border-[#201E1E1A] rounded-[10px]">
                            <div class="w-[295px] h-[56px] rounded-[20px] justify-center flex items-center mx-auto mt-[30px] bg-[#4267B31A] ">
                                <span class="text-base leading-[24px] font-bold text-[#4267B3]">Information Collection and Use </span>
                            </div>
                            <div class="w-[255px]  h-[48px] rounded-[20px] justify-start flex items-center mx-auto mt-[20px]">
                                <span class="text-sm  leading-[24px] text-[#201E1E99]">Storage and Protection of Personal Information </span>
                            </div>
                            <div class="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[20px]">
                                <span class="text-sm  leading-[24px] text-[#201E1E99]">Sharing of Personal Information </span>
                            </div>
                            <div class="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[30px]">
                                <span class="text-sm  leading-[24px] text-[#201E1E99]">Data Retention</span>
                            </div>
                            <div class="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[30px]">
                                <span class="text-sm   leading-[24px] text-[#201E1E99]">Access to Personal Information </span>
                            </div>
                            <div class="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[30px]">
                                <span class="text-sm  leading-[24px] text-[#201E1E99]">Changes to this Privacy Policy </span>
                            </div>
                            <div class="w-[255px]  h-[24px] rounded-[20px] justify-start flex items-center mx-auto mt-[30px]">
                                <span class="text-sm  leading-[24px] text-[#201E1E99]">Contact Information </span>
                            </div>
                        </div>
                    <p class="text-sm md:text-base leading-[22px] md:mt-[10px] md:leading-[26px] text-[#201E1E99]">
                        At stadiumz, we are committed to protecting the privacy and security of our clients and website
                        visitors. This Privacy Policy outlines how we collect, use, store and protect the personal
                        information we receive through our website and services.</p>
                </div>
                <div class="md:pt-[34px]">
                    <h1 class="font-semibold text-base md:text-[20px] leading-[28px]">Information Collection and Use</h1>
                    <p class="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        The information we collect from clients and website visitors may include personal details such
                        as name, email address, phone number, and other relevant information necessary to provide our
                        services. This information is used to respond to inquiries, provide quotes, and fulfill orders.
                    </p>
                    <p class="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        We may also collect information through the use of cookies and other tracking technologies to
                        analyze site usage and improve the user experience. This information may include your IP
                        address, browser type, device information, and other details.</p>
                </div>
                <div class="md:pt-[34px]">
                    <h1 class="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Storage and Protection of Personal Information
                    </h1>
                    <p class="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        We take all necessary precautions to protect the personal information we collect from
                        unauthorized access, alteration, or destruction. All personal information is stored in a secure
                        server and access is restricted to authorized personnel only.</p>
                </div>
                <div class="md:pt-[34px]">
                    <h1 class="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Sharing of Personal Information
                    </h1>
                    <p class="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        We do not share personal information with any third parties unless necessary to provide the
                        requested service or comply with legal requirements.</p>
                </div>
                <div class="md:pt-[34px]">
                    <h1 class="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Data Retention
                    </h1>
                    <p class="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        We retain personal information only as long as necessary to provide the services requested and
                        to comply with legal requirements.</p>
                </div>
                <div class="md:pt-[34px]">
                    <h1 class="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Access to Personal Information
                    </h1>
                    <p class="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        Clients have the right to access and correct their personal information in our possession. To
                        exercise this right, please contact us using the information provided below.</p>
                </div>
                <div class="md:pt-[34px]">
                    <h1 class="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Changes to this Privacy Policy
                    </h1>
                    <p class="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        We reserve the right to make changes to this Privacy Policy at any time. If we make changes, we
                        will post the updated policy on our website and update the effective date.</p>
                </div>
                <div class="md:pt-[34px]">
                    <h1 class="font-semibold text-base md:text-[20px] leading-6 md:leading-[28px]">Contact Information
                    </h1>
                    <p class="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        If you have any questions or concerns regarding our Privacy Policy, please contact us at
                        hey@stadiumz.com.</p>
                    <p class="text-sm md:text-base leading-[22px] md:leading-[26px] md:pt-[20px] text-[#201E1E99]">
                        This Privacy Policy was last updated on Dec. 30, 2024.</p>
                </div>

            </div>
            <div class="md:w-[392px] hidden lg:block md:h-[610px] bg-white border-[1px] ml-[41px] border-[#201E1E1A] rounded-[10px]">
                <div class="w-[338px] h-[68px] rounded-[20px] justify-center flex items-center mx-auto mt-[30px] bg-[#4267B31A] ">
                    <span class="text-[20px] leading-[28px] font-bold text-[#4267B3]">Information Collection and Use </span>
                </div>
                <div class="w-[350px] h-[88px] rounded-[20px] justify-start flex items-center mx-auto mt-[18px]">
                    <span class="text-base px-5 leading-[28px] text-[#201E1E99]">Storage and Protection of Personal Information </span>
                </div>
                <div class="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[14]">
                    <span class="text-base px-5 leading-[28px] text-[#201E1E99]">Sharing of Personal Information </span>
                </div>
                <div class="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[14px]">
                    <span class="text-base px-5 leading-[28px] text-[#201E1E99]">Data Retention</span>
                </div>
                <div class="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[14px]">
                    <span class="text-base px-5  leading-[28px] text-[#201E1E99]">Access to Personal Information </span>
                </div>
                <div class="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[14px]">
                    <span class="text-base px-5 leading-[28px] text-[#201E1E99]">Changes to this Privacy Policy </span>
                </div>
                <div class="w-[350px]  h-[64px] rounded-[20px] justify-start flex items-center mx-auto mt-[18px]">
                    <span class="text-base px-5 leading-[28px] text-[#201E1E99]">Contact Information </span>
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

    </div></div>
  )
}

export default Privacy