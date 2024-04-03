import React, { useState, useEffect, useRef } from 'react';
import arrow from '../assets/svg/arrow.svg';
import chelseaShirt from '../assets/svg/chelsea-shirt.svg';
import standardShirt from '../assets/svg/standard-shirt.svg';
import stakeShirt from '../assets/svg/stake-shirt.svg';
import etihadShirt from '../assets/svg/etihad-shirt.svg';
import englandShirt from '../assets/svg/england-shirt.svg';
const TeamsCarousel = () => {
    const carouselRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [gap, setGap] = useState(29);
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current && carouselRef.current.querySelector('div')) {
                setCardWidth(carouselRef.current.querySelector('div').offsetWidth);
                const gapValue = parseInt(carouselRef.current.getAttribute('data-gap'), 10) || 29;
                setGap(gapValue);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollLeft = () => {
        const totalMoveDistance = cardWidth + gap;
        let newPosition = scrollPosition + totalMoveDistance;
        if (newPosition > 0) newPosition = 0;
        setScrollPosition(newPosition);
    };

    const scrollRight = () => {
        const totalMoveDistance = cardWidth + gap;
        let newPosition = scrollPosition - totalMoveDistance;
        const maxScrollLeft = carouselRef.current ? carouselRef.current.scrollWidth - carouselRef.current.clientWidth : 0;
        if (Math.abs(newPosition) > maxScrollLeft) newPosition = -maxScrollLeft;
        setScrollPosition(newPosition);
    };

    return (
        <div className="carousel-container container-lg md:px-[52px] bg-neutral-100 md:bg-white py-5 md:py-[45px] flex items-center gap-5" data-gap="29">
            <div className="leftBtn max-md:hidden w-10 h-10 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer" onClick={scrollLeft}><img src={arrow} alt="arrow"/></div>
            <div className="overflow-auto no-scrollbar md:overflow-hidden">
                <div ref={carouselRef} className="carousel flex max-md:px-4 gap-[12.82px] md:gap-[29px] transition-transform duration-700 ease-in-out" style={{ transform: `translateX(${scrollPosition}px)` }}>
                <div className="min-w-fit">
                    <div className="border-[3px] border-[#D0003166] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div className="border-[3px] border-white bg-[#D000311A] rounded-full">
                            <img src={standardShirt} className="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div className="min-w-fit">
                    <div className="border-[3px] border-[#0017BB66] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div className="border-[3px] border-white bg-[#0017BB1A] rounded-full">
                            <img src={chelseaShirt} className="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div className="min-w-fit">
                    <div className="border-[3px] border-[#D0003166] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div className="border-[3px] border-white bg-[#D000311A] rounded-full">
                            <img src={standardShirt} className="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div className="min-w-fit">
                    <div className="border-[3px] border-[#13417366] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div className="border-[3px] border-white bg-[#1341731A] rounded-full">
                            <img src={stakeShirt} className="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div className="min-w-fit">
                    <div className="border-[3px] border-[#D0003166] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div className="border-[3px] border-white bg-[#D000311A] rounded-full">
                            <img src={standardShirt} className="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div className="min-w-fit">
                    <div className="border-[3px] border-[#6AB4DB] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div className="border-[3px] border-white bg-[#B5DDF733] rounded-full">
                            <img src={etihadShirt} className="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div className="min-w-fit">
                    <div className="border-[3px] border-[#D0003166] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div className="border-[3px] border-white bg-[#D000311A] rounded-full">
                            <img src={standardShirt} className="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div className="min-w-fit">
                    <div className="border-[3px] border-[#252E6E] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div className="border-[3px] border-white bg-[#66CCDE] rounded-full">
                            <img src={englandShirt} className="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                <div className="min-w-fit">
                    <div className="border-[3px] border-[#D0003166] rounded-full w-[90px] md:w-[126px] h-[90px] md:h-[126px]">
                        <div className="border-[3px] border-white bg-[#D000311A] rounded-full">
                            <img src={standardShirt} className="w-full h-full" alt="shirt"/>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm mt-[9px] md:mt-[15px] text-center">Team Name</p>
                </div>
                </div>
            </div>
            <div className="rightBtn max-md:hidden w-10 h-10 rotate-180 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer" onClick={scrollRight}>
        <img src={arrow} alt="arrow" />
        </div>
        </div>
    );
};

export default TeamsCarousel;
                