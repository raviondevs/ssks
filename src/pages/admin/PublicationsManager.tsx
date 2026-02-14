import { useState } from 'react';
import { Plus, FileText, Trash2, Search, Edit2, Download, Eye, File, Book, Tag, Monitor, Smartphone } from 'lucide-react';
import Modal from '../../components/Modal';
import type { Publication } from '../../types/admin';

const mockPublications: Publication[] = [
    { id: 1, title: 'Satsang Diksha - Gujarati', format: 'PDF', size: '12.5 MB', date: '2025-01-10', type: 'Book', description: 'The fundamental scripture of the Akshar-Purushottam Darshan.' },
    { id: 2, title: 'Daily Niyam Check-list', format: 'XLSX', size: '1.2 MB', date: '2025-01-20', type: 'Worksheet', description: 'A helpful tracker for daily spiritual practices.' },
    { id: 3, title: 'Youth Seminar Brochure', format: 'PDF', size: '8.4 MB', date: '2025-01-30', type: 'Pamphlet', description: 'Informational brochure for the upcoming youth leadership seminar.' },
];

export default function PublicationsManager() {
    const [publications, setPublications] = useState<Publication[]>(mockPublications);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleView = (pub: Publication) => {
        setSelectedPub(pub);
        setIsEditing(false);
        setIsModalOpen(true);
    };

    const handleEdit = (pub: Publication) => {
        setSelectedPub(pub);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedPub({
            id: 0,
            title: '',
            format: 'PDF',
            size: '0 KB',
            date: new Date().toISOString().split('T')[0],
            type: 'Book',
            description: ''
        });
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this publication?')) {
            setPublications(publications.filter(p => p.id !== id));
            setIsModalOpen(false);
        }
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPub) return;

        const formData = new FormData(e.target as HTMLFormElement);
        const newData: Publication = {
            id: selectedPub.id || Math.max(...publications.map(p => p.id), 0) + 1,
            title: formData.get('title') as string,
            format: formData.get('format') as string,
            type: formData.get('type') as string,
            size: selectedPub.size || '1.0 MB',
            date: formData.get('date') as string,
            description: formData.get('description') as string
        };

        if (selectedPub.id) {
            setPublications(publications.map(p => p.id === selectedPub.id ? newData : p));
        } else {
            setPublications([newData, ...publications]);
        }
        setIsModalOpen(false);
    };

    const filteredPubs = publications.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getFileIcon = (type: string) => {
        switch (type) {
            case 'Book': return <Book size={24} />;
            case 'Worksheet': return <FileText size={24} />;
            default: return <File size={24} />;
        }
    };

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-katibeh text-[#005382]">Community Resources</h1>
                    <p className="text-gray-500 font-outfit mt-1">Manage books, publications, and spiritual study materials</p>
                </div>
                <button
                    onClick={handleAdd}
                    className="px-6 py-3 bg-[#E21E25] text-white rounded-2xl hover:bg-[#c41920] flex items-center gap-2 font-outfit font-bold transition-all shadow-lg shadow-red-100 hover:-translate-y-0.5"
                >
                    <Plus size={20} />
                    Upload Resource
                </button>
            </div>

            {/* General Filters */}
            <div className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm">
                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search books or documents..."
                        className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005382]/10 focus:border-[#005382] font-outfit bg-gray-50/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Resources Display Grid */}
            <div
                className="bg-white rounded-[40px] border border-gray-100 overflow-hidden"
                style={{ boxShadow: '8px 8px 0px 0px #005382' }}
            >
                <div className="divide-y divide-gray-50">
                    {filteredPubs.map((pub) => (
                        <div
                            key={pub.id}
                            className="p-8 flex items-center gap-8 hover:bg-gray-50/50 transition-all group relative cursor-pointer"
                            onClick={() => handleView(pub)}
                        >
                            <div className="shrink-0 relative">
                                <div className="p-6 bg-red-50 text-[#E21E25] rounded-[28px] shadow-sm group-hover:scale-105 group-hover:bg-[#E21E25] group-hover:text-white transition-all duration-500 relative z-10">
                                    {getFileIcon(pub.type)}
                                </div>
                                <div className="absolute inset-0 bg-red-200/20 blur-xl rounded-full scale-0 group-hover:scale-110 transition-transform"></div>
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-4 mb-2 flex-wrap">
                                    <span className="px-3 py-1 bg-[#005382]/5 text-[#005382] rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#005382]/10">
                                        {pub.type}
                                    </span>
                                    <span className="px-3 py-1 bg-gray-50 text-gray-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-gray-100 italic">
                                        {pub.format}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-katibeh text-[#005382] group-hover:text-[#E21E25] transition-colors truncate mb-1">
                                    {pub.title}
                                </h3>
                                <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 font-outfit uppercase tracking-widest mt-3">
                                    <span>Size: {pub.size}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-200" />
                                    <span>Released: {new Date(pub.date).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 z-10">
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleView(pub); }}
                                    className="p-4 text-[#005382] hover:bg-white rounded-2xl transition-all border border-transparent hover:border-blue-50 bg-white/50 shadow-sm"
                                >
                                    <Eye size={20} />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleEdit(pub); }}
                                    className="p-4 text-blue-600 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-blue-50 bg-white/50 shadow-sm"
                                >
                                    <Edit2 size={20} />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleDelete(pub.id); }}
                                    className="p-4 text-red-600 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-red-50 bg-white/50 shadow-sm"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                    {filteredPubs.length === 0 && (
                        <div className="p-20 text-center">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search size={32} className="text-gray-200" />
                            </div>
                            <h3 className="text-2xl font-katibeh text-[#005382]">No Resources Found</h3>
                            <p className="text-gray-400 font-outfit mt-2">Try adjusting your search filters</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Publication Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={isEditing ? (selectedPub?.id ? 'Adjust Resource Specifications' : 'Upload Spiritual Resource') : 'Document Metadata & Access'}
            >
                {isEditing ? (
                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Resource Title</label>
                            <input
                                name="title"
                                type="text"
                                required
                                className="w-full px-5 py-4 border border-gray-100 rounded-2xl outline-none font-outfit bg-gray-50/30 font-bold"
                                defaultValue={selectedPub?.title}
                                placeholder="Formal title of the publication"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Classification</label>
                                <select
                                    name="type"
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-medium"
                                    defaultValue={selectedPub?.type}
                                >
                                    <option>Book</option>
                                    <option>Worksheet</option>
                                    <option>Pamphlet</option>
                                    <option>Magazines</option>
                                    <option>Newsletters</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Digital Format</label>
                                <select
                                    name="format"
                                    className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-medium"
                                    defaultValue={selectedPub?.format}
                                >
                                    <option>PDF</option>
                                    <option>EPUB</option>
                                    <option>XLSX</option>
                                    <option>DOCX</option>
                                    <option>Archive (.zip)</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Resource Context / Description</label>
                            <textarea
                                name="description"
                                rows={3}
                                required
                                className="w-full px-5 py-3 border border-gray-100 rounded-2xl outline-none resize-none font-outfit bg-gray-50/30 font-medium"
                                defaultValue={selectedPub?.description}
                                placeholder="Describe the contents of this file..."
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Source Binary Selection</label>
                            <div className="border-2 border-dashed border-gray-100 rounded-[30px] p-12 text-center bg-gray-50/50 hover:bg-white hover:border-[#005382]/20 transition-all cursor-pointer group">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl border border-gray-50 group-hover:scale-110 transition-transform">
                                    <Plus size={32} className="text-[#E21E25]" />
                                </div>
                                <p className="text-sm text-[#005382] font-bold font-outfit">Attach Digital Asset</p>
                                <p className="text-[10px] text-gray-400 font-outfit mt-1 uppercase tracking-widest">Supports PDF, XLSX up to 100MB</p>
                                <input type="file" className="hidden" />
                            </div>
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
                                className="px-10 py-4 bg-[#E21E25] text-white rounded-2xl font-bold hover:bg-[#c41920] font-outfit shadow-xl shadow-red-100"
                            >
                                {selectedPub?.id ? 'Update Asset' : 'Commit Upload'}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-12 bg-white rounded-[50px] border border-gray-100 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#005382]/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

                            <div className="w-48 h-48 bg-[#E21E25] text-white rounded-[40px] flex items-center justify-center shadow-blue-900/10 shadow-2xl shrink-0 group hover:rotate-2 transition-transform duration-500">
                                <div className="p-8 border-4 border-white/20 rounded-[30px]">
                                    {getFileIcon(selectedPub?.type || '')}
                                </div>
                            </div>

                            <div className="space-y-6 flex-1 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-4">
                                    <span className="px-5 py-1.5 bg-[#005382] text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                                        {selectedPub?.format}
                                    </span>
                                    <span className="text-gray-400 font-outfit font-bold uppercase tracking-widest text-xs">{selectedPub?.size}</span>
                                </div>
                                <h2 className="text-5xl font-katibeh text-[#005382] leading-tight">{selectedPub?.title}</h2>
                                <p className="text-gray-500 font-outfit text-lg italic leading-relaxed">
                                    "{selectedPub?.description}"
                                </p>
                            </div>
                        </div>

                        <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-4">
                            <div className="md:col-span-2 space-y-6">
                                <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 space-y-6">
                                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] font-outfit">Asset Specifications</h4>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mb-1">Resource Type</p>
                                            <div className="flex items-center gap-2 font-bold text-[#005382] font-outfit">
                                                <Tag size={16} className="text-[#E21E25]" /> {selectedPub?.type}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mb-1">Last Updated</p>
                                            <div className="flex items-center gap-2 font-bold text-[#005382] font-outfit">
                                                <Plus size={16} className="text-[#E21E25]" /> {selectedPub?.date ? new Date(selectedPub.date).toLocaleDateString() : 'N/A'}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-1 p-6 bg-blue-50/30 rounded-[30px] border border-blue-100 flex items-center gap-4">
                                        <Monitor size={24} className="text-[#005382]" />
                                        <p className="text-[10px] font-bold text-[#005382] font-outfit uppercase tracking-wider">Web Browser View Ready</p>
                                    </div>
                                    <div className="flex-1 p-6 bg-green-50/30 rounded-[30px] border border-green-100 flex items-center gap-4">
                                        <Smartphone size={24} className="text-green-600" />
                                        <p className="text-[10px] font-bold text-green-600 font-outfit uppercase tracking-wider">Mobile App Optimized</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button className="w-full py-5 bg-[#005382] text-white rounded-3xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-blue-100 hover:bg-[#004269] transition-all transform hover:-translate-y-1">
                                    <Download size={24} /> Preview & Save
                                </button>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => selectedPub && handleEdit(selectedPub)}
                                        className="flex-1 py-4 bg-gray-50 text-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all border border-gray-100"
                                    >
                                        <Edit2 size={18} /> Edit
                                    </button>
                                    <button
                                        onClick={() => selectedPub && handleDelete(selectedPub.id)}
                                        className="p-4 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-all border border-red-100"
                                    >
                                        <Trash2 size={18} />
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
