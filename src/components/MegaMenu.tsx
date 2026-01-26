import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    UpdatesIcon,
    DarshanIcon,
    EventsIcon,
    VideosIcon,
    FiveMinutesIcon,
    AudiosIcon,
    MeditationIcon,
    PublicationIcon,
    CalendarIcon,
    PracticesIcon,
    DownloadIcon
} from './MenuIcons';
import { X } from 'lucide-react';
import logo from '../assets/logo.png';

const features = [
    { id: 'updates', name: 'Updates', icon: UpdatesIcon, color: 'bg-[#E5DBFC]', path: '/updates' },
    { id: 'darshan', name: 'Darshan', icon: DarshanIcon, color: 'bg-[#FFD1EE]', path: '/darshan' },
    { id: 'events', name: 'Events', icon: EventsIcon, color: 'bg-[#DEFCBE]', path: '/events' },
    { id: 'videos', name: 'Videos', icon: VideosIcon, color: 'bg-[#FED7C9]', path: '/videos' },
    { id: 'minutes', name: '5 Minutes', icon: FiveMinutesIcon, color: 'bg-[#E2E2FA]', path: '/satsang' },
    { id: 'audios', name: 'Audios', icon: AudiosIcon, color: 'bg-[#DEFCBE]', path: '/audios' },
    { id: 'meditation', name: 'Meditation', icon: MeditationIcon, color: 'bg-[#FFD1EE]', path: '/meditation' },
    { id: 'publication', name: 'Publication', icon: PublicationIcon, color: 'bg-[#DEFCBE]', path: '/publication' },
    { id: 'calendar', name: 'Calendar', icon: CalendarIcon, color: 'bg-[#FED7C9]', path: '/calendar' },
    { id: 'practices', name: 'Practices', icon: PracticesIcon, color: 'bg-[#DCDEFD]', path: '/practices' },
    { id: 'download', name: 'Download', icon: DownloadIcon, color: 'bg-[#FFD1EE]', path: '/download' },
];

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
    const navigate = useNavigate();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="w-full max-w-[1400px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative"
                    >
                        {/* Close Button Header */}
                        <div className="absolute top-6 right-6 z-10">
                            <button
                                onClick={onClose}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 transition-all border border-gray-100"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="px-6 py-12 md:px-12 md:py-20 lg:px-20">
                            <div className="flex flex-wrap justify-start gap-6 md:gap-8">
                                {features.map((feature, index) => (
                                    <motion.button
                                        key={feature.id}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.04 }}
                                        onClick={() => {
                                            navigate(feature.path);
                                            onClose();
                                        }}
                                        className="bg-white border border-[#EEEEEE] flex flex-col items-center shadow-[0px_0px_7.9px_0px_#00000014] hover:shadow-[0_15px_45px_rgb(0,0,0,0.08)] transition-all transform hover:-translate-y-1 group group-active:scale-95 shrink-0"
                                        style={{
                                            width: '173.18px',
                                            height: '190px',
                                            borderRadius: '15.99px',
                                            padding: '25px 20px',
                                            gap: '20px'
                                        }}
                                    >
                                        {/* Icon Circle */}
                                        <div className={`w-20 h-20 rounded-full ${feature.color} flex items-center justify-center transition-all duration-300 group-hover:scale-105`}>
                                            <feature.icon />
                                        </div>

                                        {/* Label */}
                                        <span className="font-katibeh text-[36px] font-[400] leading-[32px] text-[#000000] text-center capitalize">
                                            {feature.name}
                                        </span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Minimal Footer */}
                        <div className="bg-gray-50/50 px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-50">
                            <div className="flex items-center gap-3">
                                <img src={logo} alt="Logo" className="h-6 w-auto" />
                                <span className="text-gray-400 font-medium text-xs md:text-sm">SSKS Swaminarayan Sanstha</span>
                            </div>
                            <p className="text-gray-300 text-xs font-normal">© 2026 SSKS-Swaminarayan Sanstha</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
