import { useState } from 'react';
import { Plus, Trash2, MapPin, Calendar, Clock, Search, Edit2, Users, Tag } from 'lucide-react';
import Modal from '../../components/Modal';
import type { Event } from '../../types/admin';

const mockEvents: Event[] = [
    {
        id: 1,
        title: 'Sharad Purnima Mahotsav',
        date: '2025-10-16',
        time: '18:00',
        location: 'Main Temple Hall',
        category: 'Festival',
        attendees: 250,
        description: 'A grand celebration of Sharad Purnima with devotional songs, spiritual discourses, and distribution of special prasad.',
        image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Diwali Annakut',
        date: '2025-11-01',
        time: '08:00',
        location: 'Temple Grounds',
        category: 'Celebration',
        attendees: 1200,
        description: 'Join us for the magnificent Annakut celebration where hundreds of varieties of food items are offered to the Lord.',
        image: 'https://images.unsplash.com/photo-1582213713531-f08cb46e04ee?w=800&auto=format&fit=crop'
    },
];

export default function EventsManager() {
    const [events, setEvents] = useState<Event[]>(mockEvents);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleView = (event: Event) => {
        setSelectedEvent(event);
        setIsEditing(false);
        setIsModalOpen(true);
    };

    const handleEdit = (event: Event) => {
        setSelectedEvent(event);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedEvent({
            id: 0,
            title: '',
            date: new Date().toISOString().split('T')[0],
            time: '09:00',
            location: '',
            category: 'Festival',
            description: '',
            attendees: 0,
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop'
        });
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            setEvents(events.filter(e => e.id !== id));
            setIsModalOpen(false);
        }
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedEvent) return;

        const formData = new FormData(e.target as HTMLFormElement);
        const newData: Event = {
            id: selectedEvent.id || Math.max(...events.map(ev => ev.id), 0) + 1,
            title: formData.get('title') as string,
            date: formData.get('date') as string,
            time: formData.get('time') as string,
            location: formData.get('location') as string,
            category: formData.get('category') as string,
            description: formData.get('description') as string,
            attendees: Number(formData.get('attendees')),
            image: selectedEvent.image
        };

        if (selectedEvent.id) {
            setEvents(events.map(ev => ev.id === selectedEvent.id ? newData : ev));
        } else {
            setEvents([newData, ...events]);
        }
        setIsModalOpen(false);
    };

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-katibeh text-[#005382]">Events Management</h1>
                    <p className="text-gray-500 font-outfit mt-1">Schedule and manage upcoming events for the community</p>
                </div>
                <button
                    onClick={handleAdd}
                    className="px-6 py-3 bg-[#E21E25] text-white rounded-2xl hover:bg-[#c41920] flex items-center gap-2 font-outfit font-bold transition-all shadow-lg shadow-red-100"
                >
                    <Plus size={20} />
                    Create New Event
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm">
                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search events by title or location..."
                        className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005382]/10 focus:border-[#005382] font-outfit bg-gray-50/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Event Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white rounded-[40px] border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col"
                        style={{ boxShadow: '8px 8px 0px 0px #005382' }}
                    >
                        <div className="h-56 bg-gray-100 relative overflow-hidden shrink-0">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-[#005382] uppercase tracking-widest shadow-sm flex items-center gap-1.5 border border-white/50">
                                <Tag size={12} className="text-[#E21E25]" />
                                {event.category}
                            </div>
                            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                <Users size={12} className="text-white" />
                                {event.attendees} Registered
                            </div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-katibeh text-[#005382] mb-4 group-hover:text-[#E21E25] transition-colors leading-tight min-h-[3.5rem]">
                                {event.title}
                            </h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2.5 text-xs font-bold font-outfit text-gray-400 uppercase tracking-wider">
                                    <Calendar size={16} className="text-[#E21E25]" />
                                    {new Date(event.date).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
                                </div>
                                <div className="flex items-center gap-2.5 text-xs font-bold font-outfit text-gray-400 uppercase tracking-wider">
                                    <Clock size={16} className="text-[#005382]" />
                                    {event.time}
                                </div>
                                <div className="flex items-center gap-2.5 text-xs font-bold font-outfit text-gray-400 uppercase tracking-wider">
                                    <MapPin size={16} className="text-[#005382]" />
                                    {event.location}
                                </div>
                            </div>

                            <div className="mt-auto pt-6 border-t border-gray-50 flex gap-3">
                                <button
                                    onClick={() => handleView(event)}
                                    className="flex-1 py-3 bg-gray-50 text-[#005382] hover:bg-white rounded-2xl text-xs font-bold transition-all border border-gray-100 hover:border-[#005382]/20 font-outfit uppercase tracking-widest"
                                >
                                    View Details
                                </button>
                                <button
                                    onClick={() => handleEdit(event)}
                                    className="p-3 text-blue-600 hover:bg-blue-50 rounded-2xl transition-all border border-transparent hover:border-blue-100"
                                >
                                    <Edit2 size={20} />
                                </button>
                                <button
                                    onClick={() => handleDelete(event.id)}
                                    className="p-3 text-red-600 hover:bg-red-50 rounded-2xl transition-all border border-transparent hover:border-red-100"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Event Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={isEditing ? (selectedEvent?.id ? 'Modify Event Schedule' : 'Create New Event') : 'Event Information'}
            >
                {isEditing ? (
                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 font-outfit uppercase tracking-wider">Event Title</label>
                                <input
                                    name="title"
                                    type="text"
                                    required
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl focus:shadow-lg focus:shadow-[#005382]/5 outline-none font-outfit bg-gray-50/30"
                                    defaultValue={selectedEvent?.title}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 font-outfit uppercase tracking-wider">Category</label>
                                <select
                                    name="category"
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl focus:shadow-lg focus:shadow-[#005382]/5 outline-none font-outfit bg-white"
                                    defaultValue={selectedEvent?.category}
                                >
                                    <option>Festival</option>
                                    <option>Celebration</option>
                                    <option>Seminar</option>
                                    <option>Sports</option>
                                    <option>Youth Meet</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 font-outfit uppercase tracking-wider">Date</label>
                                <input
                                    name="date"
                                    type="date"
                                    required
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl focus:shadow-lg focus:shadow-[#005382]/5 outline-none font-outfit bg-gray-50/30"
                                    defaultValue={selectedEvent?.date}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 font-outfit uppercase tracking-wider">Time</label>
                                <input
                                    name="time"
                                    type="time"
                                    required
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl focus:shadow-lg focus:shadow-[#005382]/5 outline-none font-outfit bg-gray-50/30"
                                    defaultValue={selectedEvent?.time}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 font-outfit uppercase tracking-wider">Target Attendees</label>
                                <input
                                    name="attendees"
                                    type="number"
                                    required
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl focus:shadow-lg focus:shadow-[#005382]/5 outline-none font-outfit bg-gray-50/30"
                                    defaultValue={selectedEvent?.attendees}
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700 font-outfit uppercase tracking-wider">Location</label>
                            <input
                                name="location"
                                type="text"
                                required
                                className="w-full px-5 py-3 border border-gray-100 rounded-2xl focus:shadow-lg focus:shadow-[#005382]/5 outline-none font-outfit bg-gray-50/30"
                                defaultValue={selectedEvent?.location}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700 font-outfit uppercase tracking-wider">Full Description</label>
                            <textarea
                                name="description"
                                rows={4}
                                required
                                className="w-full px-5 py-3 border border-gray-100 rounded-2xl focus:shadow-lg focus:shadow-[#005382]/5 outline-none resize-none font-outfit bg-gray-50/30"
                                defaultValue={selectedEvent?.description}
                            />
                        </div>
                        <div className="pt-4 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="px-8 py-3 bg-white text-gray-500 rounded-2xl font-bold border border-gray-100 font-outfit font-outfit tracking-widest uppercase text-[10px]"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-10 py-3 bg-[#E21E25] text-white rounded-2xl font-bold hover:bg-[#c41920] font-outfit shadow-xl shadow-red-100 transition-all active:scale-95 uppercase tracking-widest text-[10px]"
                            >
                                {selectedEvent?.id ? 'Update Event' : 'Create Event'}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                        <div className="relative group">
                            <img
                                src={selectedEvent?.image}
                                alt={selectedEvent?.title}
                                className="w-full h-80 object-cover rounded-[40px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-6 py-2 rounded-2xl text-xs font-bold text-[#E21E25] uppercase tracking-[0.2em] shadow-xl border border-white">
                                {selectedEvent?.category}
                            </div>
                        </div>

                        <div className="space-y-8 px-4">
                            <div>
                                <h2 className="text-5xl font-katibeh text-[#005382] leading-tight mb-4">{selectedEvent?.title}</h2>
                                <div className="flex flex-wrap items-center gap-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#E21E25] shadow-sm">
                                            <Calendar size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Date</p>
                                            <p className="font-bold text-[#005382] font-outfit">
                                                {selectedEvent?.date && new Date(selectedEvent.date).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#005382] shadow-sm">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Time</p>
                                            <p className="font-bold text-[#005382] font-outfit">{selectedEvent?.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#005382] shadow-sm">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Location</p>
                                            <p className="font-bold text-[#005382] font-outfit">{selectedEvent?.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 bg-gray-50 rounded-[50px] border border-gray-100 relative">
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 font-outfit">About this Event</h4>
                                <p className="text-gray-700 font-outfit text-lg leading-relaxed first-letter:text-4xl first-letter:font-katibeh first-letter:text-[#E21E25] first-letter:mr-1">
                                    {selectedEvent?.description}
                                </p>
                            </div>

                            <div className="flex gap-4 pb-4">
                                <button
                                    onClick={() => selectedEvent && handleEdit(selectedEvent)}
                                    className="flex-1 py-4 bg-[#005382] text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-[#004269] transition-all"
                                >
                                    <Edit2 size={20} /> Edit Schedule
                                </button>
                                <button
                                    onClick={() => selectedEvent && handleDelete(selectedEvent.id)}
                                    className="px-8 py-4 bg-red-50 text-[#E21E25] rounded-2xl font-bold flex items-center justify-center hover:bg-red-100 transition-all border border-red-100"
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
