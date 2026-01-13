import PagePlaceholder from '../components/PagePlaceholder';
import AudioCard from '../components/AudioCard';
import cardDefaultImg from '../assets/card-default.jpg';
import NestedDropdown from '../components/NestedDropdown';
import Pagination from '../components/Pagination';

export default function Audios() {
    const audios = [
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg },
    ];

    const audioItems = [
        { label: 'All', value: 'all' },
        { label: 'Kirtan', value: 'kirtan' },
        { label: 'Bhajan', value: 'bhajan' },
    ];

    const filters = (
        <div className="flex gap-4">
            <NestedDropdown
                label="All"
                items={audioItems}
                width="223px"
                className="w-[223px] h-[52px] rounded-[35px] pl-[20px] pr-[12px] py-[10px]"
            />
        </div>
    );

    return (
        <PagePlaceholder heroTitle="Audio" contentTitle="Kirtan" filterComponent={filters}>
            <div className="flex flex-wrap gap-12 mt-8 justify-center">
                {audios.map((audio, i) => <AudioCard key={i} {...audio} />)}
            </div>
            <Pagination className="mt-12" />
        </PagePlaceholder>
    );
}
