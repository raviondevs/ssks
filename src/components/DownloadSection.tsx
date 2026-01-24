import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DownloadSectionProps {
    title: string;
    description: string;
    image: string;
    isReversed?: boolean;
    onReadMore?: () => void;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({
    title,
    description,
    image,
    isReversed = false,
    onReadMore
}) => {
    return (
        <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-[40px] md:gap-[100px] py-6 md:py-10`}>
            {/* Image Section */}
            <div className="flex-1 w-full max-w-[583px]">
                <div
                    className={`
                        relative w-full aspect-[583/454] bg-white border-[5px] border-white 
                        shadow-[6px_6px_0px_0px_#005382] md:shadow-[10px_10px_0px_0px_#005382] overflow-hidden
                        rounded-[40px]
                        ${isReversed
                            ? 'md:rounded-tl-[173px] md:rounded-tr-[32px] md:rounded-br-[173px] md:rounded-bl-none'
                            : 'md:rounded-tl-[32px] md:rounded-tr-[173px] md:rounded-bl-[173px] md:rounded-br-none'
                        }
                    `}
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className="flex-1 w-full flex flex-col gap-4 text-center md:text-left items-center md:items-start">
                <h2 className="font-katibeh text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-[400] text-ssks-blue tracking-normal">
                    {title}
                </h2>
                <p className="font-outfit text-[16px] md:text-[18px] leading-[24px] tracking-[0.015em] text-[#57534E] text-justify font-[400]">
                    {description}
                </p>
                <button
                    onClick={onReadMore}
                    className="mt-2 flex items-center gap-2 font-outfit text-[16px] md:text-[18px] leading-[24px] tracking-[0.015em] font-[400] text-[#57534E] hover:text-ssks-blue transition-colors group"
                >
                    Read More
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
            </div>
        </div>
    );
};

export default DownloadSection;
