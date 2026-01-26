import PagePlaceholder from '../components/PagePlaceholder';
import wall1 from '../assets/wallpaper/image1.png';
import wall2 from '../assets/wallpaper/image2.png';
import wall3 from '../assets/wallpaper/image3.png';
import wall4 from '../assets/wallpaper/image4.png';
import wall5 from '../assets/wallpaper/image5.png';
import wall6 from '../assets/wallpaper/image6.png';
import wall7 from '../assets/wallpaper/image7.png';
import wall8 from '../assets/wallpaper/image8.png';
import wall9 from '../assets/wallpaper/image9.png';
import wall10 from '../assets/wallpaper/image10.png';

import NestedDropdown from '../components/NestedDropdown';

const images = [
    { url: wall1, title: 'Divine Darshan' },
    { url: wall2, title: 'Sacred Temple' },
    { url: wall3, title: 'Spiritual Wisdom' },
    { url: wall4, title: 'Satsang Sabha' },
    { url: wall5, title: 'Temple Architecture' },
    { url: wall6, title: 'Devotional Assembly' },
    { url: wall7, title: 'Sacred Statues' },
    { url: wall8, title: 'Temple Illumination' },
    { url: wall9, title: 'Peaceful Meditation' },
    { url: wall10, title: 'Devotional Flowers' },
];

export default function Images() {
    const months = [
        { label: 'January', value: '01' },
        { label: 'February', value: '02' },
        { label: 'March', value: '03' },
        { label: 'April', value: '04' },
        { label: 'May', value: '05' },
        { label: 'June', value: '06' },
        { label: 'July', value: '07' },
        { label: 'August', value: '08' },
        { label: 'September', value: '09' },
        { label: 'October', value: '10' },
        { label: 'November', value: '11' },
        { label: 'December', value: '12' },
    ];

    const yearItems = [
        { label: '2025', value: '2025', children: months },
        { label: '2024', value: '2024', children: months },
        { label: '2023', value: '2023' },
        { label: '2022', value: '2022' },
        { label: '2021', value: '2021' },
    ];

    const categoryItems = [
        { label: 'All Category', value: 'all' },
        { label: 'Medical', value: 'medical' },
        { label: 'Spiritual', value: 'spiritual' },
        { label: 'Social', value: 'social' },
    ];

    const filters = (
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center md:justify-start">
            <NestedDropdown
                label="2025"
                items={yearItems}
                width="223px"
                className="w-full md:w-[131px] h-[52px] rounded-[35px] pl-[20px] pr-[12px] py-[10px]"
            />
            <NestedDropdown
                label="All Category"
                items={categoryItems}
                width="320px"
                className="w-full md:w-[320px] h-[52px] rounded-[35px] pl-[20px] pr-[12px] py-[10px]"
            />
        </div>
    );

    return (
        <PagePlaceholder
            heroTitle="Image"
            contentTitle=""
            className="bg-[#e9f8ff]"
            filterComponent={filters}
        >
            <div className="w-full max-w-[1240px] mx-auto py-10 px-4">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid relative    overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-auto object-cover  transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            {/* Overlay with title on hover */}

                        </div>
                    ))}
                </div>
            </div>
        </PagePlaceholder>
    );
}
