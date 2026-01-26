import PagePlaceholder from '../components/PagePlaceholder';
import wall1 from '../assets/wallpaper/image1.png';
import wall2 from '../assets/wallpaper/image2.png';
import wall3 from '../assets/wallpaper/image3.png';
import wall4 from '../assets/wallpaper/image4.png';
import wall5 from '../assets/wallpaper/image5.png';
import wall6 from '../assets/wallpaper/image6.png';
import wall7 from '../assets/wallpaper/image7.png';
import wall8 from '../assets/wallpaper/image8.png';
import wall9 from '../assets/wallpaper/image9.png';
import wall10 from '../assets/wallpaper/image10.png';

const images = [
    { url: wall1, title: 'Divine Darshan' },
    { url: wall2, title: 'Sacred Temple' },
    { url: wall3, title: 'Spiritual Wisdom' },
    { url: wall4, title: 'Satsang Sabha' },
    { url: wall5, title: 'Temple Architecture' },
    { url: wall6, title: 'Devotional Assembly' },
    { url: wall7, title: 'Sacred Statues' },
    { url: wall8, title: 'Temple Illumination' },
    { url: wall9, title: 'Peaceful Meditation' },
    { url: wall10, title: 'Devotional Flowers' },
];

export default function Images() {
    return (
        <PagePlaceholder
            heroTitle="Image"
            contentTitle=""
            className="bg-[#e9f8ff]"
        >
            <div className="w-full max-w-[1240px] mx-auto py-10 px-4">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            {/* Overlay with title on hover */}

                        </div>
                    ))}
                </div>
            </div>
        </PagePlaceholder>
    );
}
