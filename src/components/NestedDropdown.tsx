
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownItem {
    label: string;
    value: string;
    children?: DropdownItem[];
}

interface NestedDropdownProps {
    label: string;
    items: DropdownItem[];
    width?: string;
    className?: string; // specific styling for the button
}

export default function NestedDropdown({ label, items, width = '223px', className }: NestedDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex justify-between items-center bg-white border border-[#005382] text-[#005382] font-medium text-lg transition-all",
                    className
                )}
            >
                <span className="truncate">{label}</span>
                <ChevronDown
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={24}
                />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 bg-white rounded-[18px] py-[24px] z-50 flex flex-col gap-[18px]"
                        style={{
                            width: width,
                            boxShadow: '0px 0px 7px 0px #00000040'
                        }}
                    >
                        {items.map((item, index) => (
                            <DropdownMenuItem key={index} item={item} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function DropdownMenuItem({ item }: { item: DropdownItem }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-full h-[40px] flex justify-between items-center px-[30px] py-[6px] hover:bg-[#1E3A8A] hover:text-white cursor-pointer text-[#1E3A8A] font-medium transition-colors border-b border-[#E5E7EB] hover:border-transparent">
                <span>{item.label}</span>
                {item.children && (
                    <ChevronRight size={16} className={`text-[#005382] ${isHovered ? 'text-white' : ''}`} />
                )}
            </div>

            {/* Submenu */}
            <AnimatePresence>
                {isHovered && item.children && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-0 left-full ml-2 bg-white rounded-[18px] py-[24px] z-50 flex flex-col gap-[18px]"
                        style={{
                            width: '223px',
                            boxShadow: '0px 0px 7px 0px #00000040'
                        }}
                    >
                        {item.children.map((child, index) => (
                            <div
                                key={index}
                                className="w-full h-[40px] flex justify-between items-center px-[30px] py-[6px] hover:bg-[#1E3A8A] hover:text-white cursor-pointer text-[#1E3A8A] font-medium border-b border-[#E5E7EB] last:border-0"
                            >
                                <span>{child.label}</span>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Utility to merge classes
function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}
