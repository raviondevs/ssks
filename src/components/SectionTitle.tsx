import React from 'react';
import { TitleDecorationLeft, TitleDecorationRight } from './TitleDecoration';

interface SectionTitleProps {
    title: string;
    color: string;
    className?: string;
    titleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, color, className = "", titleClassName = "" }) => {
    return (
        <div
            className={`flex items-center justify-center gap-[10px] p-[10px] w-full ${className}`}
            style={{ color: color }}
        >
            <div className="flex items-center justify-center shrink-0">
                <TitleDecorationLeft />
            </div>

            <h2
                className={`font-katibeh font-[400] text-[64px] leading-none uppercase text-center ${titleClassName}`}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    // Minor adjustment for Katibeh font vertical centering
                }}
            >
                {title}
            </h2>

            <div className="flex items-center justify-center shrink-0">
                <TitleDecorationRight />
            </div>
        </div>
    );
};

export default SectionTitle;
