import SatsangUpdateImage from './SatsangUpdateImage';

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
            className="bg-white overflow-hidden flex transition-all duration-300 relative group"
            style={{
                width: '580px',
                height: '302.126953125px',
                borderRadius: '52.85px',
                boxShadow: '8.81px 8.81px 0px 0px #005382',
                opacity: 1,
            }}
        >
            {/* Left Image Section - Using the provided SVG component */}
            <div className="absolute top-0 left-0 h-full flex items-center  ">
                <SatsangUpdateImage
                    src={image}
                    className="  w-auto transition-transform    "
                />
            </div>

            {/* Right Side Container */}
            <div
                className="absolute flex flex-col items-start gap-4"
                style={{
                    width: '227.98193359375px',
                    height: '181px',
                    top: '60.5px',
                    left: '326.73px',
                }}
            >
                {/* Date / Title Text */}
                <span
                    className="w-full text-left"
                    style={{
                        fontFamily: 'Katibeh, serif',
                        fontWeight: 400,
                        fontSize: '24px',
                        lineHeight: '24px', // Adjusted from 64px to fit mockup better
                        color: '#005382',
                    }}
                >
                    {date}
                </span>

                {/* Description Text */}
                <p
                    className="line-clamp-3 text-left w-full"
                    style={{
                        fontFamily: 'Outfit, sans-serif', // Fallback for Basis Grotesque Arabic Pro
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '24px',
                        letterSpacing: '0.015em',
                        color: '#57534E',
                        margin: 0
                    }}
                >
                    {title} | {location}
                </p>

                {/* View More Button */}
                <button
                    onClick={onViewClick}
                    className="flex items-center justify-center text-white transition-all active:scale-95"
                    style={{
                        width: '94px',
                        height: '40px',
                        borderRadius: '8px',
                        background: '#F34743',
                        padding: '8px 30px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    View
                </button>
            </div>
        </div>
    );
}
