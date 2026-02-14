import { useState } from 'react';
import { Plus, Edit2, Trash2, Calendar, Search, MapPin, Tag, Image as ImageIcon } from 'lucide-react';
import Modal from '../../components/Modal';
import type { Update } from '../../types/admin';

const mockUpdates: Update[] = [
    {
        id: 1,
        title: 'SMVS Swaminarayan Hospital 8th Years Anniversary',
        date: '2025-04-06',
        location: 'Gandhinagar, India',
        category: 'Hospital',
        description: 'Celebrating 8 years of selfless service and healthcare excellence. Join us for a special commemorative event featuring guest speakers, success stories, and a vision for the future of SMVS healthcare initiatives.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'New Darshan Timings',
        date: '2024-03-15',
        location: 'Maninagar, Ahmedabad',
        category: 'Temple',
        description: 'Please note the change in morning darshan timings starting next Monday. The doors will open at 5:30 AM instead of 6:00 AM.',
        image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Satsang Shibir 2024',
        date: '2024-03-10',
        location: 'Mumbai, India',
        category: 'Satsang',
        description: 'Join us for a 3-day spiritual retreat focused on meditation and spiritual growth. Registration is mandatory for all attendees.',
        image: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=800&auto=format&fit=crop'
    },
];

export default function UpdatesManager() {
    const [updates, setUpdates] = useState<Update[]>(mockUpdates);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUpdate, setSelectedUpdate] = useState<Update | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleView = (update: Update) => {
        setSelectedUpdate(update);
        setIsEditing(false);
        setIsModalOpen(true);
    };

    const handleEdit = (update: Update) => {
        setSelectedUpdate(update);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedUpdate({
            id: 0,
            title: '',
            date: new Date().toISOString().split('T')[0],
            location: '',
            category: 'News',
            description: '',
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop'
        });
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this update?')) {
            setUpdates(updates.filter(u => u.id !== id));
            setIsModalOpen(false);
        }
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedUpdate) return;

        const formData = new FormData(e.target as HTMLFormElement);
        const newData: Update = {
            id: selectedUpdate.id || Math.max(...updates.map(u => u.id), 0) + 1,
            title: formData.get('title') as string,
            date: formData.get('date') as string,
            location: formData.get('location') as string,
            category: formData.get('category') as string,
            description: formData.get('description') as string,
            image: selectedUpdate.image
        };

        if (selectedUpdate.id) {
            setUpdates(updates.map(u => u.id === selectedUpdate.id ? newData : u));
        } else {
            setUpdates([newData, ...updates]);
        }
        setIsModalOpen(false);
    };

    const filteredUpdates = updates.filter(update =>
        update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        update.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        update.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-katibeh text-[#005382]">Updates & News</h1>
                    <p className="text-gray-500 font-outfit mt-1">Manage announcements and latest news for the community</p>
                </div>
                <button
                    onClick={handleAdd}
                    className="px-6 py-3 bg-[#E21E25] text-white rounded-2xl hover:bg-[#c41920] flex items-center gap-2 font-outfit font-bold transition-all shadow-lg shadow-red-100 hover:-translate-y-0.5"
                >
                    <Plus size={20} />
                    Create New Update
                </button>
            </div>

            {/* Content Filters */}
            <div className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search updates by title, location or category..."
                        className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005382]/10 focus:border-[#005382] font-outfit bg-gray-50/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Updates List */}
            <div className="grid gap-6">
                {filteredUpdates.length > 0 ? (
                    filteredUpdates.map((update) => (
                        <div
                            key={update.id}
                            className="bg-white p-6 rounded-[25px] border-2 border-gray-200 hover:border-[#005382] transition-all flex flex-col lg:flex-row gap-8 items-center cursor-pointer group"
                            onClick={() => handleView(update)}
                        >
                            <div className="relative shrink-0 w-full lg:w-48 h-48 lg:h-32 rounded-[24px] overflow-hidden shadow-inner">
                                <img src={update.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute top-2 left-2 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-[#005382] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                                    <Tag size={10} className="text-[#E21E25]" />
                                    {update.category}
                                </div>
                            </div>

                            <div className="flex-1 space-y-3 w-full">
                                <h3 className="text-2xl font-katibeh text-[#005382] leading-tight group-hover:text-[#E21E25] transition-colors">{update.title}</h3>
                                <div className="flex flex-wrap items-center gap-5 text-[11px] text-gray-500 font-outfit font-bold uppercase tracking-widest">
                                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                                        <Calendar size={14} className="text-[#E21E25]" />
                                        {new Date(update.date).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                                        <MapPin size={14} className="text-[#E21E25]" />
                                        {update.location}
                                    </div>
                                </div>
                                <p className="text-[#57534E] font-outfit text-sm leading-relaxed line-clamp-2 max-w-4xl">
                                    {update.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleEdit(update); }}
                                    className="p-3 text-blue-600 hover:bg-blue-50 rounded-2xl transition-all border border-transparent hover:border-blue-100"
                                >
                                    <Edit2 size={20} />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleDelete(update.id); }}
                                    className="p-3 text-red-600 hover:bg-red-50 rounded-2xl transition-all border border-transparent hover:border-red-100"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-gray-100">
                        <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                            <Search size={32} />
                        </div>
                        <p className="text-gray-500 font-outfit text-xl font-medium">No results found for your search.</p>
                        <button onClick={() => setSearchTerm('')} className="text-[#E21E25] font-bold mt-3 hover:underline font-outfit uppercase tracking-widest text-xs">Clear all filters</button>
                    </div>
                )}
            </div>

            {/* Update Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={isEditing ? (selectedUpdate?.id ? 'Edit Update Information' : 'Publish New Update') : 'Announcement Details'}
            >
                {isEditing ? (
                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Update Title</label>
                            <input
                                name="title"
                                type="text"
                                required
                                className="w-full px-5 py-3 border border-gray-100 rounded-2xl focus:shadow-lg focus:shadow-[#005382]/5 outline-none font-outfit bg-gray-50/30"
                                defaultValue={selectedUpdate?.title}
                                placeholder="Enter title of the update"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Category</label>
                                <select
                                    name="category"
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl focus:shadow-lg focus:shadow-[#005382]/5 outline-none font-outfit bg-white"
                                    defaultValue={selectedUpdate?.category}
                                >
                                    <option>General News</option>
                                    <option>Temple</option>
                                    <option>Hospital</option>
                                    <option>Satsang</option>
                                    <option>Event</option>
                                    <option>Announcement</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Publication Date</label>
                                <input
                                    name="date"
                                    type="date"
                                    required
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl focus:shadow-lg focus:shadow-[#005382]/5 outline-none font-outfit bg-white"
                                    defaultValue={selectedUpdate?.date}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Location / Venue</label>
                            <input
                                name="location"
                                type="text"
                                required
                                className="w-full px-5 py-3 border border-gray-100 rounded-2xl focus:shadow-lg focus:shadow-[#005382]/5 outline-none font-outfit bg-gray-50/30"
                                defaultValue={selectedUpdate?.location}
                                placeholder="e.g. Ahmedabad, India"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Detailed Description</label>
                            <textarea
                                name="description"
                                rows={4}
                                required
                                className="w-full px-5 py-3 border border-gray-100 rounded-2xl focus:shadow-lg focus:shadow-[#005382]/5 outline-none resize-none font-outfit bg-gray-50/30"
                                defaultValue={selectedUpdate?.description}
                                placeholder="Describe the update in detail..."
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Cover Image</label>
                            <div className="flex items-center gap-6 p-4 border border-gray-100 rounded-[24px] bg-gray-50/30">
                                <img src={selectedUpdate?.image} alt="" className="w-24 h-24 rounded-2xl object-cover shadow-md" />
                                <div className="space-y-2">
                                    <button type="button" className="px-5 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold font-outfit shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
                                        <ImageIcon size={14} className="text-[#E21E25]" /> Change Image
                                    </button>
                                    <p className="text-[10px] text-gray-400 font-outfit uppercase tracking-tighter">Recommended size: 1200x800px</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="px-8 py-3 text-gray-400 font-bold font-outfit hover:text-gray-600 transition-colors"
                            >
                                Discard
                            </button>
                            <button
                                type="submit"
                                className="px-10 py-4 bg-[#005382] text-white rounded-2xl font-bold hover:bg-[#004269] font-outfit shadow-xl shadow-blue-100 flex items-center gap-2"
                            >
                                {selectedUpdate?.id ? 'Save Changes' : 'Publish Update'}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-8">
                        <div className="relative h-72 w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src={selectedUpdate?.image}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="flex items-center gap-3">
                                    <span className="px-4 py-2 bg-[#E21E25] text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                                        {selectedUpdate?.category}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 space-y-6">
                            <h2 className="text-4xl font-katibeh text-[#005382] leading-tight">{selectedUpdate?.title}</h2>

                            <div className="flex flex-wrap items-center gap-8 text-xs font-bold font-outfit text-gray-400 uppercase tracking-widest">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#E21E25]">
                                        <Calendar size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] text-gray-300">Date Published</p>
                                        <p className="text-gray-600">
                                            {selectedUpdate?.date && new Date(selectedUpdate.date).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#005382]">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] text-gray-300">Location</p>
                                        <p className="text-gray-600">{selectedUpdate?.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-[#FDFCFB] rounded-[40px] border border-[#F4F1EE] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#005382]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                                <p className="text-lg leading-relaxed text-gray-700 font-outfit relative z-10">
                                    {selectedUpdate?.description}
                                </p>
                            </div>

                            <div className="pt-4 flex gap-4">
                                <button
                                    onClick={() => selectedUpdate && handleEdit(selectedUpdate)}
                                    className="flex-1 py-4 bg-[#005382] text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-[#004269] transition-all"
                                >
                                    <Edit2 size={20} /> Edit Announcement
                                </button>
                                <button
                                    onClick={() => selectedUpdate && handleDelete(selectedUpdate.id)}
                                    className="py-4 px-6 bg-red-50 text-[#E21E25] rounded-2xl font-bold flex items-center justify-center hover:bg-red-100 transition-all border border-red-100"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
