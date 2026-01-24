import PagePlaceholder from '../components/PagePlaceholder';
import calendarImg from '../assets/calendar-image.png';
import NestedDropdown from '../components/NestedDropdown';

export default function Calendar() {
    const monthItems = [
        { label: 'January', value: 'jan' },
        { label: 'February', value: 'feb' },
        { label: 'March', value: 'mar' },
        { label: 'April', value: 'apr' },
        { label: 'May', value: 'may' },
        { label: 'June', value: 'jun' },
        { label: 'July', value: 'jul' },
        { label: 'August', value: 'aug' },
        { label: 'September', value: 'sep' },
        { label: 'October', value: 'oct' },
        { label: 'November', value: 'nov' },
        { label: 'December', value: 'dec' },
    ];

    const filters = (
        <div className="w-full flex justify-center md:justify-start">
            <NestedDropdown
                label="Month"
                items={monthItems}
                width="200px"
                className="w-full max-w-[180px] h-[52px] rounded-[35px] pl-[20px] pr-[12px] py-[10px]"
            />
        </div>
    );

    return (
        <PagePlaceholder
            heroTitle="Calendar"
            contentTitle="Calendar"
            filterComponent={filters}
        >
            <div className="w-full flex justify-center py-8">
                <img
                    src={calendarImg}
                    alt="December 2025 Calendar"
                    className="w-full max-w-[1000px] h-auto shadow-lg rounded-lg"
                />
            </div>
        </PagePlaceholder>
    );
}
