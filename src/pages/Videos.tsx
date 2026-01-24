import { useState } from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import VideoCard from '../components/VideoCard';
import cardDefaultImg from '../assets/card-default.jpg';
import NestedDropdown from '../components/NestedDropdown';
import Pagination from '../components/Pagination';
import VideoModal from '../components/VideoModal';

export default function Videos() {
    const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

    const videos = [
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "10:05", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "10:05", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "10:05", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "12:15", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "12:15", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "12:15", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "15:30", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "15:30", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "15:30", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
    ];

    const categoryItems = [
        { label: 'All Category', value: 'all' },
        { label: 'Latest Video', value: 'latest' },
        { label: 'Hari Bhag', value: 'hari_bhag' },
        { label: 'Hari Smruti', value: 'hari_smruti' },
        { label: 'Manoranjan', value: 'manoranjan' },
        { label: 'Miscellaneous', value: 'misc' },
    ];

    const filters = (
        <div className="flex gap-4 w-full justify-center md:justify-start">
            <NestedDropdown
                label="All Category"
                items={categoryItems}
                width="320px"
                className="w-full max-w-[320px] h-[52px] rounded-[35px] pl-[20px] pr-[12px] py-[10px]"
            />
        </div>
    );

    return (
        <PagePlaceholder
            heroTitle="Videos"
            contentTitle="Latest Video"
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
