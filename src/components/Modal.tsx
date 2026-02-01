import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
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
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none p-4"
                    >
                        <div className="bg-white w-full max-w-2xl rounded-[30px] shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                                <h2 className="text-2xl font-outfit font-bold text-[#005382]">{title}</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 overflow-y-auto font-outfit text-gray-700 leading-relaxed">
                                {children}
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-gray-100 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-[#F34743] text-white rounded-full font-bold hover:bg-red-600 transition-colors shadow-lg"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
