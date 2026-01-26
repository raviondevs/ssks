import { useNavigate } from 'react-router-dom';
import PagePlaceholder from '../components/PagePlaceholder';
import DownloadSection from '../components/DownloadSection';

// Import local images from assets/download
import booksImg from '../assets/download/books.png';
import ringtoneImg from '../assets/download/rington.png';
import calendarWallpaperImg from '../assets/download/calenderWallpepar.png';
import murtiImg from '../assets/download/murti.png';
import wallpaperImg from '../assets/download/wallpaper.jpg';

const downloadData = [
    {
        id: 1,
        title: 'Books',
        description: "Explore our collection of sacred scriptures, spiritual literature, and educational books that provide guidance and wisdom for a meaningful life.",
        image: booksImg,
    },
    {
        id: 2,
        title: 'Ringtone',
        description: "Download soul-stirring kirtans and divine melodies as ringtones to keep the divine presence with you throughout the day.",
        image: ringtoneImg,
    },
    {
        id: 3,
        title: 'Calendar Wallpaper',
        description: "Stay organized and inspired with our beautiful calendar wallpapers featuring important festival dates and spiritual imagery.",
        image: calendarWallpaperImg,
    },
    {
        id: 4,
        title: 'Murti',
        description: "Download high-resolution images of divine murtis for your personal meditation and daily darshan.",
        image: murtiImg,
    },
    {
        id: 5,
        title: 'Wallpaper',
        description: "Transform your desktop and mobile screens with stunning spiritual wallpapers that evoke peace and devotion.",
        image: wallpaperImg,
    },
];

export default function Download() {
    const navigate = useNavigate();

    const handleReadMore = (title: string) => {
        if (title === 'Wallpaper') {
            navigate('/wallpapers');
        } else {
            console.log('Read more', title);
        }
    };

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
                        isReversed={index % 2 !== 0}
                        onReadMore={() => handleReadMore(item.title)}
                    />
                ))}
            </div>
        </PagePlaceholder>
    );
}
