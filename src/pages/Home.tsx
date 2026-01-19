import React, { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Image as LucideImage, Play, Volume2 } from 'lucide-react';
import heroBackground from '../assets/hero-background.jpg';
import deityImage from '../assets/deity.png';
import dailyDarshanImg from '../assets/daily-darshan.jpg';
import upcomingEventImg from '../assets/upcoming-event-img.png';
import satsangFrame from '../assets/satsang-frame.png';
import templeFrame from '../assets/temple-frame.png';
import founderImage from '../assets/founder-image.png';
import SatsangUpdateImage from '../components/SatsangUpdateImage';
import SectionTitle from '../components/SectionTitle';


export default function Home() {
    const upcomingScrollRef = useRef<HTMLDivElement>(null);
    const satsangSliderRef = useRef<HTMLDivElement>(null);
    const babjiSliderRef = useRef<HTMLDivElement>(null);
    const founderSliderRef = useRef<HTMLDivElement>(null);

    // Initial setup for infinite sliders
    useEffect(() => {
        const initialize = (ref: React.RefObject<HTMLDivElement | null>) => {
            if (ref.current) {
                const container = ref.current;
                container.scrollLeft = container.scrollWidth / 3;
            }
        };
        initialize(upcomingScrollRef);
        initialize(satsangSliderRef);
        initialize(babjiSliderRef);
        initialize(founderSliderRef);

        // Trigger initial scaling logic for Babji and Founder
        if (babjiSliderRef.current) babjiSliderRef.current.dispatchEvent(new Event('scroll'));
        if (founderSliderRef.current) founderSliderRef.current.dispatchEvent(new Event('scroll'));
    }, []);

    const handleInfiniteScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            const container = ref.current;
            const singleSetWidth = container.scrollWidth / 3;
            if (container.scrollLeft >= singleSetWidth * 2) {
                container.scrollLeft = container.scrollLeft - singleSetWidth;
            } else if (container.scrollLeft <= 5) {
                container.scrollLeft = container.scrollLeft + singleSetWidth;
            }
        }
    };

    const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right', amount: number = 400) => {
        if (ref.current) {
            const newScrollLeft = ref.current.scrollLeft + (direction === 'right' ? amount : -amount);
            ref.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full bg-white font-outfit">
            {/* Hero Section */}
            <section className="relative w-full max-w-container mx-auto h-[900px] overflow-hidden -mt-[132px]">
                {/* Background Image */}
                <img
                    src={heroBackground}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />

                {/* Deity Image Centered - Adjusted for more dominance */}
                <div className="absolute inset-0 flex items-end justify-center pb-24 z-10 transition-transform duration-1000">
                    <img
                        src={deityImage}
                        alt="Deity"
                        className="h-[750px] w-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                    />
                </div>

                {/* Professional Bottom Gradient - Seamless transition */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[400px] z-20 pointer-events-none"
                    style={{
                        background: 'linear-gradient(180deg, rgba(232, 247, 255, 0) 0%, rgba(232, 247, 255, 0.8) 50%, #E8F7FF 100%)',
                    }}
                />
            </section>

            {/* Daily Darshan Section (Section 2) */}
            <section className="w-full bg-[#E8F7FF] overflow-hidden">
                <div className="max-w-container mx-auto pt-[60px] pb-[100px] px-4 md:px-[100px] flex flex-col items-center gap-[60px]">
                    {/* Text Container */}
                    <SectionTitle title="DAILY DARSHAN" color="#005382" />

                    {/* Image and Text Wrapper */}
                    <div className="w-full max-w-[1240px] flex flex-col items-center gap-[20px]">
                        {/* Inside Container */}
                        <div className="flex flex-col items-center gap-[10px] pb-[18px]" style={{ width: '763px', maxWidth: '100%' }}>
                            <img
                                src={dailyDarshanImg}
                                alt="Daily Darshan"
                                className="object-cover"
                                style={{
                                    width: '763px',
                                    height: '1252px',
                                    borderRadius: '18px',
                                    maxWidth: '100%'
                                }}
                            />
                            <p className="font-katibeh font-[400] text-[40px] leading-[32px] text-[#005382] text-center capitalize mt-2">
                                Daily Darshan
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Event Section */}
            <section
                className="w-full py-20 relative overflow-hidden"
                style={{
                    background: 'linear-gradient(180deg, #E8F7FF 0%, #FFF5F5 15%, #FFF5F5 85%, #E8F7FF 100%)'
                }}
            >
                <div className="w-full max-w-container mx-auto px-8 flex flex-col items-center">
                    <SectionTitle title="UPCOMING EVENT" color="#005382" className="mb-16" />

                    {/* Slider Container */}
                    <div className="flex items-center justify-center gap-8 w-full max-w-[1300px]">
                        {/* Left Arrow */}
                        <button
                            onClick={() => scroll(upcomingScrollRef, 'left')}
                            className="w-12 h-12 shrink-0 rounded-full border border-[#005382] flex items-center justify-center text-[#005382] hover:bg-[#005382] hover:text-white transition-colors"
                        >
                            <ArrowLeft size={24} />
                        </button>

                        {/* Cards Wrapper */}
                        <div
                            ref={upcomingScrollRef}
                            className="flex gap-8 overflow-x-auto py-4 px-2 scroll-smooth"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                            onScroll={() => handleInfiniteScroll(upcomingScrollRef)}
                        >
                            {[1, 2, 3].map((set) => (
                                <React.Fragment key={set}>
                                    {[
                                        { title: "Gyan Dhyan Chintan" },
                                        { title: "Online Satsang Sabha" },
                                        { title: "Anadimukt Vishwam" },
                                        { title: "Special Event 1" },
                                        { title: "Special Event 2" }
                                    ].map((item, index) => (
                                        <div
                                            key={`${set}-${index}`}
                                            className="flex flex-col shrink-0 bg-white"
                                            style={{
                                                width: '370px',
                                                height: '349px',
                                                borderRadius: '36px',
                                                boxShadow: '6px 6px 0px 0px #005382',
                                                border: '1px solid #005382'
                                            }}
                                        >
                                            {/* Image Container */}
                                            <div className="w-full overflow-hidden rounded-t-[36px]" style={{ height: '262px' }}>
                                                <img
                                                    src={upcomingEventImg}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                            <div className="p-4 text-center">
                                                <h3 className="text-[#005382] font-semibold text-lg">{item.title}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={() => scroll(upcomingScrollRef, 'right')}
                            className="w-12 h-12 shrink-0 rounded-full border border-[#005382] flex items-center justify-center text-[#005382] hover:bg-[#005382] hover:text-white transition-colors"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Satsang Update Section */}
            <section className="w-full bg-[#E8F7FF] overflow-hidden">
                <div className="max-w-container mx-auto px-4 md:px-[100px] pb-[100px] pt-[20px] flex flex-col items-center gap-[60px]">
                    <SectionTitle title="SATSANG UPDATE" color="#038972" />

                    <div className="w-full flex justify-center gap-[96px]">
                        {/* Left Column (Images) */}
                        <div className="flex flex-col gap-[24px]" style={{ width: '431px' }}>
                            {[
                                { title: "P.P Divyaswami Vichran" },
                                { title: "Online Donation" }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center bg-white group"
                                    style={{
                                        width: '431px',
                                        borderRadius: '18px',
                                        boxShadow: '6px 6px 0px 0px #038972',
                                        padding: '24px 20px',
                                        gap: '18px'
                                    }}
                                >
                                    <div className="w-full h-[220px] flex justify-center">
                                        <SatsangUpdateImage
                                            src={upcomingEventImg}
                                            className="h-full w-auto transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="font-katibeh text-[32px] leading-[32px] text-[#038972] text-center">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div
                            className="bg-[#038972]"
                            style={{
                                width: '2px',
                                height: '652px',
                                opacity: 1
                            }}
                        />

                        {/* Right Column (Events List) */}
                        <div className="flex flex-col gap-[8px]" style={{ width: '488px' }}>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className={`group relative cursor-pointer transition-all duration-300 border border-[#038972] ${i === 1 ? 'bg-[#038972]' : 'bg-white hover:bg-[#038972]'}`}
                                    style={{
                                        width: '488px',
                                        height: '115px',
                                        borderRadius: '20px',
                                        padding: '16px 24px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <div className="w-full flex flex-col justify-between h-full">
                                        <div className="flex justify-between items-start w-full">
                                            <span className={`font-medium text-[18px] leading-[24px] ${i === 1 ? 'text-white' : 'text-[#038972] group-hover:text-white'}`}>
                                                Global Events
                                            </span>
                                            <ArrowUpRight
                                                size={20}
                                                className={i === 1 ? 'text-white' : 'text-[#038972] group-hover:text-white'}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <p className={`font-normal text-[14px] leading-[20px] line-clamp-2 ${i === 1 ? 'text-white' : 'text-[#555555] group-hover:text-white'}`}>
                                                SMVS Swaminarayan Mandir Satellite 8th Patotsav | HDH Swamishri Vicharan
                                            </p>
                                            <p className={`font-normal text-[14px] leading-[20px] ${i === 1 ? 'text-white/80' : 'text-[#555555] group-hover:text-white/80'}`}>
                                                17 Oct, 2024
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* View More Button - Centered below */}
                    <button
                        className="flex items-center justify-center text-white font-medium transition-transform hover:scale-105 active:scale-95"
                        style={{
                            width: '285px',
                            height: '48px',
                            gap: '8px',
                            padding: '12px',
                            borderRadius: '67px',
                            background: '#038972',
                            boxShadow: '4px 4px 0px 0px #005E4E',
                            fontFamily: 'Outfit, sans-serif'
                        }}
                    >
                        View More
                    </button>
                </div>
            </section>

            {/* PHOTO & VIDEO Section */}
            <section className="w-full bg-[#E8F7FF] overflow-hidden">
                <div className="max-w-container mx-auto px-4 md:px-[100px] py-[100px] flex flex-col items-center gap-[60px]">
                    {/* Title */}
                    <SectionTitle title="PHOTO & VIDEO" color="#C65300" />

                    {/* Cards Container */}
                    <div className="flex justify-center flex-wrap gap-[50px] w-full max-w-[1186px]">
                        {[
                            { type: "VIDEO", title: "Typhoid Jevi Vikat Parist.." },
                            { type: "SHORT VIDEO", title: "Typhoid Jevi Vikat Parist.." },
                            { type: "EVENT", title: "Typhoid Jevi Vikat Parist.." }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-[20px]" style={{ width: '362px' }}>
                                <h3 className="font-katibeh font-[400] text-[40px] leading-[32px] text-[#C65300] text-center uppercase tracking-[0.06em]">
                                    {item.type}
                                </h3>

                                {/* Card Box */}
                                <div
                                    className="bg-white flex flex-col items-center transition-transform hover:-translate-y-1"
                                    style={{
                                        width: '325px',
                                        height: '396px',
                                        gap: '22px',
                                        borderRadius: '18px',
                                        padding: '20px',
                                        boxShadow: '6px 6px 0px 0px #C65300'
                                    }}
                                >
                                    <img
                                        src={upcomingEventImg}
                                        alt={item.title}
                                        className="object-cover"
                                        style={{
                                            width: '285px',
                                            height: '216px',
                                            borderRadius: '12px'
                                        }}
                                    />

                                    <div className="flex flex-col gap-[8px] w-full">
                                        <h4
                                            className="truncate"
                                            style={{
                                                fontFamily: 'sans-serif', // Fallback for Basis Grotesque Arabic Pro
                                                fontWeight: 400,
                                                fontSize: '20px',
                                                lineHeight: '20px',
                                                color: '#C65300'
                                            }}
                                        >
                                            {item.title}
                                        </h4>
                                        <p
                                            style={{
                                                fontWeight: 400,
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                color: '#57534E'
                                            }}
                                        >
                                            October 19, 2024
                                        </p>
                                    </div>

                                    <button
                                        className="flex items-center justify-center transition-colors text-[#C65300] hover:bg-[#C65300] hover:text-white"
                                        style={{
                                            width: '285px',
                                            height: '48px',
                                            borderRadius: '67px',
                                            border: '1px solid #C65300',
                                            fontSize: '16px',
                                            marginTop: 'auto'
                                        }}
                                    >
                                        View More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DAILY SATSANG SABHA Section */}
            <section
                className="w-full py-[100px] relative overflow-hidden"
                style={{
                    background: 'linear-gradient(180deg, #E8F7FF 0%, #FFF5F5 15%, #FFF5F5 85%, #E8F7FF 100%)'
                }}
            >
                <div className="max-w-container mx-auto flex flex-col items-center gap-[80px]">
                    {/* Title */}
                    <SectionTitle title="DAILY SATSANG SABHA" color="#005382" />

                    {/* Slider Container */}
                    <div className="relative w-full flex items-center">
                        {/* Left Arrow - Positioned specifically over peek area */}
                        <button
                            className="absolute left-[8%] z-30 w-14 h-14 rounded-full border-2 border-[#005382] flex items-center justify-center text-[#005382] bg-white hover:bg-[#005382] hover:text-white transition-all shadow-lg"
                            onClick={() => scroll(satsangSliderRef, 'left', 1086)}
                        >
                            <ArrowLeft size={28} />
                        </button>

                        {/* Cards Scroll Area */}
                        <div
                            ref={satsangSliderRef}
                            className="flex gap-[120px] overflow-x-auto py-10 px-[237px] scroll-smooth no-scrollbar w-full items-center snap-x snap-mandatory"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                            onScroll={() => handleInfiniteScroll(satsangSliderRef)}
                        >
                            {[1, 2, 3].map((set) => (
                                <React.Fragment key={set}>
                                    {[1, 2, 3, 4, 5].map((_, index) => (
                                        <div
                                            key={`${set}-${index}`}
                                            className="shrink-0 relative group transition-all duration-700 snap-center"
                                            style={{
                                                width: '966px',
                                                height: '477px',
                                            }}
                                        >
                                            {/* Inner Image Container */}
                                            <div
                                                className="absolute inset-[12px] overflow-hidden"
                                                style={{
                                                    clipPath: 'polygon(11% 2%, 89% 2%, 92% 10%, 92% 22%, 97% 30%, 97% 70%, 92% 78%, 92% 90%, 89% 98%, 11% 98%, 8% 90%, 8% 78%, 3% 70%, 3% 30%, 8% 22%, 8% 10%)'
                                                }}
                                            >
                                                <img
                                                    src={upcomingEventImg}
                                                    alt="Satsang Sabha"
                                                    className="w-full h-full object-cover"
                                                />

                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all cursor-pointer">
                                                    <div className="w-24 h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                                                        <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent ml-2 shadow-sm" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Frame Image Overlay */}
                                            <img
                                                src={satsangFrame}
                                                alt="Frame"
                                                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                                            />
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Right Arrow - Positioned specifically over peek area */}
                        <button
                            className="absolute right-[8%] z-30 w-14 h-14 rounded-full border-2 border-[#005382] flex items-center justify-center text-[#005382] bg-white hover:bg-[#005382] hover:text-white transition-all shadow-lg"
                            onClick={() => scroll(satsangSliderRef, 'right', 1086)}
                        >
                            <ArrowRight size={28} />
                        </button>
                    </div>
                </div>
            </section>

            {/* SOCIAL ACTIVITY Section */}
            <section
                className="w-full py-[100px] relative overflow-hidden"
                style={{
                    background: 'linear-gradient(180deg, #E8F7FF 0%, #FFF5F5 15%, #FFF5F5 85%, #E8F7FF 100%)'
                }}
            >
                <div className="max-w-container mx-auto px-4 md:px-[100px] flex flex-col items-center gap-[60px]">
                    {/* Title */}
                    <SectionTitle title="Social Activity" color="#038972" />

                    {/* Cards Container */}
                    <div className="flex justify-center flex-wrap gap-[40px] w-full max-w-[1240px]">
                        {[
                            { title: "Donation", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                            { title: "Charities", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
                        ].map((item, index) => (
                            <div key={index} className="relative group" style={{ width: '600px', height: '302.12px' }}>
                                {/* Accent Background (Thick Green Shadow) */}
                                <div
                                    className="absolute inset-0 bg-[#038972] translate-y-[8.8px] translate-x-[8.8px]"
                                    style={{ borderRadius: '52.85px' }}
                                />

                                {/* Main Card Content */}
                                <div
                                    className="relative w-full h-full bg-white flex overflow-hidden transition-all duration-500 ease-out"
                                    style={{
                                        borderRadius: '52.85px',
                                    }}
                                >
                                    {/* Left Image Component */}
                                    <div className="w-[48%] h-full flex items-center justify-center -translate-x-[2px]">
                                        <SatsangUpdateImage
                                            src={dailyDarshanImg}
                                            className="h-[302px] w-auto"
                                        />
                                    </div>

                                    {/* Right Content Container */}
                                    <div
                                        className="flex flex-col justify-center pl-4 pr-10 gap-[16px]"
                                        style={{
                                            width: '312px', // Fill the remaining space (600 - 288)
                                            height: '302px', // Match card height for proper centering
                                        }}
                                    >
                                        {/* Title Block */}
                                        <div className="flex flex-col gap-1 items-start">
                                            <h3
                                                className="font-katibeh text-[40px] leading-none text-[#038972]"
                                            >
                                                {item.title}
                                            </h3>
                                            <div
                                                style={{
                                                    width: '119px',
                                                    height: '2.64px',
                                                    backgroundColor: '#038972',
                                                }}
                                            />
                                        </div>

                                        {/* Description Text */}
                                        <p
                                            className="text-[#57534E] text-[18px] leading-[24px] line-clamp-3"
                                            style={{
                                                fontFamily: 'Outfit, sans-serif',
                                                letterSpacing: '0.015em',
                                                textAlign: 'justify',
                                                margin: 0
                                            }}
                                        >
                                            {item.desc}
                                        </p>

                                        {/* View More Button */}
                                        <button
                                            className="flex items-center justify-center text-white font-bold transition-all active:scale-95"
                                            style={{
                                                width: '94px',
                                                height: '40px',
                                                borderRadius: '8px',
                                                background: '#F34743',
                                                padding: '8px 30px',
                                                fontSize: '16px'
                                            }}
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GURUDEV BABJI PHOTO & VIDEO Section */}
            <section className="w-full bg-[#E8F7FF] overflow-hidden">
                <div className="max-w-container mx-auto py-[100px] flex flex-col items-center gap-[80px]">
                    {/* Title */}
                    <SectionTitle title="GURUDEV BABJI PHOTO & VIDEO" color="#C65300" />

                    {/* Slider Container */}
                    <div className="relative w-full flex items-center justify-center">
                        {/* Left Arrow */}
                        <button
                            className="absolute left-[20px] lg:left-[40px] z-30 w-14 h-14 rounded-full border-2 border-[#C65300] flex items-center justify-center text-[#C65300] bg-white/80 backdrop-blur-sm hover:bg-[#C65300] hover:text-white transition-all shadow-lg active:scale-90"
                            onClick={() => scroll(babjiSliderRef, 'left', 432)}
                        >
                            <ArrowLeft size={28} />
                        </button>

                        {/* Scroll Area */}
                        <div
                            ref={babjiSliderRef}
                            className="flex gap-[12px] overflow-x-auto py-20 px-[calc(50%-210px)] scroll-smooth no-scrollbar w-full items-center snap-x snap-mandatory"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                            onScroll={(e) => {
                                const container = e.currentTarget;
                                handleInfiniteScroll(babjiSliderRef);

                                const centers = Array.from(container.children);
                                const containerCenter = container.scrollLeft + container.offsetWidth / 2;

                                centers.forEach((child) => {
                                    const element = child as HTMLElement;
                                    const childCenter = element.offsetLeft + element.offsetWidth / 2;
                                    const distance = Math.abs(containerCenter - childCenter);

                                    // Apply scaling based on distance from center
                                    const scale = Math.max(0.7, 1.1 - (distance / container.offsetWidth) * 0.8);
                                    const opacity = Math.max(0.5, 1 - (distance / container.offsetWidth));
                                    const zIndex = distance < 100 ? 20 : 10;

                                    const content = element.firstElementChild as HTMLElement;
                                    if (content) {
                                        content.style.transform = `scale(${scale})`;
                                        content.style.opacity = `${opacity}`;
                                        element.style.zIndex = `${zIndex}`;
                                    }
                                });
                            }}
                        >
                            {[1, 2, 3].map((set) => (
                                <React.Fragment key={set}>
                                    {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                                        <div
                                            key={`${set}-${index}`}
                                            className="shrink-0 relative group snap-center flex items-center justify-center transition-all duration-300"
                                            style={{
                                                width: '420px',
                                                height: '500px',
                                            }}
                                        >
                                            {/* The actual card content */}
                                            <div
                                                className="w-full h-full relative transition-all duration-500 bg-white origin-center"
                                                style={{
                                                    borderRadius: '24px',
                                                    border: '8px solid #FFFFFF',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                                    overflow: 'hidden',
                                                    transform: 'scale(0.85)',
                                                    opacity: 0.7
                                                }}
                                            >
                                                <img
                                                    src={upcomingEventImg}
                                                    alt="Gurudev Babji"
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/20 transition-all cursor-pointer">
                                                    <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 scale-90 group-hover:scale-100 transition-transform">
                                                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            className="absolute right-[20px] lg:right-[40px] z-30 w-14 h-14 rounded-full border-2 border-[#C65300] flex items-center justify-center text-[#C65300] bg-white/80 backdrop-blur-sm hover:bg-[#C65300] hover:text-white transition-all shadow-lg active:scale-90"
                            onClick={() => scroll(babjiSliderRef, 'right', 432)}
                        >
                            <ArrowRight size={28} />
                        </button>
                    </div>
                </div>
            </section>

            {/* FOUNDER & SUCCESSORS Section */}
            <section
                className="w-full py-[100px] relative overflow-hidden"
                style={{
                    background: 'linear-gradient(180deg, #E8F7FF 0%, #FFF5F5 15%, #FFF5F5 85%, #E8F7FF 100%)'
                }}
            >
                <div className="max-w-container mx-auto flex flex-col items-center gap-[80px]">
                    {/* Title */}
                    <SectionTitle title="FOUNDER & SUCCESSORS" color="#005382" />

                    {/* Slider Container */}
                    <div className="relative w-full flex items-center justify-center">
                        {/* Left Arrow */}
                        <button
                            className="absolute left-[20px] lg:left-[40px] z-30 w-14 h-14 rounded-full border-2 border-[#005382] flex items-center justify-center text-[#005382] bg-white/80 backdrop-blur-sm hover:bg-[#005382] hover:text-white transition-all shadow-lg active:scale-90"
                            onClick={() => scroll(founderSliderRef, 'left', 460)}
                        >
                            <ArrowLeft size={28} />
                        </button>

                        {/* Scroll Area */}
                        <div
                            ref={founderSliderRef}
                            className="flex gap-[40px] overflow-x-auto py-20 px-[calc(50%-210px)] scroll-smooth no-scrollbar w-full items-center snap-x snap-mandatory"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                            onScroll={(e) => {
                                const container = e.currentTarget;
                                handleInfiniteScroll(founderSliderRef);

                                const children = Array.from(container.children);
                                const containerCenter = container.scrollLeft + container.offsetWidth / 2;

                                children.forEach((child) => {
                                    const element = child as HTMLElement;
                                    const childCenter = element.offsetLeft + element.offsetWidth / 2;
                                    const distance = Math.abs(containerCenter - childCenter);

                                    // Apply scaling based on distance from center
                                    const scale = Math.max(0.75, 1.15 - (distance / container.offsetWidth) * 0.9);
                                    const opacity = Math.max(0.4, 1 - (distance / container.offsetWidth));
                                    const zIndex = distance < 100 ? 20 : 10;

                                    const content = element.firstElementChild as HTMLElement;
                                    if (content) {
                                        content.style.transform = `scale(${scale})`;
                                        content.style.opacity = `${opacity}`;
                                        element.style.zIndex = `${zIndex}`;
                                    }
                                });
                            }}
                        >
                            {[1, 2, 3].map((set) => (
                                <React.Fragment key={set}>
                                    {[
                                        { name: "HDH Gopalanand Swami" },
                                        { name: "Bhagwan Swaminarayan" },
                                        { name: "HDH Gopalanand Swami" },
                                        { name: "HDH Gopalanand Swami" },
                                        { name: "HDH Gopalanand Swami" }
                                    ].map((item, index) => (
                                        <div
                                            key={`${set}-${index}`}
                                            className="shrink-0 relative group snap-center flex flex-col items-center justify-center transition-all duration-300"
                                            style={{
                                                width: '420px',
                                                height: '650px',
                                            }}
                                        >
                                            {/* The actual card content */}
                                            <div
                                                className="w-full h-full relative transition-all duration-500 origin-center flex flex-col items-center"
                                                style={{
                                                    transform: 'scale(0.85)',
                                                    opacity: 0.6
                                                }}
                                            >
                                                {/* Temple Image and Person Image */}
                                                <div className="relative w-full h-[550px] flex items-center justify-center">
                                                    <img
                                                        src={templeFrame}
                                                        alt="Temple Frame"
                                                        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                                                    />
                                                    {/* Person Image inside temple frame */}
                                                    <div className="absolute top-[35%] w-[60%] h-[45%] flex items-center justify-center overflow-hidden">
                                                        <img
                                                            src={founderImage}
                                                            alt={item.name}
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Name Typography */}
                                                <h3
                                                    className="mt-6 font-serif text-[28px] font-bold text-[#005382] text-center"
                                                    style={{ fontFamily: 'Outfit, sans-serif' }}
                                                >
                                                    {item.name}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            className="absolute right-[20px] lg:right-[40px] z-30 w-14 h-14 rounded-full border-2 border-[#005382] flex items-center justify-center text-[#005382] bg-white/80 backdrop-blur-sm hover:bg-[#005382] hover:text-white transition-all shadow-lg active:scale-90"
                            onClick={() => scroll(founderSliderRef, 'right', 460)}
                        >
                            <ArrowRight size={28} />
                        </button>
                    </div>
                </div>
            </section>

            {/* GALLERY Section */}
            <section className="w-full bg-[#E8F7FF] overflow-hidden">
                <div className="max-w-container mx-auto px-4 md:px-[100px] py-[100px] flex flex-col items-center gap-[80px]">
                    {/* Title */}
                    <SectionTitle title="Gallery" color="#038972" />

                    {/* Categories Grid */}
                    <div className="flex justify-center items-center gap-[40px] w-full flex-wrap px-[100px]">
                        {[
                            { label: "IMAGE", icon: LucideImage },
                            { label: "VIDEO", icon: Play },
                            { label: "AUDIO", icon: Volume2 }
                        ].map((category, index) => (
                            <div key={index} className="flex flex-col items-center gap-6 group cursor-pointer">
                                {/* Hexagon Shape Container */}
                                <div className="relative w-[340px] h-[360px] flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                                    {/* Green Border Hexagon (Background) */}
                                    <div
                                        className="absolute inset-0 bg-[#038972]"
                                        style={{
                                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                                        }}
                                    />

                                    {/* Inner Image Hexagon (Clipped) */}
                                    <div
                                        className="absolute inset-[4px] bg-white overflow-hidden"
                                        style={{
                                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                                        }}
                                    >
                                        <img
                                            src={dailyDarshanImg}
                                            alt={category.label}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Overlay with Icon */}
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                            <div className="w-20 h-20 bg-black/30 backdrop-blur-md rounded-full border-2 border-white/50 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                                                <category.icon size={40} strokeWidth={1.5} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Label */}
                                <h3 className="font-outfit font-bold text-[24px] text-[#038972] tracking-[0.05em]">
                                    {category.label}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
