import PagePlaceholder from '../components/PagePlaceholder';
import EventCard from '../components/EventCard';
import cardDefaultImg from '../assets/card-default.jpg';
import NestedDropdown from '../components/NestedDropdown';

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
    ];

    const categoryItems = [
        { label: 'All Category', value: 'all' },
        { label: 'Satsang', value: 'satsang' },
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
