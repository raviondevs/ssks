import PagePlaceholder from '../components/PagePlaceholder';
import GlobalEventCard from '../components/GlobalEventCard';
import globalEventImg from '../assets/global-event.png';

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

    const filters = (
        <div className="flex gap-4">
            <select className="border border-[#E5E7EB] rounded-full px-5 py-2 text-sm bg-white outline-none cursor-pointer hover:border-[#3B82F6] transition-colors text-[#1E3A8A]">
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
            </select>
        </div>
    );

    return (
        <PagePlaceholder
            heroTitle="Events"
            contentTitle="Global Event"
            filterComponent={filters}
        >
            <div className="flex flex-wrap gap-8 justify-center mt-8">
                {events.map((event, index) => (
                    <GlobalEventCard
                        key={index}
                        {...event}
                    />
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
