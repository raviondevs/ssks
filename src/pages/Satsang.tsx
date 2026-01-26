import { useState } from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import VideoCard from '../components/VideoCard';
import cardDefaultImg from '../assets/card-default.jpg';
import NestedDropdown from '../components/NestedDropdown';
import Pagination from '../components/Pagination';
import VideoModal from '../components/VideoModal';

export default function Satsang() {
    const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

    const videos = [
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "00:05", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "00:05", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "00:05", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "01:15", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "01:15", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "01:15", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "01:05", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "01:05", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "01:05", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
    ];

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
        { label: 'Latest Satsang', value: 'latest' },
        { label: 'Spiritual', value: 'spiritual' },
        { label: 'Casual', value: 'casual' },
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
                className="w-full md:max-w-[320px] h-[52px] rounded-[35px] pl-[20px] pr-[12px] py-[10px]"
            />
        </div>
    );

    return (
        <PagePlaceholder
            heroTitle="5 mintues Satsang"
            contentTitle="Latest Satsang"
            filterComponent={filters}
        >
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center mt-8">
                {videos.map((video, index) => (
                    <VideoCard
                        key={index}
                        {...video}
                        onPlayClick={() => setSelectedVideo({ url: video.videoUrl, title: video.title })}
                    />
                ))}
            </div>

            {/* Pagination */}
            <Pagination className="mt-8 md:mt-12" />

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
