import { useState } from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import MeditationCard from '../components/MeditationCard';
import VideoModal from '../components/VideoModal';
import NestedDropdown from '../components/NestedDropdown';

const meditationData = [
    { id: 1, title: 'Gyan Dhyan Chitan', image: 'https://placehold.co/370x247', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 2, title: 'Dhyan Purve', image: 'https://placehold.co/370x247', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 3, title: 'Dhyan Na Pado', image: 'https://placehold.co/370x247', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 4, title: 'Gyan Dhyan Chitan', image: 'https://placehold.co/370x247', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 5, title: 'Dhyan Purve', image: 'https://placehold.co/370x247', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 6, title: 'Dhyan Na Pado', image: 'https://placehold.co/370x247', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 7, title: 'Gyan Dhyan Chitan', image: 'https://placehold.co/370x247', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 8, title: 'Dhyan Purve', image: 'https://placehold.co/370x247', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 9, title: 'Dhyan Na Pado', image: 'https://placehold.co/370x247', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
];

export default function Meditation() {
    const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

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
            heroTitle="Meditation"
            contentTitle="All"
            className="bg-primary-50"
            filterComponent={filters}
        >
            <div className="flex flex-wrap justify-center gap-8 md:gap-x-[40px] md:gap-y-[60px]">
                {meditationData.map((item) => (
                    <MeditationCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        onClick={() => setSelectedVideo({ url: item.videoUrl, title: item.title })}
                    />
                ))}
            </div>

            {/* Video Modal */}
            <VideoModal
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
                videoUrl={selectedVideo?.url}
                title={selectedVideo?.title}
            />
        </PagePlaceholder>
    );
}
