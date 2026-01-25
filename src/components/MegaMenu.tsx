import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    RefreshCw,
    Heart,
    Image as ImageIcon,
    Play,
    Clock,
    Mic,
    Wind,
    BookOpen,
    Calendar,
    Bell,
    Download,
    X,
} from 'lucide-react';
import logo from '../assets/logo.png';

const features = [
    { id: 'updates', name: 'Updates', icon: RefreshCw, color: 'bg-[#F0EEFF]', iconColor: 'text-[#6366F1]', path: '/updates' },
    { id: 'darshan', name: 'Darshan', icon: Heart, color: 'bg-[#FFF1F7]', iconColor: 'text-[#DB2777]', path: '/darshan' },
    { id: 'events', name: 'Events', icon: ImageIcon, color: 'bg-[#E6FFFA]', iconColor: 'text-[#059669]', path: '/events' },
    { id: 'videos', name: 'Videos', icon: Play, color: 'bg-[#FFF5F5]', iconColor: 'text-[#E53E3E]', path: '/videos' },
    { id: 'minutes', name: '5 Minutes', icon: Clock, color: 'bg-[#EBF8FF]', iconColor: 'text-[#3182CE]', path: '/satsang' },
    { id: 'audios', name: 'Audios', icon: Mic, color: 'bg-[#F0FFF4]', iconColor: 'text-[#38A169]', path: '/audios' },
    { id: 'meditation', name: 'Meditation', icon: Wind, color: 'bg-[#FFF1F7]', iconColor: 'text-[#D53F8C]', path: '/meditation' },
    { id: 'publication', name: 'Publication', icon: BookOpen, color: 'bg-[#F0FFF4]', iconColor: 'text-[#38A169]', path: '/publication' },
    { id: 'calendar', name: 'Calendar', icon: Calendar, color: 'bg-[#FFF5F5]', iconColor: 'text-[#E53E3E]', path: '/calendar' },
    { id: 'practices', name: 'Practices', icon: Bell, color: 'bg-[#EBF8FF]', iconColor: 'text-[#3182CE]', path: '/practices' },
    { id: 'download', name: 'Download', icon: Download, color: 'bg-[#FFF1F7]', iconColor: 'text-[#DB2777]', path: '/download' },
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
                        className="w-full max-w-[1240px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative"
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
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
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
                                        className="bg-white border border-gray-50 rounded-[28px] p-6 flex flex-col items-center gap-5 shadow-[0px_0px_7.9px_0px_#00000014] hover:shadow-[0_15px_45px_rgb(0,0,0,0.08)] transition-all transform hover:-translate-y-1 group group-active:scale-95"
                                    >
                                        {/* Icon Circle */}
                                        <div className={`w-20 h-20 rounded-full ${feature.color} flex items-center justify-center transition-all duration-300 group-hover:scale-105`}>
                                            <feature.icon className={`${feature.iconColor}`} size={30} />
                                        </div>

                                        {/* Label */}
                                        <span className="font-serif text-lg font-bold text-gray-800 tracking-tight text-center">
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
