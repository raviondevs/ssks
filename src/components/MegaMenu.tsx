import { useNavigate, Link } from 'react-router-dom';
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
                    initial={{ opacity: 0, y: '100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '100%' }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-0 bg-white z-[200] flex flex-col overflow-y-auto"
                >
                    {/* Menu Header (Replaces Navbar) */}
                    <header className="w-full max-w-container mx-auto px-8 h-[92px] flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-[210]">
                        <Link to="/" onClick={onClose} className="flex items-center gap-4">
                            <div className="w-16 h-16">
                                <img src={logo} alt="SSKS Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-[#D32F2F] text-2xl font-bold tracking-tight">
                                SSKS-Swaminarayan Sanstha
                            </span>
                        </Link>

                        <button
                            onClick={onClose}
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-error-50 text-error-600 hover:bg-error-100 transition-all transform active:scale-95 group"
                        >
                            <X size={32} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                    </header>

                    {/* Menu Content */}
                    <div className="flex-grow flex items-center justify-center py-20">
                        <div className="w-full max-w-container mx-auto px-8">

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16">
                                {features.map((feature, index) => (
                                    <motion.button
                                        key={feature.id}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 + index * 0.03 }}
                                        onClick={() => {
                                            navigate(feature.path);
                                            onClose();
                                        }}
                                        className="flex flex-col items-center gap-6 group"
                                    >
                                        <div className="relative">
                                            <div className={`w-32 h-32 rounded-[2.5rem] ${feature.color} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl relative z-10`}>
                                                <feature.icon className={`${feature.iconColor} transition-transform duration-500 group-hover:scale-110`} size={48} />
                                            </div>
                                            <div className={`absolute -bottom-4 inset-x-4 h-12 blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-500 ${feature.color} rounded-full -z-10`} />
                                        </div>
                                        <span className="font-serif text-xl font-bold text-grey-800 group-hover:text-primary-600 transition-colors uppercase tracking-widest text-center">
                                            {feature.name}
                                        </span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer info in Menu */}
                    <div className="py-12 border-t border-grey-100 mt-auto">
                        <div className="max-w-container mx-auto px-8 flex justify-between items-center text-grey-400 font-medium">
                            <p>© 2026 SSKS Swaminarayan Sanstha. All rights reserved.</p>
                            <div className="flex gap-8">
                                <a href="#" className="hover:text-primary-600 transition-colors">Privacy</a>
                                <a href="#" className="hover:text-primary-600 transition-colors">Terms</a>
                                <a href="#" className="hover:text-primary-600 transition-colors">Contact</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
