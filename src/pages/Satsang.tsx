import PagePlaceholder from '../components/PagePlaceholder';
import VideoCard from '../components/VideoCard';
import cardDefaultImg from '../assets/card-default.jpg';
import NestedDropdown from '../components/NestedDropdown';

export default function Satsang() {
    const videos = [
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "00:05", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "00:05", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "00:05", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "01:15", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "01:15", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "01:15", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "01:05", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "01:05", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "01:05", thumbnail: cardDefaultImg },
    ];

    const categoryItems = [
        { label: 'All Category', value: 'all' },
        { label: 'Latest Satsang', value: 'latest' },
        { label: 'Spiritual', value: 'spiritual' },
        { label: 'Casual', value: 'casual' },
    ];

    const filters = (
        <div className="flex gap-4">
            <NestedDropdown
                label="All Category"
                items={categoryItems}
                width="320px"
                className="w-[320px] h-[52px] rounded-[35px] pl-[20px] pr-[12px] py-[10px]"
            />
        </div>
    );

    return (
        <PagePlaceholder
            heroTitle="5 mintues Satsang"
            contentTitle="Latest Satsang"
            filterComponent={filters}
        >
            <div className="flex flex-wrap gap-8 justify-center mt-8">
                {videos.map((video, index) => (
                    <VideoCard key={index} {...video} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#3B82F6]">
                    &lt;
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-[#3B82F6] font-medium">1</button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#3B82F6]">2</button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#3B82F6]">3</button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#3B82F6]">4</button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#3B82F6]">5</button>
                <span className="text-gray-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#3B82F6]">10</button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#3B82F6]">11</button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#3B82F6]">
                    &gt;
                </button>
            </div>
        </PagePlaceholder>
    );
}
