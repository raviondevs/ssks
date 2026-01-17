import React from 'react';
import { Play } from 'lucide-react';

interface MeditationCardProps {
    image: string;
    title: string;
    onClick?: () => void;
}

const MeditationCard: React.FC<MeditationCardProps> = ({ image, title, onClick }) => {
    return (
        <div className="flex flex-col gap-4 w-[370px] cursor-pointer group" onClick={onClick}>
            {/* Image Container */}
            <div className="relative w-[370px] h-[247px] rounded-[36px] bg-white shadow-[6px_6px_0px_0px_#005382] overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#005382]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm bg-white/20">
                        <Play fill="white" className="text-white ml-1" size={32} />
                    </div>
                </div>
            </div>

            {/* Title */}
            <h3 className="font-katibeh text-[40px] leading-[37px] font-[400] text-center text-ssks-blue">
                {title}
            </h3>
        </div>
    );
};

export default MeditationCard;
