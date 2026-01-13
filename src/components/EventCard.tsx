interface EventCardProps {
    image: string;
    date: string;
    title: string;
    location: string;
    onViewClick?: () => void;
}

export default function EventCard({ image, date, title, location, onViewClick }: EventCardProps) {
    return (
        <div
            className="bg-white overflow-hidden flex hover:translate-x-1 hover:translate-y-1 transition-transform duration-300 relative"
            style={{
                width: '580px',
                height: '302.126953125px',
                borderRadius: '52.85px',
                boxShadow: '8.81px 8.81px 0px 0px #005382'
            }}
        >
            {/* Left: Image Section */}
            <div className="w-[45%] relative p-3">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-[40px]"
                />
            </div>

            {/* Right: Content Section */}
            <div className="w-[55%] p-6 flex flex-col justify-between relative">
                {/* Decorative Corner Arc */}
                <div className="absolute top-0 right-0 w-16 h-16">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                            d="M 0 0 Q 100 0 100 100 L 0 100 Z"
                            fill="#1E3A8A"
                            opacity="0.1"
                        />
                    </svg>
                </div>

                <div className="relative z-10">
                    {/* Date */}
                    <p className="text-[#3B82F6] text-sm font-semibold mb-2">
                        {date}
                    </p>

                    {/* Title */}
                    <h3 className="text-[#1E3A8A] font-bold text-base mb-2 leading-tight">
                        {title}
                    </h3>

                    {/* Location */}
                    <p className="text-gray-500 text-sm mb-4">
                        {location}
                    </p>
                </div>

                {/* View Button */}
                <button
                    onClick={onViewClick}
                    className="bg-[#EF4444] text-white text-xs font-bold px-6 py-2 rounded-full w-fit hover:bg-[#DC2626] transition-colors uppercase shadow-md"
                >
                    View
                </button>
            </div>

            {/* Blue Decorative Curve - Bottom Right Corner */}
            <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden pointer-events-none" style={{ borderRadius: '0 0 52.85px 0' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full" style={{ transform: 'rotate(180deg)' }}>
                    <path
                        d="M 0 0 Q 100 0 100 100 L 0 100 Z"
                        fill="#005382"
                    />
                </svg>
            </div>
        </div>
    );
}
