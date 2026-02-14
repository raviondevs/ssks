import { useState } from 'react';
import { Plus, Video, Trash2, Search, Edit2, Play, Eye, Clock } from 'lucide-react';
import Modal from '../../components/Modal';
import type { Video as VideoType } from '../../types/admin';

const mockVideos: VideoType[] = [
    {
        id: 1,
        title: 'Morning Aarti Session',
        duration: '15:24',
        category: 'Rituals',
        thumbnail: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&auto=format&fit=crop',
        description: 'Complete morning aarti ritual performed by Sadhu Mandal.',
        videoUrl: 'https://www.youtube.com/watch?v=example1'
    },
    {
        id: 2,
        title: 'Youth Discourse: Focus',
        duration: '45:10',
        category: 'Discourse',
        thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
        description: 'P.P. Swamiji explains how to maintain spiritual focus in the digital age.',
        videoUrl: 'https://www.youtube.com/watch?v=example2'
    },
];

export default function VideosManager() {
    const [videos, setVideos] = useState<VideoType[]>(mockVideos);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleView = (video: VideoType) => {
        setSelectedVideo(video);
        setIsEditing(false);
        setIsModalOpen(true);
    };

    const handleEdit = (video: VideoType) => {
        setSelectedVideo(video);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedVideo({
            id: 0,
            title: '',
            duration: '00:00',
            category: 'Discourse',
            thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop',
            description: '',
            videoUrl: ''
        });
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this video?')) {
            setVideos(videos.filter(v => v.id !== id));
            setIsModalOpen(false);
        }
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedVideo) return;

        const formData = new FormData(e.target as HTMLFormElement);
        const newData: VideoType = {
            id: selectedVideo.id || Math.max(...videos.map(v => v.id), 0) + 1,
            title: formData.get('title') as string,
            duration: formData.get('duration') as string,
            category: formData.get('category') as string,
            description: formData.get('description') as string,
            videoUrl: formData.get('videoUrl') as string,
            thumbnail: selectedVideo.thumbnail
        };

        if (selectedVideo.id) {
            setVideos(videos.map(v => v.id === selectedVideo.id ? newData : v));
        } else {
            setVideos([newData, ...videos]);
        }
        setIsModalOpen(false);
    };

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-katibeh text-[#005382]">Video Library</h1>
                    <p className="text-gray-500 font-outfit mt-1">Manage spiritual discourses and ritual videos</p>
                </div>
                <button
                    onClick={handleAdd}
                    className="px-6 py-3 bg-[#E21E25] text-white rounded-2xl hover:bg-[#c41920] flex items-center gap-2 font-outfit font-bold transition-all shadow-lg shadow-red-100"
                >
                    <Plus size={20} />
                    Upload Video
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm">
                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by title or category..."
                        className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005382]/10 focus:border-[#005382] font-outfit bg-gray-50/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Video List */}
            <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden" style={{ boxShadow: '8px 8px 0px 0px #005382' }}>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-8 py-6 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Media</th>
                            <th className="px-8 py-6 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Details</th>
                            <th className="px-8 py-6 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Duration</th>
                            <th className="px-8 py-6 text-right text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {filteredVideos.map((video) => (
                            <tr key={video.id} className="hover:bg-gray-50/80 transition-all group">
                                <td className="px-8 py-6">
                                    <div className="w-40 h-24 rounded-2xl overflow-hidden relative shadow-md group-hover:scale-105 transition-transform">
                                        <img src={video.thumbnail} alt="" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Play size={24} className="text-white fill-current" />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <h3 className="text-lg font-bold text-gray-800 font-outfit mb-1 group-hover:text-[#E21E25] transition-colors">{video.title}</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1 bg-red-50 text-[#E21E25] rounded-full text-[10px] font-bold uppercase tracking-widest">{video.category}</span>
                                        <span className="text-xs text-gray-400 font-outfit truncate max-w-[200px]">{video.videoUrl}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-xl text-xs font-bold text-gray-600 font-outfit">
                                        <Clock size={14} /> {video.duration}
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => handleView(video)} className="p-3 text-[#005382] hover:bg-white rounded-xl transition-colors shadow-sm"><Eye size={20} /></button>
                                        <button onClick={() => handleEdit(video)} className="p-3 text-blue-600 hover:bg-white rounded-xl transition-colors shadow-sm"><Edit2 size={20} /></button>
                                        <button onClick={() => handleDelete(video.id)} className="p-3 text-red-600 hover:bg-white rounded-xl transition-colors shadow-sm"><Trash2 size={20} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Video Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={isEditing ? (selectedVideo?.id ? 'Adjust Media Specifications' : 'Onboard New Video Media') : 'Media Content Insight'}
            >
                {isEditing ? (
                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Video Title</label>
                            <input
                                name="title"
                                type="text"
                                required
                                className="w-full px-5 py-4 border border-gray-100 rounded-2xl outline-none font-outfit bg-gray-50/30 font-bold"
                                defaultValue={selectedVideo?.title}
                                placeholder="Formal title for the media portal"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Categorization</label>
                                <select
                                    name="category"
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-medium"
                                    defaultValue={selectedVideo?.category}
                                >
                                    <option>Rituals</option>
                                    <option>Discourse</option>
                                    <option>Kirtan</option>
                                    <option>Youth</option>
                                    <option>Festival Highlights</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Time Duration</label>
                                <input
                                    name="duration"
                                    type="text"
                                    required
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-medium"
                                    defaultValue={selectedVideo?.duration}
                                    placeholder="HH:MM:SS"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Live Streaming / Video Link</label>
                            <input
                                name="videoUrl"
                                type="url"
                                required
                                className="w-full px-5 py-4 border border-gray-100 rounded-2xl outline-none font-outfit bg-gray-50/30 font-medium"
                                defaultValue={selectedVideo?.videoUrl}
                                placeholder="YouTube, Vimeo or Direct URL"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Video Description</label>
                            <textarea
                                name="description"
                                rows={3}
                                required
                                className="w-full px-5 py-4 border border-gray-100 rounded-[25px] outline-none resize-none font-outfit bg-gray-50/30 font-medium leading-relaxed"
                                defaultValue={selectedVideo?.description}
                                placeholder="Write a short summary about the video content..."
                            />
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
                                {selectedVideo?.id ? 'Update Asset' : 'Commit Media'}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-10">
                        <div className="relative group overflow-hidden rounded-[50px] shadow-2xl">
                            <img
                                src={selectedVideo?.thumbnail}
                                alt=""
                                className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                                    <Play size={40} className="text-[#E21E25] fill-current ml-2" />
                                </div>
                            </div>
                            <div className="absolute top-6 left-6 flex gap-3">
                                <span className="px-4 py-1.5 bg-[#005382] text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                                    {selectedVideo?.category}
                                </span>
                                <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-[#E21E25] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                                    {selectedVideo?.duration}
                                </span>
                            </div>
                        </div>

                        <div className="px-6 space-y-8">
                            <div>
                                <h2 className="text-5xl font-katibeh text-[#005382] leading-tight mb-4">{selectedVideo?.title}</h2>
                                <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100">
                                    <p className="text-gray-700 font-outfit leading-loose text-lg font-medium italic">
                                        "{selectedVideo?.description}"
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-sm font-outfit font-bold text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Video size={18} className="text-[#E21E25]" /> Stream URL:
                                    </div>
                                    <span className="text-[#005382] underline truncate flex-1">{selectedVideo?.videoUrl}</span>
                                </div>
                                <div className="flex gap-4 pb-4">
                                    <button
                                        onClick={() => selectedVideo && handleEdit(selectedVideo)}
                                        className="flex-1 py-4 bg-[#005382] text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-[#004269] transition-all"
                                    >
                                        <Edit2 size={20} /> Update Metadata
                                    </button>
                                    <button
                                        onClick={() => selectedVideo && handleDelete(selectedVideo.id)}
                                        className="px-8 py-4 bg-red-50 text-[#E21E25] rounded-2xl font-bold flex items-center justify-center hover:bg-red-100 transition-all border border-red-100"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
