import { Play } from 'lucide-react';
import React from 'react';

interface AudioCardProps extends React.HTMLAttributes<HTMLDivElement> {
    thumbnail: string;
    title: string;
    onPlayClick?: () => void;
}

export default function AudioCard({ thumbnail, title, onPlayClick, className, style, ...props }: AudioCardProps) {
    return (
        <div
            className={`flex flex-col items-center gap-6 ${className || ''}`}
            style={style}
            {...props}
        >
            <div
                className="relative cursor-pointer group hover:scale-105 transition-transform duration-300 w-full flex justify-center"
                style={{
                    filter: 'drop-shadow(6px 6px 0px #005382)'
                }}
                onClick={onPlayClick}
            >
                {/* Hexagon Shape */}
                <div
                    className="relative bg-white overflow-hidden aspect-[386/334]"
                    style={{
                        width: '100%',
                        maxWidth: '386px',
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                >
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover"
                    />

                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors">
                            <Play size={32} className="text-white ml-1" fill="white" />
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-[#005382] font-katibeh text-3xl tracking-wide text-center">
                {title}
            </h3>
        </div>
    );
}
