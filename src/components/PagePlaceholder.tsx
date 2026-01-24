import React from 'react';
import SectionTitle from './SectionTitle';

interface PagePlaceholderProps {
    heroTitle: string;
    heroDescription?: string;
    contentTitle: string;
    filterComponent?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const PagePlaceholder: React.FC<PagePlaceholderProps> = ({
    heroTitle,
    heroDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    contentTitle,
    filterComponent,
    children,
    className = "bg-white"
}) => {
    return (
        <div className={`w-full font-outfit -mt-[80px] md:-mt-[132px] ${className}`}>
            {/* Top Hero Section */}
            <div
                className="w-full h-auto md:h-[437.87px] flex flex-col items-center justify-start pt-[120px] px-4 pb-[60px] md:pt-[172px] md:px-[100px] md:pb-[100px] gap-[40px] md:gap-[60px]"
                style={{
                    background: 'linear-gradient(180deg, #FDF2F2 0%, #FFFFFF 100%)',
                }}
            >
                <div className="w-full max-w-[1200px] flex flex-col items-center gap-[12px]">
                    {/* Header Title with Arrows */}
                    <SectionTitle
                        title={heroTitle}
                        color="#323232"
                        titleClassName="!leading-[62px]"
                    />

                    {/* Hero Description */}
                    <p className="max-w-[700px] text-center text-[#323232] text-[16px] md:text-[18px] leading-[24px] tracking-[0.015em]">
                        {heroDescription}
                    </p>
                </div>
            </div>

            {/* Middle Content Section */}
            <div className="w-full max-w-[1440px] mx-auto px-4 pb-[60px] md:px-[120px] md:pb-[100px] flex flex-col gap-[40px] md:gap-[80px]">
                <div className="w-full max-w-[1200px] mx-auto">
                    {/* Filter Bar - Only render if title or filter present */}
                    {(contentTitle || filterComponent) && (
                        <div className="w-full h-auto flex flex-col gap-4 items-start md:flex-row md:items-center md:justify-between mb-8 md:h-[52px]">
                            <h2 className="text-[40px] md:text-[64px] leading-none md:leading-[62px] font-[400] text-[#005382] font-katibeh tracking-[0%]">
                                {contentTitle}
                            </h2>
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                {filterComponent}
                            </div>
                        </div>
                    )}

                    {/* Dynamic Content */}
                    <div className="w-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagePlaceholder;
