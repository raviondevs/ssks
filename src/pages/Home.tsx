import { useNavigate } from 'react-router-dom';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
import heroBackground from '../assets/hero-background.jpg';
import deityImage from '../assets/deity.png';
import dailyDarshanImg from '../assets/daily-darshan.jpg';
import upcomingEventImg from '../assets/upcoming-event-img.png';
import { TitleDecorationLeft, TitleDecorationRight } from '../components/TitleDecoration';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white font-outfit">
            {/* Hero Section */}
            <section className="relative w-full h-[600px] overflow-hidden -mt-[132px]">
                {/* Background Image */}
                <img
                    src={heroBackground}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />

                {/* Deity Image Centered */}
                <div className="absolute inset-0 flex items-center justify-center pt-[132px]">
                    <img
                        src={deityImage}
                        alt="Deity"
                        className="h-[400px] w-auto object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Bottom Gradient Overlay with Blur */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[200px]"
                    style={{
                        background: 'linear-gradient(180.64deg, rgba(232, 247, 255, 0) 0.52%, #E8F7FF 89.73%)',
                        backdropFilter: 'blur(0px)'
                    }}
                />
            </section>

            {/* Daily Darshan Section (Section 2) */}
            <section className="w-full max-w-[1440px] mx-auto pt-[100px] pb-[100px] px-[100px] flex flex-col items-center gap-[60px]">
                {/* Text Container */}
                <div className="w-full max-w-[1240px] flex items-center justify-center gap-[10px] p-[10px]">
                    <TitleDecorationLeft />
                    <h2 className="font-katibeh font-[400] text-[64px] leading-[62px] text-[#005382] text-center">
                        DAILY DARSHAN
                    </h2>
                    <TitleDecorationRight />
                </div>

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
            </section>

            {/* Upcoming Event Section */}
            <section className="w-full bg-white py-16">
                <div className="w-full max-w-[1440px] mx-auto px-8 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <TitleDecorationLeft />
                        <h2 className="font-katibeh font-[400] text-[64px] leading-[62px] text-[#005382] text-center">
                            UPCOMING EVENT
                        </h2>
                        <TitleDecorationRight />
                    </div>

                    {/* Slider Container */}
                    <div className="flex items-center justify-center gap-8 w-full">
                        {/* Left Arrow */}
                        <button className="w-12 h-12 rounded-full border border-[#005382] flex items-center justify-center text-[#005382] hover:bg-[#005382] hover:text-white transition-colors">
                            <ArrowLeft size={24} />
                        </button>

                        {/* Cards Wrapper */}
                        <div className="flex gap-8 overflow-hidden py-4 px-2">
                            {[
                                { title: "Gyan Dhyan Chintan" },
                                { title: "Online Satsang Sabha" },
                                { title: "Anadimukt Vishwam" }
                            ].map((item, index) => (
                                <div
                                    key={index}
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

                                    {/* Text Container */}
                                    <div
                                        className="flex items-center justify-center"
                                        style={{
                                            width: '370px',
                                            height: '87px',
                                            padding: '24px 24px 35px 24px',
                                        }}
                                    >
                                        <h3 className="font-katibeh text-[32px] leading-[32px] text-[#005382] text-center">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button className="w-12 h-12 rounded-full border border-[#005382] flex items-center justify-center text-[#005382] hover:bg-[#005382] hover:text-white transition-colors">
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>


            {/* Satsang Update Section */}
            <section className="w-full bg-white py-16">
                <div className="w-full max-w-[1440px] mx-auto px-8 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <TitleDecorationLeft />
                        <h2 className="font-katibeh font-[400] text-[64px] leading-[62px] text-[#005382] text-center">
                            SATSANG UPDATE
                        </h2>
                        <TitleDecorationRight />
                    </div>

                    {/* Content Grid */}
                    <div className="w-full max-w-[1200px] grid grid-cols-2 gap-8">
                        {/* Left Column - Cards */}
                        <div className="flex flex-col gap-6">
                            {/* Card 1 */}
                            <div className="bg-white rounded-[24px] border-2 border-[#008B8B] overflow-hidden">
                                <img
                                    src={upcomingEventImg}
                                    alt="P.P Divyasuami Vichran"
                                    className="w-full h-[200px] object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="font-katibeh text-[32px] leading-[32px] text-[#008B8B]">
                                        P.P Divyasuami Vichran
                                    </h3>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-[24px] border-2 border-[#008B8B] overflow-hidden">
                                <img
                                    src={upcomingEventImg}
                                    alt="Online Donation"
                                    className="w-full h-[200px] object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="font-katibeh text-[32px] leading-[32px] text-[#008B8B]">
                                        Online Donation
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - List */}
                        <div className="flex flex-col gap-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className={`rounded-[24px] p-6 border ${i === 1 ? 'bg-[#008B8B] text-white border-[#008B8B]' : 'bg-white text-[#008B8B] border-[#008B8B]'
                                        }`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg mb-2">Global Events</h4>
                                            <p className="text-sm opacity-90">
                                                SSKS Swaminarayan Mandir Satellite 8th Patotsav | HDH Swamishri Vicharan
                                            </p>
                                            <p className="text-sm mt-1">17 Oct, 2024</p>
                                        </div>
                                        <ArrowRight size={20} className="ml-4 flex-shrink-0" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* View More Button */}
                    <div className="mt-12">
                        <button className="bg-[#008B8B] text-white px-12 py-3 rounded-full font-semibold hover:bg-[#007070] transition-colors">
                            View More
                        </button>
                    </div>
                </div>
            </section>
        </div >
    );
}
