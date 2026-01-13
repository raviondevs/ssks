interface VideoCardProps {
    thumbnail: string;
    title: string;
    date: string;
    duration: string;
    onPlayClick?: () => void;
}

export default function VideoCard({ thumbnail, title, date, duration, onPlayClick }: VideoCardProps) {
    return (
        <div
            className="bg-white flex flex-col hover:-translate-y-1 transition-transform duration-300"
            style={{
                width: '360px',
                height: '326px',
                padding: '20px',
                borderRadius: '18px',
                border: '1px solid #E5E7EB', // Subtle border for definition
                boxShadow: '6px 6px 0px 0px #005382',
                gap: '22px'
            }}
        >
            {/* Image Section */}
            <div className="w-full h-[200px] shrink-0 rounded-[12px] overflow-hidden relative group cursor-pointer" onClick={onPlayClick}>
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[#EF4444] flex items-center justify-center shadow-lg">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3L19 12L5 21V3Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow justify-between">
                <h3 className="text-[#005382] text-xl font-medium leading-tight line-clamp-2">
                    {title}
                </h3>

                <div className="flex items-center justify-between text-[#005382]">
                    <span className="text-gray-500 text-sm">{date}</span>
                    <span className="text-[#005382] text-lg font-medium">{duration}</span>
                </div>
            </div>
        </div>
    );
}
