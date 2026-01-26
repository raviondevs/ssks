import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, MoreVertical, ChevronLeft } from 'lucide-react';

interface AudioCardProps extends React.HTMLAttributes<HTMLDivElement> {
    thumbnail: string;
    title: string;
    audioUrl?: string;
}

export default function AudioCard({ thumbnail, title, audioUrl, className, style, ...props }: AudioCardProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showOptions, setShowOptions] = useState(false);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const onEnded = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', onEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', onEnded);
        };
    }, []);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const togglePlay = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const time = parseFloat(e.target.value);
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const changeSpeed = (speed: number) => {
        if (audioRef.current) {
            audioRef.current.playbackRate = speed;
            setPlaybackSpeed(speed);
        }
        setShowOptions(false);
    };

    return (
        <div
            className={`flex flex-col items-center gap-0 ${className || ''}`}
            style={style}
            {...props}
        >
            {/* Hexagon Container */}
            <div className="relative w-[386px] h-[335px] flex items-center justify-center">
                <svg
                    width="386"
                    height="335"
                    viewBox="-10 -10 406 355"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full transition-transform duration-500 hover:scale-105 group cursor-pointer"
                    style={{ overflow: 'visible' }}
                    onClick={togglePlay}
                >
                    {/* Shadow Path */}
                    <path
                        d="M89.6259 11.9976C93.9157 4.57345 101.84 0.00184418 110.415 0.00483786L275.702 0.0625466C284.276 0.0655403 292.198 4.64268 296.482 12.0698L379.076 155.242C383.361 162.669 383.357 171.817 379.068 179.242L296.374 322.356C292.084 329.78 284.16 334.351 275.585 334.348L110.298 334.291C101.724 334.288 93.8022 329.711 89.5176 322.283L6.92401 179.112C2.63942 171.684 2.64261 162.536 6.93239 155.112L89.6259 11.9976Z"
                        fill="#005382"
                        transform="translate(8, 8)"
                    />

                    {/* Mask Definition */}
                    <defs>
                        <mask id={`mask-${title.replace(/\s+/g, "-")}`} maskUnits="userSpaceOnUse">
                            <path
                                d="M89.6259 11.9976C93.9157 4.57345 101.84 0.00184418 110.415 0.00483786L275.702 0.0625466C284.276 0.0655403 292.198 4.64268 296.482 12.0698L379.076 155.242C383.361 162.669 383.357 171.817 379.068 179.242L296.374 322.356C292.084 329.78 284.16 334.351 275.585 334.348L110.298 334.291C101.724 334.288 93.8022 329.711 89.5176 322.283L6.92401 179.112C2.63942 171.684 2.64261 162.536 6.93239 155.112L89.6259 11.9976Z"
                                fill="white"
                            />
                        </mask>
                    </defs>

                    {/* Image */}
                    <g mask={`url(#mask-${title.replace(/\s+/g, "-")})`}>
                        <image
                            href={thumbnail}
                            width="386"
                            height="335"
                            preserveAspectRatio="xMidYMid slice"
                        />
                        {/* Play Overlay */}
                        <rect width="386" height="335" fill="black" fillOpacity="0.1" />
                    </g>
                </svg>

                {/* Central Play Button */}
                <div
                    className="relative z-10 w-20 h-20 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
                    onClick={togglePlay}
                >
                    {isPlaying ? (
                        <Pause size={32} className="text-white" fill="white" />
                    ) : (
                        <Play size={32} className="text-white ml-2" fill="white" />
                    )}
                </div>
            </div>

            {/* Conditional rendering with transitions: Audio Manager when playing, Title when paused */}
            <div className="relative w-full max-w-[386px] min-h-[48px]">
                <audio ref={audioRef} src={audioUrl} />

                {/* Audio Manager */}
                <div className={`w-full absolute top-0 left-0 transition-all duration-500 rounded-[35px] bg-transparent px-4 py-2 flex items-center gap-3 ${isPlaying ? 'opacity-100 translate-y-0 h-12 pointer-events-auto' : 'opacity-0 -translate-y-2 h-0 pointer-events-none overflow-hidden'}`}>
                    <button onClick={togglePlay} className="text-black hover:text-primary-600 transition-colors">
                        <Pause size={18} fill="currentColor" />
                    </button>

                    <div className="text-[12px] font-medium text-gray-600 min-w-[70px]">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </div>

                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleSeek}
                        className="flex-1 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#005382]"
                    />

                    <Volume2 size={18} className="text-gray-600" />

                    <div className="relative">
                        <MoreVertical
                            size={18}
                            className="text-gray-600 cursor-pointer"
                            onClick={() => setShowOptions(!showOptions)}
                        />

                        {showOptions && (
                            <div className="absolute right-0 bottom-full mb-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 w-[110px] z-20 overflow-hidden">
                                <div className="flex items-center gap-2 px-2 py-1 text-gray-400 border-b border-gray-50 mb-1">
                                    <ChevronLeft size={14} />
                                    <span className="text-[11px] font-bold">Options</span>
                                </div>
                                {[0.25, 0.5, 0.75, 1, 1.25].map((speed) => (
                                    <button
                                        key={speed}
                                        onClick={() => changeSpeed(speed)}
                                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors ${playbackSpeed === speed ? 'bg-[#005382] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        {speed === 1 ? 'Normal' : `${speed}`}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Title */}
                <h3 className={`text-[#005382] font-katibeh text-[32px] tracking-wide text-center transition-all duration-500 ${!isPlaying ? 'opacity-100 translate-y-0 mt-2' : 'opacity-0 translate-y-2 absolute pointer-events-none'}`}>
                    {title}
                </h3>
            </div>
        </div>
    );
}
