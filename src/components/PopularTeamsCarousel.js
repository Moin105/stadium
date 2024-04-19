import React, { useState, useEffect, useRef } from 'react';
import arrow from '../assets/svg/arrow.svg';
import championsLogo from '../assets/svg/champions-logo.svg';
import laliga from '../assets/svg/laliga.svg';
import bundesLogo from '../assets/svg/bundes-logo.svg';
import euroLogo from '../assets/svg/euro-logo.svg';
import qualifiresLogo from '../assets/svg/qualifires-logo.svg';
import liberLogo from '../assets/svg/liber-logo.svg';
import TeamLogoCard from './TeamLogoCard';

const data = [championsLogo, laliga, bundesLogo, euroLogo, qualifiresLogo, liberLogo, championsLogo, laliga, championsLogo, laliga];

const PopularTeamsCarousel = () => {
    const carouselRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [gap, setGap] = useState(20);
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current && carouselRef.current.querySelector('div')) {
                setCardWidth(carouselRef.current.querySelector('div').offsetWidth);
                const gapValue = parseInt(carouselRef.current.getAttribute('data-gap'), 10) || 20;
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
        <div className="carousel-container container-lg md:px-[52px] bg-neutral-100 flex gap-2.5 md:gap-5" data-gap="29">
            <div className="leftBtn mt-[63px] max-md:hidden w-10 h-10 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer" onClick={scrollLeft}><img src={arrow} className="w-5 h-5" alt="arrow"/></div>
            <div className="overflow-auto no-scrollbar md:overflow-hidden">
                <div ref={carouselRef} className="carousel max-md:px-4 flex items-center gap-5 pb-5 md:pb-[60px] transition-transform duration-700 ease-in-out" style={{ transform: `translateX(${scrollPosition}px)` }}>
                    {data.map((logo, index) => {
                        return (
                            <TeamLogoCard key={index} logo={logo} />
                        )
                    })}
            </div>
        </div>
            <div className="rightBtn mt-[63px] max-md:hidden w-10 h-10 rotate-180 flex items-center justify-center shrink-0 border border-[#201E1E] border-opacity-[20%] rounded-full cursor-pointer" onClick={scrollRight}><img src={arrow} className="w-5 h-5" alt="arrow"/></div>
        </div>
    );
};

export default PopularTeamsCarousel;