import React from 'react';

const PageLoader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-md">
            <div className="flex flex-col items-center gap-8">
                {/* Modern Spinner */}
                <div className="relative w-24 h-24">
                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-[#005382]/20"></div>

                    {/* Animated arc */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#005382] animate-spin"></div>

                    {/* Inner pulsing circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-[#005382] rounded-full animate-pulse opacity-20"></div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#005382] rounded-full"></div>
                    </div>
                </div>

                {/* Loading text */}
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-[#005382] font-katibeh text-5xl tracking-wide">
                        Loading...
                    </h2>

                    {/* Animated dots */}
                    <div className="flex gap-2">
                        <div
                            className="w-2.5 h-2.5 bg-[#005382] rounded-full animate-bounce"
                            style={{ animationDelay: '0ms', animationDuration: '1s' }}
                        ></div>
                        <div
                            className="w-2.5 h-2.5 bg-[#005382] rounded-full animate-bounce"
                            style={{ animationDelay: '150ms', animationDuration: '1s' }}
                        ></div>
                        <div
                            className="w-2.5 h-2.5 bg-[#005382] rounded-full animate-bounce"
                            style={{ animationDelay: '300ms', animationDuration: '1s' }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageLoader;
