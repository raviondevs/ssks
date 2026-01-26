import PagePlaceholder from '../components/PagePlaceholder';
import DatePickerDropdown from '../components/DatePickerDropdown';
import dailyDarshanImg from '../assets/daily-darshan.jpg';

export default function Darshan() {
    const filters = (
        <div className="flex gap-4 w-full justify-center md:justify-start">
            <DatePickerDropdown
                className="w-full max-w-[358px] h-[52px] rounded-[35px] pl-[20px] pr-[12px] py-[10px]"
            />
        </div>
    );

    return (
        <PagePlaceholder
            heroTitle="Daily Darshan"
            contentTitle="7 April 2025 (Thursday)"
            filterComponent={filters}
        >
            <div className="flex flex-col items-center mt-8 md:mt-12">
                <div className="relative w-full max-w-[763px] h-auto aspect-[3/4] md:h-[800px] lg:h-[1310px] rounded-[20px] md:rounded-[40px] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
                    <img
                        src={dailyDarshanImg}
                        alt="Bhagwan Swaminarayan"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="mt-6 md:mt-8 text-[#1E3A8A] font-katibeh text-[32px] md:text-[40px]">Bhagwan Swaminarayan</h3>
            </div>
        </PagePlaceholder>
    );
}
