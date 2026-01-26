import PagePlaceholder from '../components/PagePlaceholder';
import AudioCard from '../components/AudioCard';
import cardDefaultImg from '../assets/card-default.jpg';
import NestedDropdown from '../components/NestedDropdown';
import Pagination from '../components/Pagination';

export default function Audios() {
    const audios = [
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg, audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { title: "Kirtan Bhakti", thumbnail: cardDefaultImg, audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { title: "Divine Melodies", thumbnail: cardDefaultImg, audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
        { title: "Satsang Kirtan", thumbnail: cardDefaultImg, audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
        { title: "Prarthana", thumbnail: cardDefaultImg, audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
        { title: "Hari Smaran", thumbnail: cardDefaultImg, audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-16 mt-8 justify-items-center">
                {audios.map((audio, i) => (
                    <AudioCard
                        key={i}
                        {...audio}
                        className="w-full"
                    />
                ))}
            </div>
            {/* <Pagination className="mt-8 md:mt-12" /> */}
        </PagePlaceholder>

    );
}
