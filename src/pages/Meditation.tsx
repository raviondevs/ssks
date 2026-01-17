import React from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import MeditationCard from '../components/MeditationCard';
import { ChevronDown } from 'lucide-react';

const meditationData = [
    { id: 1, title: 'Gyan Dhyan Chitan', image: 'https://placehold.co/370x247' },
    { id: 2, title: 'Dhyan Purve', image: 'https://placehold.co/370x247' },
    { id: 3, title: 'Dhyan Na Pado', image: 'https://placehold.co/370x247' },
    { id: 4, title: 'Gyan Dhyan Chitan', image: 'https://placehold.co/370x247' },
    { id: 5, title: 'Dhyan Purve', image: 'https://placehold.co/370x247' },
    { id: 6, title: 'Dhyan Na Pado', image: 'https://placehold.co/370x247' },
    { id: 7, title: 'Gyan Dhyan Chitan', image: 'https://placehold.co/370x247' },
    { id: 8, title: 'Dhyan Purve', image: 'https://placehold.co/370x247' },
    { id: 9, title: 'Dhyan Na Pado', image: 'https://placehold.co/370x247' },
];

export default function Meditation() {
    return (
        <PagePlaceholder
            heroTitle="Meditation"
            contentTitle="All"
            className="bg-primary-50"
            filterComponent={
                <div className="relative">
                    <button className="flex items-center gap-2 px-6 py-2 bg-white rounded-full border border-ssks-blue text-ssks-blue font-outfit text-lg hover:bg-primary-50 transition-colors">
                        All Category
                        <ChevronDown size={20} />
                    </button>
                </div>
            }
        >
            <div className="flex flex-wrap justify-center gap-x-[40px] gap-y-[60px]">
                {meditationData.map((item) => (
                    <MeditationCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        onClick={() => console.log('Clicked', item.title)}
                    />
                ))}
            </div>
        </PagePlaceholder>
    );
}
