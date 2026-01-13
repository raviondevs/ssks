import { useNavigate } from 'react-router-dom';
import { Play, Calendar } from 'lucide-react';
import heroBackground from '../assets/hero-background.jpg';
import deityImage from '../assets/deity.png';
import dailyDarshanImg from '../assets/daily-darshan.jpg';
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

            {/* Hari Darshan Section */}
            <section className="max-w-container mx-auto px-8 py-16">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <TitleDecorationLeft />
                    <h2 className="font-katibeh text-[48px] text-[#1E3A8A] text-center">HARI DARSHAN</h2>
                    <TitleDecorationRight />
                </div>
                <div className="max-w-[600px] mx-auto rounded-[24px] overflow-hidden shadow-lg">
                    <img
                        src={dailyDarshanImg}
                        alt="Hari Darshan"
                        className="w-full h-[500px] object-cover"
                    />
                </div>
            </section>

            {/* Ramnavami Section */}
            <section className="max-w-container mx-auto px-8 py-16">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <TitleDecorationLeft />
                    <h2 className="font-katibeh text-[48px] text-[#1E3A8A] text-center">RAMNAVAMI</h2>
                    <TitleDecorationRight />
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-[20px] overflow-hidden shadow-md border border-[#F3F4F6] hover:shadow-xl transition-shadow">
                            <img
                                src={`https://images.unsplash.com/photo-${1580000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=600`}
                                alt={`Ramnavami ${i}`}
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="p-4">
                                <p className="text-[#3B82F6] text-sm font-medium">6th April, 2025</p>
                                <h3 className="text-[#1E3A8A] font-bold mt-1">Ramnavami Celebration</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section >

            {/* Upcoming Event Section */}
            < section className="w-full bg-gradient-to-b from-[#F0FDF4] to-white py-16" >
                <div className="max-w-container mx-auto px-8">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <TitleDecorationLeft />
                        <h2 className="font-katibeh text-[48px] text-[#1E3A8A] text-center">UPCOMING EVENT</h2>
                        <TitleDecorationRight />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {/* Event Images */}
                        <div className="space-y-4">
                            <div className="rounded-[20px] overflow-hidden shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800"
                                    alt="Event 1"
                                    className="w-full h-[180px] object-cover"
                                />
                            </div>
                            <div className="rounded-[20px] overflow-hidden shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800"
                                    alt="Event 2"
                                    className="w-full h-[180px] object-cover"
                                />
                            </div>
                        </div>
                        {/* Event Calendar */}
                        <div className="bg-white rounded-[20px] p-6 shadow-md">
                            <div className="flex items-center gap-3 mb-4">
                                <Calendar className="text-[#16A34A]" size={24} />
                                <h3 className="font-bold text-[#1E3A8A] text-xl">Event Calendar</h3>
                            </div>
                            <div className="space-y-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-[#F0FDF4] rounded-lg">
                                        <div>
                                            <p className="text-sm font-semibold text-[#1E3A8A]">Event Name {i}</p>
                                            <p className="text-xs text-gray-500">Location, India</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-medium text-[#16A34A]">April {i + 5}</p>
                                            <p className="text-xs text-gray-400">2025</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 bg-[#16A34A] text-white py-2 rounded-full font-semibold hover:bg-[#15803D] transition-colors">
                                View All Events
                            </button>
                        </div>
                    </div>
                </div>
            </section >

            {/* Hari Smruti Section */}
            < section className="max-w-container mx-auto px-8 py-16" >
                <div className="flex items-center justify-center gap-4 mb-8">
                    <TitleDecorationLeft />
                    <h2 className="font-katibeh text-[48px] text-[#1E3A8A] text-center">HARI SMRUTI</h2>
                    <TitleDecorationRight />
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-[20px] overflow-hidden shadow-md border border-[#F3F4F6] hover:shadow-xl transition-shadow">
                            <div className="relative h-[200px] group cursor-pointer">
                                <img
                                    src={`https://images.unsplash.com/photo-${1590000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=600`}
                                    alt={`Hari Smruti ${i}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-14 h-14 rounded-full bg-[#EF4444] flex items-center justify-center">
                                        <Play size={24} className="text-white ml-1" fill="white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded">
                                    10:05
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-[#3B82F6] text-sm font-medium">6th April, 2025</p>
                                <h3 className="text-[#1E3A8A] font-bold mt-1">Hari Smruti Episode {i}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section >

            {/* Daily Darshan Section */}
            < section className="w-full bg-gradient-to-b from-[#FDF2F2] to-white py-16" >
                <div className="max-w-container mx-auto px-8">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <TitleDecorationLeft />
                        <h2 className="font-katibeh text-[48px] text-[#1E3A8A] text-center">DAILY DARSHAN</h2>
                        <TitleDecorationRight />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                                <img
                                    src={`https://images.unsplash.com/photo-${1600000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=400`}
                                    alt={`Daily Darshan ${i}`}
                                    className="w-full h-[180px] object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button
                            onClick={() => navigate('/darshan')}
                            className="bg-[#EF4444] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#DC2626] transition-colors"
                        >
                            View All Darshan
                        </button>
                    </div>
                </div>
            </section >

            {/* Hari Katha Section */}
            < section className="max-w-container mx-auto px-8 py-16" >
                <div className="flex items-center justify-center gap-4 mb-8">
                    <TitleDecorationLeft />
                    <h2 className="font-katibeh text-[48px] text-[#1E3A8A] text-center">HARI KATHA</h2>
                    <TitleDecorationRight />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {[1, 2].map((i) => (
                        <div key={i} className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-[#F3F4F6] hover:shadow-xl transition-shadow">
                            <div className="relative h-[280px] group cursor-pointer">
                                <img
                                    src={`https://images.unsplash.com/photo-${1610000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=800`}
                                    alt={`Hari Katha ${i}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-[#EF4444] text-white px-4 py-2 rounded-full font-bold">
                                    {i === 1 ? '15 APR' : '20 APR'}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-[#1E3A8A] font-bold text-xl mb-2">Hari Katha Series {i}</h3>
                                <p className="text-gray-600 text-sm">Join us for an enlightening session of spiritual discourse and divine stories.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section >

            {/* Recent Satsang Videos Section */}
            < section className="w-full bg-gradient-to-b from-[#EFF6FF] to-white py-16" >
                <div className="max-w-container mx-auto px-8">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <TitleDecorationLeft />
                        <h2 className="font-katibeh text-[48px] text-[#1E3A8A] text-center">RECENT SATSANG VIDEOS</h2>
                        <TitleDecorationRight />
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-[20px] overflow-hidden shadow-md border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                                <div className="relative h-[180px] group cursor-pointer">
                                    <img
                                        src={`https://images.unsplash.com/photo-${1620000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=600`}
                                        alt={`Satsang ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-14 h-14 rounded-full bg-[#EF4444] flex items-center justify-center">
                                            <Play size={24} className="text-white ml-1" fill="white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded">
                                        15:30
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-[#3B82F6] text-xs font-medium">6th April, 2025</p>
                                    <h3 className="text-[#1E3A8A] font-semibold mt-1 text-sm">Satsang Video Title {i}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Baps Satsang Section */}
            < section className="max-w-container mx-auto px-8 py-16" >
                <div className="flex items-center justify-center gap-4 mb-8">
                    <TitleDecorationLeft />
                    <h2 className="font-katibeh text-[48px] text-[#1E3A8A] text-center">BAPS SATSANG</h2>
                    <TitleDecorationRight />
                </div>
                <div className="grid grid-cols-3 gap-12 justify-items-center">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div
                                className="relative w-[200px] h-[200px] cursor-pointer hover:scale-105 transition-transform"
                                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                            >
                                <img
                                    src={`https://images.unsplash.com/photo-${1630000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=400`}
                                    alt={`Baps Satsang ${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-[#1E3A8A] font-medium mt-4 text-center">Satsang Session {i}</h3>
                        </div>
                    ))}
                </div>
            </section >

            {/* Audio Section */}
            < section className="w-full bg-gradient-to-b from-[#F0FDF4] to-white py-16" >
                <div className="max-w-container mx-auto px-8">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <TitleDecorationLeft />
                        <h2 className="font-katibeh text-[48px] text-[#1E3A8A] text-center">AUDIO</h2>
                        <TitleDecorationRight />
                    </div>
                    <div className="grid grid-cols-3 gap-12 justify-items-center">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div
                                    className="relative w-[200px] h-[200px] cursor-pointer hover:scale-105 transition-transform"
                                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                                >
                                    <img
                                        src={`https://images.unsplash.com/photo-${1640000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=400`}
                                        alt={`Audio ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-[#1E3A8A] font-medium mt-4 text-center">Kirtan Collection {i}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button
                            onClick={() => navigate('/audios')}
                            className="bg-[#16A34A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#15803D] transition-colors"
                        >
                            View All Audio
                        </button>
                    </div>
                </div>
            </section >
        </div >
    );
}
