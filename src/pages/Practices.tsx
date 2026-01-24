import PagePlaceholder from '../components/PagePlaceholder';
import PracticeCard from '../components/PracticeCard';
import cardDefaultImg from '../assets/card-default.jpg';
import NestedDropdown from '../components/NestedDropdown';

export default function Practices() {
    const practices = [
        {
            title: "Dhun",
            thumbnail: cardDefaultImg
        },
        {
            title: "Prarthana",
            thumbnail: cardDefaultImg
        },
        {
            title: "Kirtan",
            thumbnail: cardDefaultImg
        },
        {
            title: "Chesta",
            thumbnail: cardDefaultImg
        },
        {
            title: "Nitya Puja",
            thumbnail: cardDefaultImg
        },
        {
            title: "Aarti",
            thumbnail: cardDefaultImg
        },
    ];

    const practiceItems = [
        { label: 'All Practices', value: 'all' },
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Advanced', value: 'advanced' },
    ];

    const filters = (
        <div className="flex gap-4 w-full justify-center md:justify-start">
            <NestedDropdown
                label="All Practices"
                items={practiceItems}
                width="320px"
                className="w-full max-w-[320px] h-[52px] rounded-[35px] pl-[20px] pr-[12px] py-[10px]"
            />
        </div>
    );

    return (
        <PagePlaceholder
            heroTitle="Spiritual Practices"
            contentTitle="Daily Practices"
            filterComponent={filters}
        >
            <div className="flex flex-wrap gap-8 md:gap-12 mt-8 md:mt-12 justify-center">
                {practices.map((practice, index) => (
                    <PracticeCard key={index} {...practice} />
                ))}
            </div>
        </PagePlaceholder>
    );
}
