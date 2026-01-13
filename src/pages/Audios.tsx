import PagePlaceholder from '../components/PagePlaceholder';
import AudioCard from '../components/AudioCard';
import cardDefaultImg from '../assets/card-default.jpg';

export default function Audios() {
    const audios = [
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg },
        { title: "Hari Bin Koi Na Tera", thumbnail: cardDefaultImg },
    ];

    const filters = (
        <select className="border border-[#E5E7EB] rounded-full px-5 py-2 text-sm bg-white outline-none cursor-pointer hover:border-[#3B82F6] transition-colors text-[#1E3A8A]">
            <option>All</option>
            <option>Kirtan</option>
            <option>Bhajan</option>
        </select>
    );

    return (
        <PagePlaceholder heroTitle="Audio" contentTitle="Kirtan" filterComponent={filters}>
            <div className="flex flex-wrap gap-12 mt-8 justify-center">
                {audios.map((audio, i) => <AudioCard key={i} {...audio} />)}
            </div>
            <div className="flex items-center justify-center gap-2 mt-12">
                <button className="w-8 h-8 text-gray-400">&lt;</button>
                <button className="w-8 h-8 text-[#3B82F6] font-medium">1</button>
                <button className="w-8 h-8 text-gray-600">2</button>
                <button className="w-8 h-8 text-gray-600">3</button>
                <span className="text-gray-400">...</span>
                <button className="w-8 h-8 text-gray-400">&gt;</button>
            </div>
        </PagePlaceholder>
    );
}
