import { useState } from 'react';
import { Plus, BookOpen, FileText, Search, Edit2, Trash2, Calendar, User, Eye, Tag } from 'lucide-react';
import Modal from '../../components/Modal';
import type { SatsangArticle } from '../../types/admin';

const mockSatsang: SatsangArticle[] = [
    {
        id: 1,
        title: 'Understanding Vachanamrut - Part 1',
        type: 'Reading Material',
        author: 'Sadhu Mandal',
        date: '2025-01-25',
        description: 'An in-depth look at the spiritual principles designed for daily life and spiritual progress.',
        content: 'Detailed content about Vachanamrut principles...',
        image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Daily Wisdom: The Power of Faith',
        type: '5-Minute Satsang',
        author: 'P.P. Swamiji',
        date: '2025-01-30',
        description: 'A short, powerful message about maintaining faith during challenging times.',
        content: 'Detailed daily wisdom content...',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop'
    },
];

export default function SatsangManager() {
    const [articles, setArticles] = useState<SatsangArticle[]>(mockSatsang);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedArticle, setSelectedArticle] = useState<SatsangArticle | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleView = (article: SatsangArticle) => {
        setSelectedArticle(article);
        setIsEditing(false);
        setIsModalOpen(true);
    };

    const handleEdit = (article: SatsangArticle) => {
        setSelectedArticle(article);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedArticle({
            id: 0,
            title: '',
            type: 'Reading Material',
            author: '',
            date: new Date().toISOString().split('T')[0],
            description: '',
            content: '',
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop'
        });
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this article?')) {
            setArticles(articles.filter(a => a.id !== id));
            setIsModalOpen(false);
        }
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedArticle) return;

        const formData = new FormData(e.target as HTMLFormElement);
        const newData: SatsangArticle = {
            id: selectedArticle.id || Math.max(...articles.map(a => a.id), 0) + 1,
            title: formData.get('title') as string,
            type: formData.get('type') as string,
            author: formData.get('author') as string,
            date: formData.get('date') as string,
            description: formData.get('description') as string,
            content: formData.get('content') as string,
            image: selectedArticle.image
        };

        if (selectedArticle.id) {
            setArticles(articles.map(a => a.id === selectedArticle.id ? newData : a));
        } else {
            setArticles([newData, ...articles]);
        }
        setIsModalOpen(false);
    };

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-katibeh text-[#005382]">Satsang Material</h1>
                    <p className="text-gray-500 font-outfit mt-1">Manage articles, reading material, and 5-minute satsang</p>
                </div>
                <button
                    onClick={handleAdd}
                    className="px-6 py-3 bg-[#E21E25] text-white rounded-2xl hover:bg-[#c41920] flex items-center gap-2 font-outfit font-bold transition-all shadow-lg shadow-red-100 hover:-translate-y-0.5"
                >
                    <Plus size={20} />
                    New Article
                </button>
            </div>

            {/* Content Filters */}
            <div className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm">
                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by title, author or content..."
                        className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005382]/10 focus:border-[#005382] font-outfit bg-gray-50/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Content Categories Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Reading Material Column */}
                <div
                    className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm flex flex-col"
                >
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-blue-50 text-[#005382] rounded-[22px] shadow-inner">
                                <BookOpen size={28} />
                            </div>
                            <h2 className="text-3xl font-katibeh text-[#005382]">Reading Material</h2>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit px-3 py-1 bg-gray-50 rounded-full">
                            {filteredArticles.filter(a => a.type === 'Reading Material').length} Items
                        </span>
                    </div>

                    <div className="space-y-6 flex-1">
                        {filteredArticles.filter(a => a.type === 'Reading Material').map(article => (
                            <div
                                key={article.id}
                                className="p-7 border border-gray-50 rounded-[35px] hover:bg-gray-50 transition-all group relative cursor-pointer"
                                onClick={() => handleView(article)}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-gray-800 font-outfit group-hover:text-[#E21E25] transition-colors line-clamp-1">{article.title}</h3>
                                    <span className="shrink-0 ml-4"><Tag size={14} className="text-[#005382] opacity-20" /></span>
                                </div>
                                <p className="text-sm text-gray-500 font-outfit line-clamp-2 leading-relaxed mb-6 italic">"{article.description}"</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 font-outfit uppercase tracking-widest">
                                        <span className="flex items-center gap-2"><User size={14} className="text-[#E21E25]" /> {article.author}</span>
                                        <span className="flex items-center gap-2"><Calendar size={14} className="text-[#005382]" /> {new Date(article.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={(e) => { e.stopPropagation(); handleEdit(article); }} className="p-2 text-blue-600 hover:bg-white rounded-xl shadow-sm"><Edit2 size={16} /></button>
                                        <button onClick={(e) => { e.stopPropagation(); handleDelete(article.id); }} className="p-2 text-red-600 hover:bg-white rounded-xl shadow-sm"><Trash2 size={16} /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5-Minute Satsang Column */}
                <div
                    className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm flex flex-col"
                >
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-red-50 text-[#E21E25] rounded-[22px] shadow-inner">
                                <FileText size={28} />
                            </div>
                            <h2 className="text-3xl font-katibeh text-[#005382]">5-Minute Satsang</h2>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit px-3 py-1 bg-gray-50 rounded-full">
                            {filteredArticles.filter(a => a.type === '5-Minute Satsang').length} Items
                        </span>
                    </div>

                    <div className="space-y-6 flex-1">
                        {filteredArticles.filter(a => a.type === '5-Minute Satsang').map(article => (
                            <div
                                key={article.id}
                                className="flex gap-6 p-6 border border-gray-50 rounded-[35px] hover:bg-gray-50 transition-all group relative cursor-pointer items-center"
                                onClick={() => handleView(article)}
                            >
                                <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-[25px] overflow-hidden shadow-inner">
                                    <img src={article.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-gray-800 font-outfit mb-2 group-hover:text-[#E21E25] transition-colors truncate">{article.title}</h3>
                                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 font-outfit uppercase tracking-widest mb-4">
                                        <span className="flex items-center gap-1.5"><User size={12} className="text-[#E21E25]" /> {article.author}</span>
                                        <span className="flex items-center gap-1.5"> {new Date(article.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <button onClick={(e) => { e.stopPropagation(); handleView(article); }} className="text-[10px] font-bold text-[#005382] hover:text-[#E21E25] uppercase tracking-widest flex items-center gap-1">Read <Eye size={12} /></button>
                                        <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={(e) => { e.stopPropagation(); handleEdit(article); }} className="text-blue-600 hover:text-blue-800"><Edit2 size={14} /></button>
                                            <button onClick={(e) => { e.stopPropagation(); handleDelete(article.id); }} className="text-red-600 hover:text-red-800"><Trash2 size={14} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Article Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={isEditing ? (selectedArticle?.id ? 'Edit Spiritual Article' : 'Publish New Wisdom') : 'Satsang Resource Details'}
            >
                {isEditing ? (
                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Article Title</label>
                                <input
                                    name="title"
                                    type="text"
                                    required
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-gray-50/30 font-bold"
                                    defaultValue={selectedArticle?.title}
                                    placeholder="Enter Title"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Satsang Type</label>
                                <select
                                    name="type"
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-medium"
                                    defaultValue={selectedArticle?.type}
                                >
                                    <option>Reading Material</option>
                                    <option>5-Minute Satsang</option>
                                    <option>Video Message</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Author / Speaker</label>
                                <input
                                    name="author"
                                    type="text"
                                    required
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-medium"
                                    defaultValue={selectedArticle?.author}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Publish Date</label>
                                <input
                                    name="date"
                                    type="date"
                                    required
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-medium"
                                    defaultValue={selectedArticle?.date}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Short Summary</label>
                            <input
                                name="description"
                                type="text"
                                required
                                className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-gray-50/30 font-medium"
                                defaultValue={selectedArticle?.description}
                                placeholder="A brief catch-phrase for the article"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Detailed Content</label>
                            <textarea
                                name="content"
                                rows={8}
                                required
                                className="w-full px-6 py-4 border border-gray-100 rounded-[30px] outline-none resize-none font-outfit bg-gray-50/30 font-medium leading-relaxed"
                                defaultValue={selectedArticle?.content}
                                placeholder="Write the main message here..."
                            />
                        </div>

                        <div className="pt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="px-8 py-3 text-gray-400 font-bold font-outfit hover:text-gray-600 transition-colors uppercase tracking-widest text-[10px]"
                            >
                                Discard
                            </button>
                            <button
                                type="submit"
                                className="px-10 py-4 bg-[#005382] text-white rounded-2xl font-bold hover:bg-[#004269] font-outfit shadow-xl shadow-blue-100"
                            >
                                {selectedArticle?.id ? 'Update Content' : 'Publish to Portal'}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-8 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
                        <div className="relative h-72 w-full rounded-[40px] overflow-hidden shadow-2xl group">
                            <img
                                src={selectedArticle?.image}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                                <div>
                                    <span className="px-4 py-1.5 bg-[#E21E25] text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 inline-block shadow-lg">
                                        {selectedArticle?.type}
                                    </span>
                                    <h2 className="text-4xl font-katibeh text-white leading-tight">{selectedArticle?.title}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 space-y-8">
                            <div className="flex flex-wrap items-center gap-10 text-[11px] font-bold font-outfit text-gray-400 uppercase tracking-widest">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center text-[#E21E25] shadow-sm">
                                        <User size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] text-gray-300">Written By</p>
                                        <p className="text-[#005382]">{selectedArticle?.author}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#005382] shadow-sm">
                                        <Calendar size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] text-gray-300">Publish Date</p>
                                        <p className="text-[#005382]">{selectedArticle?.date && new Date(selectedArticle.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 bg-[#FDFCFB] rounded-[50px] border border-[#F4F1EE] relative">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#E21E25]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                                <p className="text-gray-500 font-outfit font-bold italic mb-8 text-xl border-l-4 border-[#E21E25] pl-6 leading-relaxed">
                                    "{selectedArticle?.description}"
                                </p>
                                <div className="prose prose-lg prose-blue max-w-none font-outfit text-gray-700 leading-loose space-y-6 relative z-10">
                                    {selectedArticle?.content}
                                </div>
                            </div>

                            <div className="flex gap-4 pb-4">
                                <button
                                    onClick={() => selectedArticle && handleEdit(selectedArticle)}
                                    className="flex-1 py-4 bg-[#005382] text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-[#004269] transition-all"
                                >
                                    <Edit2 size={20} /> Edit Material
                                </button>
                                <button
                                    onClick={() => selectedArticle && handleDelete(selectedArticle.id)}
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
