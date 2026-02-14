interface GlobalEventCardProps {
    image: string;
    title: string;
    date: string;
    onViewClick?: () => void;
}

export default function GlobalEventCard({ image, title, date, onViewClick }: GlobalEventCardProps) {
    return (
        <div
            className="bg-white flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 w-full max-w-[360px] h-auto min-h-[396px] shadow-md"
            style={{
                padding: '20px',
                borderRadius: '18px',
                border: '1px solid #E5E7EB' // Adding a subtle border as is common, though not strictly requested, helps definition if shadow is offset
            }}
        >
            <div className="flex flex-col gap-[22px] h-full">
                {/* Image */}
                <div className="w-full h-[200px] shrink-0 rounded-[12px] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <h3 className="text-[#005382] text-xl font-medium leading-tight">
                        {title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                        {date}
                    </p>
                </div>

                {/* Button */}
                <div className="mt-auto">
                    <button
                        onClick={onViewClick}
                        className="w-full py-2.5 rounded-full border border-[#005382] text-[#005382] font-medium hover:bg-[#005382] hover:text-white transition-colors"
                    >
                        View
                    </button>
                </div>
            </div>
        </div>
    );
}
