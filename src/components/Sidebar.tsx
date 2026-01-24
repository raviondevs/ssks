import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    RefreshCw,
    Heart,
    Image as ImageIcon,
    Play,
    Clock,
    Mic2,
    Wind,
    BookOpen,
    Calendar,
    Bell,
    Download,
    X
} from 'lucide-react';
import logo from '../assets/logo.png';

const features = [
    { id: 'updates', name: 'Updates', icon: RefreshCw, color: 'bg-[#F5F3FF]', iconColor: 'text-[#7C3AED]', path: '/updates' },
    { id: 'darshan', name: 'Darshan', icon: Heart, color: 'bg-[#FFF1F2]', iconColor: 'text-[#E11D48]', path: '/darshan' },
    { id: 'events', name: 'Events', icon: ImageIcon, color: 'bg-[#F0FDF4]', iconColor: 'text-[#16A34A]', path: '/events' },
    { id: 'videos', name: 'Videos', icon: Play, color: 'bg-[#FFF7ED]', iconColor: 'text-[#EA580C]', path: '/videos' },
    { id: 'satsang', name: '5 Minutes', icon: Clock, color: 'bg-[#EFF6FF]', iconColor: 'text-[#2563EB]', path: '/satsang' },
    { id: 'audios', name: 'Audios', icon: Mic2, color: 'bg-[#F0FDF4]', iconColor: 'text-[#166534]', path: '/audios' },
    { id: 'meditation', name: 'Meditation', icon: Wind, color: 'bg-[#FFF1F2]', iconColor: 'text-[#BE123C]', path: '/meditation' },
    { id: 'publication', name: 'Publication', icon: BookOpen, color: 'bg-[#FEFCE8]', iconColor: 'text-[#A16207]', path: '/publication' },
    { id: 'calendar', name: 'Calendar', icon: Calendar, color: 'bg-[#FFF7ED]', iconColor: 'text-[#C2410C]', path: '/calendar' },
    { id: 'practices', name: 'Practices', icon: Bell, color: 'bg-[#F0F9FF]', iconColor: 'text-[#0369A1]', path: '/practices' },
    { id: 'download', name: 'Download', icon: Download, color: 'bg-[#FFF1F2]', iconColor: 'text-[#E11D48]', path: '/download' },
];

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const navigate = useNavigate();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-[200] backdrop-blur-sm md:hidden"
                    />

                    {/* Sidebar Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white z-[210] shadow-2xl flex flex-col md:hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src={logo} alt="SSKS" className="w-10 h-10 object-contain" />
                                <span className="font-katibeh font-[400] text-[32px] leading-tight text-[#E21E25]">SSKS</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto py-4 px-4">
                            <div className="flex flex-col gap-2">
                                {features.map((feature) => (
                                    <button
                                        key={feature.id}
                                        onClick={() => {
                                            navigate(feature.path);
                                            onClose();
                                        }}
                                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group w-full text-left"
                                    >
                                        <div className={`p-2.5 rounded-lg ${feature.color} ${feature.iconColor} group-hover:scale-110 transition-transform`}>
                                            <feature.icon size={20} />
                                        </div>
                                        <span className="font-medium text-gray-700 group-hover:text-gray-900">
                                            {feature.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4 text-sm text-gray-500 justify-center">
                                    <a href="#" className="hover:text-[#E21E25]">Privacy</a>
                                    <a href="#" className="hover:text-[#E21E25]">Terms</a>
                                    <a href="#" className="hover:text-[#E21E25]">Contact</a>
                                </div>
                                <p className="text-xs text-center text-gray-400">
                                    © 2026 SSKS
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
