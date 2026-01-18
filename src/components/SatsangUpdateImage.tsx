import React, { useId } from 'react';

interface SatsangUpdateImageProps {
    src: string;
    className?: string;
}

const SatsangUpdateImage: React.FC<SatsangUpdateImageProps> = ({ src, className }) => {
    const id = useId().replace(/:/g, "");
    const patternId = `pattern_${id}`;

    return (
        <svg
            width="295"
            height="303"
            viewBox="0 0 295 303"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            preserveAspectRatio="xMidYMid meet"
        >
            <path
                d="M0.357019 58.9216C-3.27251 27.5368 21.2633 0 52.8573 0H267.6C282.194 0 294.025 11.8309 294.025 26.4251V275.702C294.025 290.296 282.194 302.127 267.6 302.127H75.5733C48.7339 302.127 26.1563 282.01 23.073 255.348L0.357019 58.9216Z"
                fill={`url(#${patternId})`}
            />
            <defs>
                <pattern
                    id={patternId}
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <image
                        href={src}
                        width="1"
                        height="1"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </pattern>
            </defs>
        </svg>
    );
};

export default SatsangUpdateImage;
