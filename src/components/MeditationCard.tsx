import { Play } from 'lucide-react';

interface MeditationCardProps {
    thumbnail: string;
    title: string;
    onPlayClick?: () => void;
}

export default function MeditationCard({ thumbnail, title, onPlayClick }: MeditationCardProps) {
    return (
        <div className="flex flex-col items-center gap-4">
            <div
                className="relative bg-white overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                style={{
                    width: '370px',
                    height: '247px',
                    borderRadius: '36px',
                    boxShadow: '6px 6px 0px 0px #005382',
                    filter: 'drop-shadow(0 0 0 0)' // Reset any filters if inherited
                }}
                onClick={onPlayClick}
            >
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors">
                        <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                </div>
            </div>

            <h3 className="text-[#005382] font-katibeh text-3xl tracking-wide text-center">
                {title}
            </h3>
        </div>
    );
}
