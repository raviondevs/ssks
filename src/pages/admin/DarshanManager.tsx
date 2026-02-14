import { useState } from 'react';
import { Upload, ChevronLeft, ChevronRight, Eye, Calendar as CalendarIcon, Image as ImageIcon, Sparkles, Trash2, LayoutGrid, CheckSquare } from 'lucide-react';
import Modal from '../../components/Modal';

export default function DarshanManager() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [darshanImages, setDarshanImages] = useState<Record<string, string>>({
        '2025-01-30': 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&auto=format&fit=crop',
        '2025-01-31': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop'
    });
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'calendar'>('calendar');

    // Generate calendar days
    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        return { days, firstDay };
    };

    const { days, firstDay } = getDaysInMonth(currentDate);

    const changeMonth = (offset: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };

    const handleDateClick = (dayValue: number) => {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(dayValue).padStart(2, '0')}`;
        setSelectedSlot(dateStr);
        setIsModalOpen(true);
    };

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && selectedSlot) {
            const url = URL.createObjectURL(file);
            setDarshanImages(prev => ({ ...prev, [selectedSlot]: url }));
        }
    };

    const handleRemove = () => {
        if (selectedSlot && window.confirm('Are you sure you want to remove this darshan image?')) {
            setDarshanImages(prev => {
                const newImages = { ...prev };
                delete newImages[selectedSlot];
                return newImages;
            });
            setIsModalOpen(false);
        }
    };

    return (
        <div className="space-y-8 pb-10">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-katibeh text-[#005382]">Daily Darshan</h1>
                    <p className="text-gray-500 font-outfit mt-1">Curate and publish spiritual presence for the global community</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-white p-1 rounded-2xl border border-gray-100 flex shadow-sm mr-2">
                        <button
                            onClick={() => setViewMode('calendar')}
                            className={`p-2 rounded-xl transition-all ${viewMode === 'calendar' ? 'bg-[#005382] text-white shadow-md' : 'text-gray-400 hover:text-[#005382]'}`}
                        >
                            <CalendarIcon size={20} />
                        </button>
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-[#005382] text-white shadow-md' : 'text-gray-400 hover:text-[#005382]'}`}
                        >
                            <LayoutGrid size={20} />
                        </button>
                    </div>
                    <button className="px-6 py-3 bg-[#E21E25] text-white rounded-2xl hover:bg-[#c41920] flex items-center gap-2 font-outfit font-bold transition-all shadow-lg shadow-red-100 transform hover:-translate-y-0.5">
                        <Upload size={20} />
                        Bulk Upload
                    </button>
                </div>
            </div>

            {/* Main Calendar Card */}
            <div
                className="bg-white rounded-[50px] border border-gray-100 overflow-hidden relative shadow-sm"
            >
                {/* Calendar Header Controls */}
                <div className="p-10 border-b border-gray-50 flex items-center justify-between bg-gradient-to-r from-white to-gray-50/50">
                    <button onClick={() => changeMonth(-1)} className="p-4 hover:bg-[#005382] hover:text-white rounded-[20px] transition-all bg-white border border-gray-100 shadow-sm text-[#005382]">
                        <ChevronLeft size={24} />
                    </button>

                    <div className="text-center group cursor-pointer">
                        <h2 className="text-4xl font-katibeh text-[#005382] group-hover:text-[#E21E25] transition-colors leading-none mb-2">
                            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </h2>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] font-outfit">Select a date to publish darshan</span>
                    </div>

                    <button onClick={() => changeMonth(1)} className="p-4 hover:bg-[#005382] hover:text-white rounded-[20px] transition-all bg-white border border-gray-100 shadow-sm text-[#005382]">
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Calendar Grid */}
                <div className="p-10">
                    <div className="grid grid-cols-7 gap-6">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(dayName => (
                            <div key={dayName} className="text-center font-bold text-[#E21E25] font-outfit py-4 uppercase tracking-[0.2em] text-[10px]">
                                {dayName}
                            </div>
                        ))}

                        {Array.from({ length: firstDay }).map((_, i) => (
                            <div key={`empty-${i}`} className="aspect-square bg-gray-50/30 rounded-[35px] border border-dashed border-gray-100" />
                        ))}

                        {Array.from({ length: days }).map((_, i) => {
                            const dayValue = i + 1;
                            const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(dayValue).padStart(2, '0')}`;
                            const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), dayValue).toDateString();
                            const image = darshanImages[dateStr];

                            return (
                                <div
                                    key={dayValue}
                                    onClick={() => handleDateClick(dayValue)}
                                    className={`
                                        aspect-square rounded-[25px] border-2 transition-all cursor-pointer group relative overflow-hidden
                                        ${image ? 'border-[#005382] shadow-xl' : 'border-dashed border-gray-100 bg-white hover:border-[#E21E25] hover:bg-red-50/5'}
                                        ${isToday && !image ? 'border-[#E21E25] bg-red-50/30' : ''}
                                    `}
                                >
                                    {/* Date Number Badge */}
                                    <div className={`absolute top-4 left-4 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold z-20 font-outfit transition-colors
                                        ${image ? 'bg-white text-[#000000] shadow-lg' : isToday ? 'bg-[#E21E25] text-white' : 'bg-gray-50 text-black-100 group-hover:bg-[#E21E25] group-hover:text-white'}
                                    `}>
                                        {dayValue}
                                    </div>

                                    {image ? (
                                        <>
                                            <img
                                                src={image}
                                                alt={`Darshan ${dayValue}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#005382]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                                                    <Eye size={24} className="text-white" />
                                                </div>
                                            </div>
                                            {/* Status Dot */}
                                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] z-20" />
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-200 group-hover:text-[#E21E25] transition-all duration-300">
                                            <Upload size={28} className="group-hover:-translate-y-1 transition-transform" />
                                            <span className="text-[9px] font-bold uppercase tracking-widest mt-3 opacity-0 group-hover:opacity-100">Publish</span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Informational Footer Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#005382] p-8 rounded-[40px] text-white relative overflow-hidden group border-4 border-white shadow-xl">
                    <Sparkles className="absolute top-4 right-4 text-white/20 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="font-katibeh text-2xl mb-2">Did you know?</h4>
                    <p className="text-xs text-blue-100/60 font-outfit leading-relaxed">Daily Darshan reach has increased by 45% in the last 30 days. High quality images are key.</p>
                </div>
                <div className="bg-white p-8 rounded-[40px] border border-gray-100 flex items-center gap-6 shadow-sm">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-[25px] flex items-center justify-center shrink-0">
                        <CheckSquare className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#005382] font-outfit">Monthly Progress</h4>
                        <p className="text-xs text-gray-400 font-outfit">28/31 slots filled for Jan 2025</p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-[40px] border border-gray-100 flex items-center gap-6 shadow-sm">
                    <div className="w-16 h-16 bg-red-50 text-[#E21E25] rounded-[25px] flex items-center justify-center shrink-0">
                        <CalendarIcon className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#005382] font-outfit">Automatic Expiry</h4>
                        <p className="text-xs text-gray-400 font-outfit">Darshan expires automatically at 11:59 PM</p>
                    </div>
                </div>
            </div>

            {/* Upload/View Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedSlot ? `Spiritual Presence: ${new Date(selectedSlot).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}` : ''}
            >
                {selectedSlot && darshanImages[selectedSlot] ? (
                    <div className="space-y-8">
                        <div className="relative group">
                            <img
                                src={darshanImages[selectedSlot]}
                                alt="Darshan"
                                className="w-full h-[500px] object-cover rounded-[50px] shadow-2xl border-4 border-white"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-b-[50px] flex justify-between items-end">
                                <div>
                                    <span className="px-4 py-1.5 bg-[#E21E25] text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-3 inline-block">Published</span>
                                    <h3 className="text-3xl font-katibeh text-white">Daily Darshan Presentation</h3>
                                </div>
                                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-outfit text-xs font-bold uppercase tracking-widest">
                                    Full Resolution
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-8 rounded-[40px] border border-gray-100 gap-6">
                            <div className="text-sm font-outfit text-gray-400 text-center md:text-left">
                                <p className="font-bold text-[#005382] uppercase tracking-widest text-[10px] mb-1">Image Metadata</p>
                                <p className="leading-relaxed">Uploaded on: {new Date().toLocaleDateString()} at 09:45 AM</p>
                                <p>Source: Community Spiritual Headquarters</p>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={handleRemove}
                                    className="px-8 py-3.5 bg-red-50 text-[#E21E25] rounded-2xl font-bold hover:bg-red-100 transition-all flex items-center gap-2 border border-red-100"
                                >
                                    <Trash2 size={20} />
                                    Remove Publication
                                </button>
                                <label className="px-10 py-3.5 bg-[#005382] text-white rounded-2xl font-bold hover:bg-[#004269] transition-shadow cursor-pointer flex items-center gap-2 shadow-xl shadow-blue-100">
                                    <Upload size={20} />
                                    Replace Image
                                    <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
                                </label>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 px-10 border-4 border-dashed border-gray-100 rounded-[50px] bg-gray-50/50 relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-100/30 rounded-full blur-3xl opacity-50"></div>

                        <div className="w-24 h-24 bg-white rounded-[35px] flex items-center justify-center shadow-xl mb-8 relative z-10 border border-gray-50 ring-4 ring-white">
                            <ImageIcon size={40} className="text-[#E21E25]" />
                        </div>

                        <h3 className="text-4xl font-katibeh text-[#005382] mb-3 relative z-10">No Darshan Published</h3>
                        <p className="text-gray-500 font-outfit mb-10 text-center max-w-sm relative z-10 leading-relaxed font-medium">
                            Share today's divine moments with the community. Upload a high-quality vertical portrait for the best experience.
                        </p>

                        <label className="px-12 py-5 bg-[#E21E25] text-white rounded-[25px] font-bold hover:bg-[#c41920] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-red-100 cursor-pointer relative z-10 flex items-center gap-3">
                            <Upload size={24} />
                            Publish Today's Darshan
                            <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
                        </label>
                    </div>
                )}
            </Modal>
        </div>
    );
}
