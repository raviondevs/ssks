import PagePlaceholder from '../components/PagePlaceholder';
import PracticeCard from '../components/PracticeCard';
import cardDefaultImg from '../assets/card-default.jpg';

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

    const filters = (
        <div className="flex gap-4">
            <select className="border border-gray-200 rounded-full px-4 py-1.5 text-sm bg-white outline-none cursor-pointer hover:border-[#3B82F6] transition-colors">
                <option>All Practices</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>
        </div>
    );

    return (
        <PagePlaceholder
            heroTitle="Spiritual Practices"
            contentTitle="Daily Practices"
            filterComponent={filters}
        >
            <div className="flex flex-wrap gap-12 mt-12 justify-center">
                {practices.map((practice, index) => (
                    <PracticeCard key={index} {...practice} />
                ))}
            </div>
        </PagePlaceholder>
    );
}
