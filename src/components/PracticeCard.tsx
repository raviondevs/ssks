interface PracticeCardProps {
    thumbnail: string;
    title: string;
    description?: string; // keeping description if needed, though design only shows title
    onClick?: () => void;
}

export default function PracticeCard({ thumbnail, title, onClick }: PracticeCardProps) {
    return (
        <div
            className="bg-white flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 cursor-pointer overflow-hidden pb-4 w-full max-w-[365px] h-auto aspect-[365/401]"
            style={{
                borderTopLeftRadius: '177.37px',
                borderTopRightRadius: '177.37px',
                borderBottomRightRadius: '13.3px',
                borderBottomLeftRadius: '13.3px',
                boxShadow: '8.87px 8.87px 0px 0px #09517B'
            }}
            onClick={onClick}
        >
            <div className="w-full h-[85%] relative overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-grow flex items-center justify-center w-full px-4">
                <h3 className="text-[#09517B] font-katibeh text-4xl tracking-wide text-center">
                    {title}
                </h3>
            </div>
        </div>
    );
}
