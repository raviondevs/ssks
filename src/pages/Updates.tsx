import { useState } from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import EventCard from '../components/EventCard';
import cardDefaultImg from '../assets/card-default.jpg';
import NestedDropdown from '../components/NestedDropdown';
import Modal from '../components/Modal';

export default function Updates() {
    const [selectedUpdate, setSelectedUpdate] = useState<any>(null);

    const updates = [
        {
            date: "6th April, 2025",
            title: "SMVS Swaminarayan Hospital 8th Years Anniversary",
            location: "Gandhinagar, India",
            image: cardDefaultImg,
            description: "Celebrating 8 years of selfless service and healthcare excellence. Join us for a special commemorative event featuring guest speakers, success stories, and a vision for the future of SMVS healthcare initiatives. The event will showcase the impact of the hospital on the local community and the humanitarian efforts carried out by our dedicated medical team."
        },
        {
            date: "6th April, 2025",
            title: "SMVS Swaminarayan Hospital 8th Years Anniversary",
            location: "Gandhinagar, India",
            image: cardDefaultImg,
            description: "Celebrating 8 years of selfless service and healthcare excellence. Join us for a special commemorative event featuring guest speakers, success stories, and a vision for the future of SMVS healthcare initiatives. The event will showcase the impact of the hospital on the local community and the humanitarian efforts carried out by our dedicated medical team."
        },
        {
            date: "6th April, 2025",
            title: "SMVS Swaminarayan Hospital 8th Years Anniversary",
            location: "Gandhinagar, India",
            image: cardDefaultImg,
            description: "Celebrating 8 years of selfless service and healthcare excellence. Join us for a special commemorative event featuring guest speakers, success stories, and a vision for the future of SMVS healthcare initiatives. The event will showcase the impact of the hospital on the local community and the humanitarian efforts carried out by our dedicated medical team."
        },
        {
            date: "6th April, 2025",
            title: "SMVS Swaminarayan Hospital 8th Years Anniversary",
            location: "Gandhinagar, India",
            image: cardDefaultImg,
            description: "Celebrating 8 years of selfless service and healthcare excellence. Join us for a special commemorative event featuring guest speakers, success stories, and a vision for the future of SMVS healthcare initiatives. The event will showcase the impact of the hospital on the local community and the humanitarian efforts carried out by our dedicated medical team."
        },
        {
            date: "6th April, 2025",
            title: "SMVS Swaminarayan Hospital 8th Years Anniversary",
            location: "Gandhinagar, India",
            image: cardDefaultImg,
            description: "Celebrating 8 years of selfless service and healthcare excellence. Join us for a special commemorative event featuring guest speakers, success stories, and a vision for the future of SMVS healthcare initiatives. The event will showcase the impact of the hospital on the local community and the humanitarian efforts carried out by our dedicated medical team."
        },
        {
            date: "6th April, 2025",
            title: "SMVS Swaminarayan Hospital 8th Years Anniversary",
            location: "Gandhinagar, India",
            image: cardDefaultImg,
            description: "Celebrating 8 years of selfless service and healthcare excellence. Join us for a special commemorative event featuring guest speakers, success stories, and a vision for the future of SMVS healthcare initiatives. The event will showcase the impact of the hospital on the local community and the humanitarian efforts carried out by our dedicated medical team."
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
        <>
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
                            onViewClick={() => setSelectedUpdate(update)}
                        />
                    ))}
                </div>
            </PagePlaceholder>

            <Modal
                isOpen={!!selectedUpdate}
                onClose={() => setSelectedUpdate(null)}
                title={selectedUpdate?.title || ''}
            >
                <div className="space-y-4">
                    <img
                        src={selectedUpdate?.image}
                        alt={selectedUpdate?.title}
                        className="w-full h-64 object-cover rounded-2xl mb-4"
                    />
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-outfit">
                        <span>{selectedUpdate?.date}</span>
                        <span>•</span>
                        <span>{selectedUpdate?.location}</span>
                    </div>
                    <p className="text-lg leading-relaxed">
                        {selectedUpdate?.description}
                    </p>
                </div>
            </Modal>
        </>
    );
}

