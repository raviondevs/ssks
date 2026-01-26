import PagePlaceholder from '../components/PagePlaceholder';
import GlobalEventCard from '../components/GlobalEventCard';
import globalEventImg from '../assets/global-event.png';
import NestedDropdown from '../components/NestedDropdown';

export default function Events() {
    const events = [
        { date: "October 19, 2024", title: "Vichran | Vadodara, India", location: "Gujarat, India", image: globalEventImg },
        { date: "October 20, 2024", title: "Vichran | Vadodara, India", location: "Gujarat, India", image: globalEventImg },
        { date: "October 21, 2024", title: "Vichran | Vadodara, India", location: "Gujarat, India", image: globalEventImg },
        { date: "October 22, 2024", title: "Vichran | Vadodara, India", location: "Gujarat, India", image: globalEventImg },
        { date: "October 23, 2024", title: "Vichran | Vadodara, India", location: "Gujarat, India", image: globalEventImg },
        { date: "October 24, 2024", title: "Vichran | Vadodara, India", location: "Gujarat, India", image: globalEventImg },
        { date: "October 25, 2024", title: "Vichran | Vadodara, India", location: "Gujarat, India", image: globalEventImg },
        { date: "October 26, 2024", title: "Vichran | Vadodara, India", location: "Gujarat, India", image: globalEventImg },
        { date: "October 27, 2024", title: "Vichran | Vadodara, India", location: "Gujarat, India", image: globalEventImg },
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
        { label: '2020', value: '2020' },
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
            heroTitle="Events"
            contentTitle="Global Event"
            filterComponent={filters}
        >
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center mt-8">
                {events.map((event, index) => (
                    <GlobalEventCard
                        key={index}
                        {...event}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8 md:mt-12">
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
