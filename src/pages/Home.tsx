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
                                    <div
                                        className="overflow-hidden"
                                        style={{
                                            width: '391px',
                                            height: '218px',
                                            borderRadius: '12px'
                                        }}
                                    >
                                        <img
                                            src={upcomingEventImg}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                                                className="absolute inset-0 overflow-hidden"
                                                style={{
                                                    WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 967 478' preserveAspectRatio='none'%3E%3Cpath d='M832,1 H132 C129,1 128,6 128,22 V40 C128,44 126,44 115,44 C106,44 83,58 83,97 V120 C83,124 80,124 67,118 C64,118 52,124 52,143 C52,165 42,184 31,200 C25,208 1,238 1,238 C1,238 25,268 31,276 C42,292 52,311 52,333 C52,346 64,358 67,358 C80,358 83,358 83,358 V379 C83,405 91,418 98,425 C106,432 115,432 125,432 V436 C125,445 128,454 128,454 V454 C128,465 130,471 131,473 C132,475 134,475 134,475 H832 C832,475 834,475 835,473 C836,471 838,465 838,454 V436 C838,432 840,432 850,432 C860,432 882,418 882,379 V357 C882,354 885,353 886,353 L898,358 C901,359 904,356 907,356 C913,344 913,333 913,333 C913,311 923,292 934,276 C946,261 951,254 964,238 C964,238 940,200 934,200 C923,184 913,165 913,143 C913,130 910,124 907,121 C904,118 899,118 899,118 L886,123 C884,123 882,121 882,119 V97 C882,71 875,58 867,51 C860,44 851,44 850,44 H840 C839,44 838,42 838,40 V22 C838,11 836,6 835,3 C834,1 832,1 832,1 Z' fill='white'/%3E%3C/svg%3E")`,
                                                    maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 967 478' preserveAspectRatio='none'%3E%3Cpath d='M832,1 H132 C129,1 128,6 128,22 V40 C128,44 126,44 115,44 C106,44 83,58 83,97 V120 C83,124 80,124 67,118 C64,118 52,124 52,143 C52,165 42,184 31,200 C25,208 1,238 1,238 C1,238 25,268 31,276 C42,292 52,311 52,333 C52,346 64,358 67,358 C80,358 83,358 83,358 V379 C83,405 91,418 98,425 C106,432 115,432 125,432 V436 C125,445 128,454 128,454 V454 C128,465 130,471 131,473 C132,475 134,475 134,475 H832 C832,475 834,475 835,473 C836,471 838,465 838,454 V436 C838,432 840,432 850,432 C860,432 882,418 882,379 V357 C882,354 885,353 886,353 L898,358 C901,359 904,356 907,356 C913,344 913,333 913,333 C913,311 923,292 934,276 C946,261 951,254 964,238 C964,238 940,200 934,200 C923,184 913,165 913,143 C913,130 910,124 907,121 C904,118 899,118 899,118 L886,123 C884,123 882,121 882,119 V97 C882,71 875,58 867,51 C860,44 851,44 850,44 H840 C839,44 838,42 838,40 V22 C838,11 836,6 835,3 C834,1 832,1 832,1 Z' fill='white'/%3E%3C/svg%3E")`,
                                                    WebkitMaskSize: '100% 100%',
                                                    maskSize: '100% 100%',
                                                    WebkitMaskRepeat: 'no-repeat',
                                                    maskRepeat: 'no-repeat'
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
            </section >

            {/* FOUNDER & SUCCESSORS Section */}
            < section
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
            </section >

            {/* GALLERY Section */}
            <section className="w-full bg-[#E8F7FF] overflow-hidden">
                <div className="max-w-container mx-auto px-4 py-[100px] flex flex-col items-center gap-[60px]">
                    {/* Title */}
                    <SectionTitle title="Gallery" color="#038972" />

                    {/* Categories Grid Container */}
                    <div
                        className="flex justify-between items-center w-full max-w-[1240px] mx-auto"
                        style={{
                            height: '388.93px',
                        }}
                    >
                        {[
                            {
                                label: "IMAGE",
                                icon: (
                                    <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <foreignObject x="-10.0571" y="-15.0571" width="134.114" height="134.114">
                                            <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(15.03px)', clipPath: 'url(#bgblur_img_clip)', height: '100%', width: '100%' }}></div>
                                        </foreignObject>
                                        <g filter="url(#filter_img)" data-figma-bg-blur-radius="30.0571">
                                            <rect x="21" y="16" width="72" height="72" rx="36" fill="#323232" fillOpacity="0.3" shapeRendering="crispEdges" />
                                            <rect x="21" y="16" width="72" height="72" rx="36" stroke="white" strokeWidth="2" shapeRendering="crispEdges" />
                                            <path d="M71 34H43C40.7909 34 39 35.7909 39 38V66C39 68.2091 40.7909 70 43 70H71C73.2091 70 75 68.2091 75 66V38C75 35.7909 73.2091 34 71 34Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M50 47.7846C51.6569 47.7846 53 46.4622 53 44.8308C53 43.1994 51.6569 41.877 50 41.877C48.3431 41.877 47 43.1994 47 44.8308C47 46.4622 48.3431 47.7846 50 47.7846Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M75 57.6313L65 47.7852L43 69.4467" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <filter id="filter_img" x="-10.0571" y="-15.0571" width="134.114" height="134.114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="5" />
                                                <feGaussianBlur stdDeviation="10" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                            </filter>
                                            <clipPath id="bgblur_img_clip" transform="translate(10.0571 15.0571)">
                                                <rect x="21" y="16" width="72" height="72" rx="36" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                )
                            },
                            {
                                label: "VIDEO",
                                icon: (
                                    <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <foreignObject x="-10.0571" y="-15.0571" width="134.114" height="134.114">
                                            <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(15.03px)', clipPath: 'url(#bgblur_video_clip)', height: '100%', width: '100%' }}></div>
                                        </foreignObject>
                                        <g filter="url(#filter_video)" data-figma-bg-blur-radius="30.0571">
                                            <rect x="21" y="16" width="72" height="72" rx="36" fill="#323232" fillOpacity="0.3" shapeRendering="crispEdges" />
                                            <rect x="21" y="16" width="72" height="72" rx="36" stroke="white" strokeWidth="2" shapeRendering="crispEdges" />
                                            <path d="M48 38L66 52L48 66V38Z" fill="white" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <filter id="filter_video" x="-10.0571" y="-15.0571" width="134.114" height="134.114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="5" />
                                                <feGaussianBlur stdDeviation="10" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                            </filter>
                                            <clipPath id="bgblur_video_clip" transform="translate(10.0571 15.0571)">
                                                <rect x="21" y="16" width="72" height="72" rx="36" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                )
                            },
                            {
                                label: "AUDIO",
                                icon: (
                                    <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <foreignObject x="-10.0571" y="-15.0571" width="134.114" height="134.114">
                                            <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(15.03px)', clipPath: 'url(#bgblur_audio_clip)', height: '100%', width: '100%' }}></div>
                                        </foreignObject>
                                        <g filter="url(#filter_audio)" data-figma-bg-blur-radius="30.0571">
                                            <rect x="21" y="16" width="72" height="72" rx="36" fill="#323232" fillOpacity="0.3" shapeRendering="crispEdges" />
                                            <rect x="21" y="16" width="72" height="72" rx="36" stroke="white" strokeWidth="2" shapeRendering="crispEdges" />
                                            <path d="M55 38L45 46H37V58H45L55 66V38Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M71.1401 38C74.8895 41.7506 76.9958 46.8367 76.9958 52.14C76.9958 57.4433 74.8895 62.5294 71.1401 66.28M64.0801 45.06C65.9548 46.9353 67.0079 49.4784 67.0079 52.13C67.0079 54.7816 65.9548 57.3247 64.0801 59.2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <filter id="filter_audio" x="-10.0571" y="-15.0571" width="134.114" height="134.114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="5" />
                                                <feGaussianBlur stdDeviation="10" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                            </filter>
                                            <clipPath id="bgblur_audio_clip" transform="translate(10.0571 15.0571)">
                                                <rect x="21" y="16" width="72" height="72" rx="36" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                )
                            }
                        ].map((category, index) => (
                            <div key={index} className="flex flex-col items-center gap-6 group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                                {/* Hexagon Container */}
                                <div
                                    className="relative flex items-center justify-center p-2"
                                    style={{
                                        width: '386px',
                                        height: '335px',
                                    }}
                                >
                                    <svg width="386" height="335" viewBox="0 0 386 335" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
                                        {/* Teal Shadow Path (Offset) */}
                                        <path
                                            d="M89.6259 11.9976C93.9157 4.57345 101.84 0.00184418 110.415 0.00483786L275.702 0.0625466C284.276 0.0655403 292.198 4.64268 296.482 12.0698L379.076 155.242C383.361 162.669 383.357 171.817 379.068 179.242L296.374 322.356C292.084 329.78 284.16 334.351 275.585 334.348L110.298 334.291C101.724 334.288 93.8022 329.711 89.5176 322.283L6.92401 179.112C2.63942 171.684 2.64261 162.536 6.93239 155.112L89.6259 11.9976Z"
                                            fill="#038972"
                                            transform="translate(6, 4)"
                                        />

                                        {/* Mask for the image */}
                                        <defs>
                                            <mask id={`mask-${index}`} maskUnits="userSpaceOnUse">
                                                <path d="M89.6259 11.9976C93.9157 4.57345 101.84 0.00184418 110.415 0.00483786L275.702 0.0625466C284.276 0.0655403 292.198 4.64268 296.482 12.0698L379.076 155.242C383.361 162.669 383.357 171.817 379.068 179.242L296.374 322.356C292.084 329.78 284.16 334.351 275.585 334.348L110.298 334.291C101.724 334.288 93.8022 329.711 89.5176 322.283L6.92401 179.112C2.63942 171.684 2.64261 162.536 6.93239 155.112L89.6259 11.9976Z" fill="white" />
                                            </mask>
                                        </defs>

                                        {/* Image wrapped in mask */}
                                        <g mask={`url(#mask-${index})`}>
                                            <foreignObject x="0" y="0" width="386" height="335">
                                                <div className="w-full h-full relative">
                                                    <img
                                                        src={dailyDarshanImg}
                                                        alt={category.label}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    {/* Dark overlay on hover */}
                                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
                                                </div>
                                            </foreignObject>
                                        </g>
                                    </svg>

                                    {/* Centered Icon - Outside SVG Mask to avoid clipping */}
                                    <div className="relative z-10 scale-100 group-hover:scale-110 transition-transform duration-300">
                                        {category.icon}
                                    </div>
                                </div>

                                {/* Label */}
                                <h3 className="font-katibeh text-[40px] leading-none text-[#038972] tracking-[0.05em] uppercase">
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
