import PagePlaceholder from '../components/PagePlaceholder';

export default function Darshan() {
    const filters = (
        <div className="flex gap-4">
            <div className="border border-[#3B82F6] rounded-full px-6 py-1.5 text-sm text-[#3B82F6] flex items-center gap-2 cursor-pointer bg-white">
                DD/MM/YYYY
                <span className="text-xs">▼</span>
            </div>
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
