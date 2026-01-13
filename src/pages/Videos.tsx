import PagePlaceholder from '../components/PagePlaceholder';
import VideoCard from '../components/VideoCard';
import cardDefaultImg from '../assets/card-default.jpg';
import NestedDropdown from '../components/NestedDropdown';
import Pagination from '../components/Pagination';

export default function Videos() {
    const videos = [
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "10:05", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "10:05", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "10:05", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "12:15", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "12:15", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "12:15", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "15:30", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "15:30", thumbnail: cardDefaultImg },
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", duration: "15:30", thumbnail: cardDefaultImg },
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
            heroTitle="Videos"
            contentTitle="Latest Video"
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
