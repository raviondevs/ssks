import { useState } from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import AudioCard from '../components/AudioCard';
import cardDefaultImg from '../assets/card-default.jpg';
import NestedDropdown from '../components/NestedDropdown';
import Pagination from '../components/Pagination';
import VideoModal from '../components/VideoModal';

export default function Audios() {
    const [selectedAudio, setSelectedAudio] = useState<{ url: string; title: string } | null>(null);

    const audios = [
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
    ];

    const audioItems = [
        { label: 'All', value: 'all' },
        { label: 'Kirtan', value: 'kirtan' },
        { label: 'Bhajan', value: 'bhajan' },
    ];

    const filters = (
        <div className="flex gap-4 w-full justify-center md:justify-start">
            <NestedDropdown
                label="All"
                items={audioItems}
                width="223px"
                className="w-full max-w-[223px] h-[52px] rounded-[35px] pl-[20px] pr-[12px] py-[10px]"
            />
        </div>
    );

    return (
        <PagePlaceholder heroTitle="Audio" contentTitle="Kirtan" filterComponent={filters}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-8 justify-items-center">
                {audios.map((audio, i) => (
                    <AudioCard
                        key={i}
                        {...audio}
                        className="w-full"
                        onPlayClick={() => setSelectedAudio({ url: audio.videoUrl, title: audio.title })}
                    />
                ))}
            </div>
            <Pagination className="mt-8 md:mt-12" />

            {/* Audio/Video Player Modal */}
            <VideoModal
                isOpen={!!selectedAudio}
                onClose={() => setSelectedAudio(null)}
                videoUrl={selectedAudio?.url}
                title={selectedAudio?.title}
            />
        </PagePlaceholder>
    );
}
