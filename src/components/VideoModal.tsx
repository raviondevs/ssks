import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl?: string;
    title?: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with Blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl relative bg-black border border-white/10 ring-1 ring-white/5"
                        >
                            {/* Decorative Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A8A] via-[#EF4444] to-[#1E3A8A] opacity-20 blur-lg pointer-events-none"></div>

                            {/* Close Button - Premium Style */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 group flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-[#EF4444] backdrop-blur-sm border border-white/10 transition-all duration-300"
                            >
                                <X size={20} className="text-white group-hover:scale-110 transition-transform" />
                            </button>

                            {/* Video Player Information (Optional Header for accessibility/context) */}
                            {title && (
                                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-10">
                                    <h3 className="text-white/90 font-medium text-lg drop-shadow-md truncate pr-12 font-outfit">
                                        {title}
                                    </h3>
                                </div>
                            )}

                            {/* Video Player Wrapper */}
                            <div className="relative w-full h-full z-0 bg-black">
                                {videoUrl ? (
                                    <iframe
                                        className="w-full h-full"
                                        src={videoUrl}
                                        title={title || "Video Player"}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-white/50 gap-2">
                                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
                                            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                                        </div>
                                        <p className="text-lg font-light">Video source unavailable</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
