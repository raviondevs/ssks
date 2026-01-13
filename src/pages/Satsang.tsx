import PagePlaceholder from '../components/PagePlaceholder';
import VideoCard from '../components/VideoCard';
import cardDefaultImg from '../assets/card-default.jpg';
import NestedDropdown from '../components/NestedDropdown';
import Pagination from '../components/Pagination';

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
            <Pagination className="mt-12" />
        </PagePlaceholder>
    );
}
