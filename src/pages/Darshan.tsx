import PagePlaceholder from '../components/PagePlaceholder';
import DatePickerDropdown from '../components/DatePickerDropdown';

export default function Darshan() {
    const filters = (
        <div className="flex gap-4">
            <DatePickerDropdown
                width="358px"
                className="w-[358px] h-[52px] rounded-[35px] pl-[20px] pr-[12px] py-[10px]"
            />
        </div>
    );

    return (
        <PagePlaceholder
            heroTitle="Daily Darshan"
            contentTitle="7 April 2025 (Thursday)"
            filterComponent={filters}
        >
            <div className="flex flex-col items-center mt-12">
                <div className="relative w-[600px] h-[800px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                    <img
                        src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1200"
                        alt="Bhagwan Swaminarayan"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="mt-8 text-[#1E3A8A] font-katibeh text-[40px]">Bhagwan Swaminarayan</h3>
            </div>
        </PagePlaceholder>
    );
}
