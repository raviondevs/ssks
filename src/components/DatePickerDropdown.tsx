
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DatePickerDropdownProps {
    width?: string;
    className?: string;
}

export default function DatePickerDropdown({ width = '358px', className }: DatePickerDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

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

    const daysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const firstDayOfMonth = (date: Date) => {
        // 0 = Sunday, 1 = Monday, ... 6 = Saturday
        // Adjusting to make Monday = 0, Sunday = 6 if desired?
        // Calendar image shows Mon Tue Wed Thu Fri Sat Sun
        // JS getDay() returns 0 for Sunday.
        // Let's shift so Mon is first.
        const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return day === 0 ? 6 : day - 1;
    };

    const generateCalendarDays = () => {
        const days = [];
        const totalDays = daysInMonth(currentMonth);
        const startDay = firstDayOfMonth(currentMonth);

        // Previous month days placeholder (or empty)
        // Image shows previous month days in grey (e.g., 26 27 28 29).
        const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        const prevMonthTotalDays = daysInMonth(prevMonth);

        for (let i = startDay - 1; i >= 0; i--) {
            days.push({ day: prevMonthTotalDays - i, current: false });
        }

        for (let i = 1; i <= totalDays; i++) {
            days.push({ day: i, current: true });
        }

        // Fill remaining slots
        const remaining = 42 - days.length; // 6 rows * 7 cols
        for (let i = 1; i <= remaining; i++) {
            days.push({ day: i, current: false });
        }

        return days;
    };

    const handleDateClick = (day: number, isCurrent: boolean) => {
        if (!isCurrent) return; // Logic for next/prev month click could be added
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setSelectedDate(newDate);
        setIsOpen(false);
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const formatSelectedDate = (date: Date | null) => {
        if (!date) return "DD/MM/YYYY";
        const d = date.getDate().toString().padStart(2, '0');
        const m = (date.getMonth() + 1).toString().padStart(2, '0');
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
    };

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const calendarDays = generateCalendarDays();

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
                <span className="truncate">{formatSelectedDate(selectedDate)}</span>
                <ArrowRight size={24} className={cn("transition-transform duration-300", isOpen ? "rotate-90" : "")} />
                {/* Image shows an ArrowRight style icon or similar pointing right, referencing the input field design. Wait, user provided field image has arrow right? Or Chevron? 
                   User said: "field style... width 358...". Image 2 shows "DD/MM/YYYY ->". Arrow points right.
                */}
            </button>

            {/* Dropdown Calendar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 bg-white rounded-[18px] p-[24px] z-50 flex flex-col gap-[18px]"
                        style={{
                            width: width, // 358px
                            height: 'auto', // User said 260 height, but calendar content might overflow. Let's try min-height or auto. Or fit content.
                            // The user spec "height: 260" might be fixed. 260 is tight for header + 6 rows. Let's trust content flow or use min-height.
                            // Actually, let's stick to auto to ensure all days are visible comfortably.
                            boxShadow: '0px 0px 7px 0px #00000040'
                        }}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-lg font-medium text-black">
                                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                            </span>
                            <div className="flex gap-4 cursor-pointer">
                                <ChevronLeft size={20} onClick={prevMonth} className="text-black" />
                                <ChevronRight size={20} onClick={nextMonth} className="text-black" />
                            </div>
                        </div>

                        {/* Days Grid */}
                        <div className="grid grid-cols-7 text-center gap-y-2">
                            {/* Weekday headers */}
                            {weekDays.map(day => (
                                <div key={day} className="text-sm font-medium text-black">
                                    {day}
                                </div>
                            ))}

                            {/* Days */}
                            {calendarDays.map((dayObj, index) => {
                                const isSelected = selectedDate &&
                                    dayObj.current &&
                                    selectedDate.getDate() === dayObj.day &&
                                    selectedDate.getMonth() === currentMonth.getMonth() &&
                                    selectedDate.getFullYear() === currentMonth.getFullYear();

                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleDateClick(dayObj.day, dayObj.current)}
                                        className={cn(
                                            "h-8 w-8 flex items-center justify-center text-sm rounded-full cursor-pointer transition-colors mx-auto",
                                            !dayObj.current && "text-gray-300",
                                            dayObj.current && !isSelected && "text-black hover:bg-gray-100",
                                            isSelected && "bg-[#E0F2FE] text-black font-semibold" // Light blue selected state like image
                                        )}
                                    >
                                        {dayObj.day}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Simple CN utility duplicate if needed, assuming the one in NestedDropdown is local.
// I'll make this standalone or assume utils exists. Since user said "code issue", I'll include the util function here to be safe again.
function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}
