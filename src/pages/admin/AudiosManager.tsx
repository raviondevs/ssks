import { useState } from 'react';
import { Plus, Music, Trash2, Search, Edit2, Play, Eye, Clock, User, Headphones } from 'lucide-react';
import Modal from '../../components/Modal';
import type { Audio } from '../../types/admin';

const mockAudios: Audio[] = [
    {
        id: 1,
        title: 'Prabhatiya Collection',
        duration: '32:15',
        artist: 'Various Saints',
        category: 'Kirtan',
        audioUrl: 'https://example.com/audio1.mp3'
    },
    {
        id: 2,
        title: 'Evening Dhun',
        duration: '15:00',
        artist: 'Swaminarayan Mandal',
        category: 'Dhun',
        audioUrl: 'https://example.com/audio2.mp3'
    },
];

export default function AudiosManager() {
    const [audios, setAudios] = useState<Audio[]>(mockAudios);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAudio, setSelectedAudio] = useState<Audio | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleView = (audio: Audio) => {
        setSelectedAudio(audio);
        setIsEditing(false);
        setIsModalOpen(true);
    };

    const handleEdit = (audio: Audio) => {
        setSelectedAudio(audio);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedAudio({
            id: 0,
            title: '',
            duration: '00:00',
            artist: '',
            category: 'Kirtan',
            audioUrl: ''
        });
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this audio?')) {
            setAudios(audios.filter(a => a.id !== id));
            setIsModalOpen(false);
        }
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedAudio) return;

        const formData = new FormData(e.target as HTMLFormElement);
        const newData: Audio = {
            id: selectedAudio.id || Math.max(...audios.map(a => a.id), 0) + 1,
            title: formData.get('title') as string,
            duration: formData.get('duration') as string,
            artist: formData.get('artist') as string,
            category: formData.get('category') as string,
            audioUrl: formData.get('audioUrl') as string,
        };

        if (selectedAudio.id) {
            setAudios(audios.map(a => a.id === selectedAudio.id ? newData : a));
        } else {
            setAudios([newData, ...audios]);
        }
        setIsModalOpen(false);
    };

    const filteredAudios = audios.filter(audio =>
        audio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        audio.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-katibeh text-[#005382]">Audio Discography</h1>
                    <p className="text-gray-500 font-outfit mt-1">Manage kirtans, dhuns, and spiritual audio tracks</p>
                </div>
                <button
                    onClick={handleAdd}
                    className="px-6 py-3 bg-[#E21E25] text-white rounded-2xl hover:bg-[#c41920] flex items-center gap-2 font-outfit font-bold transition-all shadow-lg shadow-red-100"
                >
                    <Plus size={20} />
                    New Audio
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm">
                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by title or artist..."
                        className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005382]/10 focus:border-[#005382] font-outfit bg-gray-50/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Audio Table */}
            <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden" style={{ boxShadow: '8px 8px 0px 0px #005382' }}>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-8 py-6 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Track</th>
                            <th className="px-8 py-6 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Artist / Category</th>
                            <th className="px-8 py-6 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Duration</th>
                            <th className="px-8 py-6 text-right text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {filteredAudios.map((audio) => (
                            <tr key={audio.id} className="hover:bg-gray-50/80 transition-all group">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 bg-red-50 text-[#E21E25] rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                            <Play size={24} className="group-hover:fill-[#E21E25]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800 font-outfit group-hover:text-[#E21E25] transition-colors">{audio.title}</h3>
                                            <p className="text-xs text-gray-400 font-outfit truncate max-w-[200px]">{audio.audioUrl}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-sm font-bold text-[#005382] font-outfit">
                                            <User size={14} className="text-[#E21E25]" /> {audio.artist}
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{audio.category}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-xl text-xs font-bold text-gray-600 font-outfit">
                                        <Clock size={14} /> {audio.duration}
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => handleView(audio)} className="p-3 text-[#005382] hover:bg-white rounded-xl transition-colors shadow-sm"><Eye size={20} /></button>
                                        <button onClick={() => handleEdit(audio)} className="p-3 text-blue-600 hover:bg-white rounded-xl transition-colors shadow-sm"><Edit2 size={20} /></button>
                                        <button onClick={() => handleDelete(audio.id)} className="p-3 text-red-600 hover:bg-white rounded-xl transition-colors shadow-sm"><Trash2 size={20} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Audio Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={isEditing ? (selectedAudio?.id ? 'Edit Track Information' : 'Onboard New Spiritual Track') : 'Audio Presentation'}
            >
                {isEditing ? (
                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Track Title</label>
                            <input
                                name="title"
                                type="text"
                                required
                                className="w-full px-5 py-4 border border-gray-100 rounded-2xl outline-none font-outfit bg-gray-50/30 font-bold"
                                defaultValue={selectedAudio?.title}
                                placeholder="Formal title for the audio track"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Artist / Mandir</label>
                                <input
                                    name="artist"
                                    type="text"
                                    required
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-medium"
                                    defaultValue={selectedAudio?.artist}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Categorization</label>
                                <select
                                    name="category"
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-medium"
                                    defaultValue={selectedAudio?.category}
                                >
                                    <option>Kirtan</option>
                                    <option>Dhun</option>
                                    <option>Prayer</option>
                                    <option>Instrumental</option>
                                    <option>Youth Session</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Time Duration</label>
                                <input
                                    name="duration"
                                    type="text"
                                    required
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-medium"
                                    defaultValue={selectedAudio?.duration}
                                    placeholder="HH:MM:SS"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Source URL</label>
                                <input
                                    name="audioUrl"
                                    type="url"
                                    required
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-medium"
                                    defaultValue={selectedAudio?.audioUrl}
                                    placeholder="Direct MP3 or Streaming Link"
                                />
                            </div>
                        </div>
                        <div className="pt-4 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="px-8 py-3 text-gray-400 font-bold font-outfit hover:text-gray-600 transition-colors uppercase tracking-widest text-[10px]"
                            >
                                Discard
                            </button>
                            <button
                                type="submit"
                                className="px-10 py-4 bg-[#E21E25] text-white rounded-2xl font-bold hover:bg-[#c41920] font-outfit shadow-xl shadow-red-100"
                            >
                                {selectedAudio?.id ? 'Update Asset' : 'Commit Audio'}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-10">
                        <div className="bg-gradient-to-br from-[#005382] to-[#002B45] p-12 rounded-[50px] text-white flex flex-col items-center text-center shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

                            <div className="w-40 h-40 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8 border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                <Headphones size={80} className="text-white opacity-80" />
                            </div>

                            <div className="relative z-10">
                                <span className="px-4 py-1.5 bg-[#E21E25] text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 inline-block shadow-lg">
                                    {selectedAudio?.category}
                                </span>
                                <h1 className="text-5xl font-katibeh mb-3">{selectedAudio?.title}</h1>
                                <p className="text-blue-100 font-outfit font-bold uppercase tracking-widest text-sm mb-10">{selectedAudio?.artist}</p>

                                {/* Simulated Player Controls */}
                                <div className="space-y-6 w-full max-w-md">
                                    <div className="flex items-center gap-10 justify-center">
                                        <div className="text-white/40"><Play size={24} className="rotate-180" /></div>
                                        <div className="w-20 h-20 bg-[#E21E25] rounded-full flex items-center justify-center shadow-xl shadow-red-900/40 cursor-pointer active:scale-90 transition-transform">
                                            <Play size={32} className="fill-current ml-1" />
                                        </div>
                                        <div className="text-white/40"><Play size={24} /></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-white w-[35%] transition-all" />
                                        </div>
                                        <div className="flex justify-between text-[10px] font-bold font-outfit text-white/40 uppercase tracking-widest">
                                            <span>05:32</span>
                                            <span>{selectedAudio?.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-8 space-y-6">
                            <div className="flex items-center gap-4 text-sm font-outfit font-bold text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Music size={18} className="text-[#E21E25]" /> Source URL:
                                </div>
                                <span className="text-[#005382] underline truncate flex-1">{selectedAudio?.audioUrl}</span>
                            </div>
                            <div className="flex gap-4 pb-4">
                                <button
                                    onClick={() => selectedAudio && handleEdit(selectedAudio)}
                                    className="flex-1 py-4 bg-[#005382] text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-[#004269] transition-all"
                                >
                                    <Edit2 size={20} /> Update Information
                                </button>
                                <button
                                    onClick={() => selectedAudio && handleDelete(selectedAudio.id)}
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
