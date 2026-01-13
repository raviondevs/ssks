
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
    className?: string;
}

export default function Pagination({ currentPage: _currentPage = 1, totalPages: _totalPages = 10, onPageChange: _onPageChange, className }: PaginationProps) {
    const pages = [1, 2, 3, 4, 5, '...', 10, 11]; // Mocking structure from image

    return (
        <div className={cn("w-[658px] h-[82px] rounded-[126.04px] p-[16px] bg-[#E1F5FE] flex items-center justify-center mx-auto", className)}>
            <div className="flex items-center gap-[14px]">
                {/* Previous Button */}
                <button className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-[#005382] hover:bg-white/50 transition-colors">
                    <ChevronLeft size={24} />
                </button>

                {/* Page Numbers */}
                {pages.map((page, index) => (
                    <button
                        key={index}
                        className={cn(
                            "w-[50px] h-[50px] rounded-full flex items-center justify-center text-[#005382] text-lg font-medium transition-colors bg-white",
                            // Add hover or active states if needed, currently based on image all look same white circles
                        )}
                    >
                        {page}
                    </button>
                ))}

                {/* Next Button */}
                <button className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-[#005382] hover:bg-white/50 transition-colors">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}

// Local cn util if not imported
function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}
