import React from 'react';
import { TitleDecorationLeft, TitleDecorationRight } from './TitleDecoration';

interface PagePlaceholderProps {
    heroTitle: string;
    heroDescription?: string;
    contentTitle: string;
    filterComponent?: React.ReactNode;
    children: React.ReactNode;
}

const PagePlaceholder: React.FC<PagePlaceholderProps> = ({
    heroTitle,
    heroDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    contentTitle,
    filterComponent,
    children
}) => {
    return (
        <div className="w-full bg-white font-outfit -mt-[132px]">
            {/* Top Hero Section */}
            <div
                className="w-full h-[437.87px] flex flex-col items-center justify-start pt-[172px] px-[100px] pb-[100px] gap-[60px]"
                style={{
                    background: 'linear-gradient(180deg, #FDF2F2 0%, #FFFFFF 100%)',
                }}
            >
                <div className="w-full max-w-[1200px] flex flex-col items-center gap-[12px]">
                    {/* Header Title with Arrows */}
                    <div className="flex items-center gap-4 text-[#1E3A8A]">
                        <TitleDecorationLeft />
                        <h1 className="font-katibeh text-[64px] leading-[62px] font-[400] text-center">
                            {heroTitle}
                        </h1>
                        <TitleDecorationRight />
                    </div>

                    {/* Hero Description */}
                    <p className="max-w-[700px] text-center text-[#4B5563] text-[16px] leading-[24px]">
                        {heroDescription}
                    </p>
                </div>
            </div>

            {/* Middle Content Section */}
            <div className="w-full max-w-[1440px] mx-auto px-[120px] pb-[100px] flex flex-col gap-[80px]">
                <div className="w-full max-w-[1200px] mx-auto">
                    {/* Filter Bar */}
                    <div className="w-full h-[52px] flex items-center justify-between border-b border-[#E5E7EB] mb-8">
                        <h2 className="text-[32px] font-[400] text-[#1E3A8A] font-katibeh">
                            {contentTitle}
                        </h2>
                        <div className="flex items-center gap-4">
                            {filterComponent}
                        </div>
                    </div>

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
