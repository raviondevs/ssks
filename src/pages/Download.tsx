import PagePlaceholder from '../components/PagePlaceholder';
import DownloadSection from '../components/DownloadSection';

const downloadData = [
    {
        id: 1,
        title: 'Books',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 2,
        title: 'Ringtone',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 3,
        title: 'Calendar Wallpaper',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 4,
        title: 'Murti',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: 'https://images.unsplash.com/photo-1588661730043-4dc97686b2be?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 5,
        title: 'Wallpaper',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: 'https://images.unsplash.com/photo-1623321527796-0160a0224424?auto=format&fit=crop&q=80&w=800',
    },
];

export default function Download() {
    return (
        <PagePlaceholder
            heroTitle="Download"
            contentTitle=""
            className="bg-primary-50"
        >
            <div className="flex flex-col gap-[80px] py-10">
                {downloadData.map((item, index) => (
                    <DownloadSection
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        isReversed={index % 2 !== 0} // Even index (0, 2, 4) is normal, odd (1, 3) is reversed? 
                        // Wait, data index 0 is first item.
                        // Item 1 (index 0) = Left Image (Normal)
                        // Item 2 (index 1) = Right Image (Reversed)
                        // So index % 2 !== 0 is correct for reversed.
                        onReadMore={() => console.log('Read more', item.title)}
                    />
                ))}
            </div>
        </PagePlaceholder>
    );
}
