import PagePlaceholder from '../components/PagePlaceholder';
import EventCard from '../components/EventCard';
import cardDefaultImg from '../assets/card-default.jpg';

export default function Updates() {
    const updates = [
        {
            date: "6th April, 2025",
            title: "SMVS Swaminarayan Hospital 8th Years Anniversary",
            location: "Gandhinagar, India",
            image: cardDefaultImg
        },
        {
            date: "6th April, 2025",
            title: "SMVS Swaminarayan Hospital 8th Years Anniversary",
            location: "Gandhinagar, India",
            image: cardDefaultImg
        },
        {
            date: "6th April, 2025",
            title: "SMVS Swaminarayan Hospital 8th Years Anniversary",
            location: "Gandhinagar, India",
            image: cardDefaultImg
        },
        {
            date: "6th April, 2025",
            title: "SMVS Swaminarayan Hospital 8th Years Anniversary",
            location: "Gandhinagar, India",
            image: cardDefaultImg
        },
        {
            date: "6th April, 2025",
            title: "SMVS Swaminarayan Hospital 8th Years Anniversary",
            location: "Gandhinagar, India",
            image: cardDefaultImg
        },
        {
            date: "6th April, 2025",
            title: "SMVS Swaminarayan Hospital 8th Years Anniversary",
            location: "Gandhinagar, India",
            image: cardDefaultImg
        },
    ];

    const filters = (
        <div className="flex gap-4">
            <select className="border border-gray-200 rounded-full px-4 py-1.5 text-sm bg-white outline-none">
                <option>2025</option>
                <option>2024</option>
            </select>
            <select className="border border-gray-200 rounded-full px-4 py-1.5 text-sm bg-white outline-none">
                <option>All Category</option>
                <option>Satsang</option>
            </select>
        </div>
    );

    return (
        <PagePlaceholder
            heroTitle="Satsang Updates"
            contentTitle="Global Event"
            filterComponent={filters}
        >
            <div className="flex flex-wrap gap-8 mt-12 justify-center">
                {updates.map((update, index) => (
                    <EventCard
                        key={index}
                        {...update}
                        onViewClick={() => console.log('View clicked for:', update.title)}
                    />
                ))}
            </div>
        </PagePlaceholder>
    );
}
