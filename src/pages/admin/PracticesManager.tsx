import { useState } from 'react';
import { Plus, CheckSquare, Search, Edit2, Trash2, Shield, Info, Eye } from 'lucide-react';
import Modal from '../../components/Modal';
import type { Practice } from '../../types/admin';

const mockPractices: Practice[] = [
    { id: 1, title: 'Mansi Puja', description: 'Mental worship performed five times a day to cultivate devotion.', category: 'Daily', points: 10, instructions: ['Find a quiet place', 'Sit comfortably', 'Visualize the Lord'], benefit: 'Mental peace and devotion', image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&auto=format&fit=crop' },
    { id: 2, title: 'Chesta', description: 'Singing the glory of the Lord before sleeping.', category: 'Night', points: 5, instructions: ['Gather with family', 'Sing devotional songs', 'Meditate on daily actions'], benefit: 'Better sleep and reflection', image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&auto=format&fit=crop' },
];

export default function PracticesManager() {
    const [practices, setPractices] = useState<Practice[]>(mockPractices);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPractice, setSelectedPractice] = useState<Practice | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleView = (practice: Practice) => {
        setSelectedPractice(practice);
        setIsEditing(false);
        setIsModalOpen(true);
    };

    const handleEdit = (practice: Practice) => {
        setSelectedPractice(practice);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedPractice({
            id: 0,
            title: '',
            category: 'Daily',
            points: 5,
            description: '',
            instructions: [],
            benefit: '',
            image: ''
        });
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this practice?')) {
            setPractices(practices.filter(p => p.id !== id));
            setIsModalOpen(false);
        }
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPractice) return;

        const formData = new FormData(e.target as HTMLFormElement);
        const newData: Practice = {
            id: selectedPractice.id || Math.max(...practices.map(p => p.id), 0) + 1,
            title: formData.get('title') as string,
            category: formData.get('category') as string,
            points: Number(formData.get('points')),
            description: formData.get('description') as string,
            instructions: (formData.get('instructions') as string).split('\n'),
            benefit: formData.get('benefit') as string,
            image: selectedPractice.image || ''
        };

        if (selectedPractice.id) {
            setPractices(practices.map(p => p.id === selectedPractice.id ? newData : p));
        } else {
            setPractices([newData, ...practices]);
        }
        setIsModalOpen(false);
    };

    return (
        <div className="space-y-8 pb-10">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-katibeh text-[#005382]">Spiritual Niyams</h1>
                    <p className="text-gray-500 font-outfit mt-1">Configure and manage daily spiritual practices (Niyams)</p>
                </div>
                <button
                    onClick={handleAdd}
                    className="px-8 py-4 bg-[#005382] text-white rounded-3xl hover:bg-[#004269] flex items-center gap-3 font-outfit font-bold transition-all shadow-xl shadow-blue-100 hover:-translate-y-1"
                >
                    <Plus size={24} />
                    Add New Niyam
                </button>
            </div>

            {/* Dashboard Stats for Practices */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-[40px] border border-gray-100 flex items-center gap-6 shadow-sm">
                    <div className="w-16 h-16 bg-blue-50 text-[#005382] rounded-3xl flex items-center justify-center">
                        <Shield size={32} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Total Practices</p>
                        <p className="text-3xl font-bold text-[#005382] font-outfit">{practices.length}</p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-[40px] border border-gray-100 flex items-center gap-6 shadow-sm">
                    <div className="w-16 h-16 bg-red-50 text-[#E21E25] rounded-3xl flex items-center justify-center">
                        <CheckSquare size={32} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">Daily Goal</p>
                        <p className="text-3xl font-bold text-[#005382] font-outfit">85 Points</p>
                    </div>
                </div>
                <div className="bg-[#E21E25] p-8 rounded-[40px] flex items-center gap-6 shadow-xl shadow-red-100">
                    <div className="w-16 h-16 bg-white/20 text-white rounded-3xl flex items-center justify-center backdrop-blur-md">
                        <Info size={32} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-red-100 uppercase tracking-widest font-outfit">Active Users</p>
                        <p className="text-3xl font-bold text-white font-outfit">1.2K</p>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-6 rounded-[35px] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
                    <input
                        type="text"
                        placeholder="Search practices by title or keywords..."
                        className="w-full pl-16 pr-8 py-4 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#005382]/5 focus:border-[#005382] font-outfit bg-gray-50/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    {['All', 'Daily', 'Night', 'Mandatory'].map(cat => (
                        <button key={cat} className="px-6 py-3 rounded-xl border border-gray-100 font-bold font-outfit text-xs hover:bg-gray-50 text-gray-500">{cat}</button>
                    ))}
                </div>
            </div>

            {/* Practices Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {practices.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase())).map((practice) => (
                    <div
                        key={practice.id}
                        className="group bg-white rounded-[50px] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all h-full flex flex-col relative"
                        style={{ boxShadow: '8px 8px 0px 0px #005382' }}
                    >
                        <div className="p-10 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-5 py-2 bg-red-50 text-[#E21E25] rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm">
                                    {practice.category}
                                </span>
                                <div className="flex bg-blue-50 px-4 py-2 rounded-2xl gap-2 items-center text-[#005382]">
                                    <span className="text-xl font-bold font-outfit leading-none">{practice.points}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest font-outfit">Pts</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-katibeh text-[#005382] mb-4 leading-tight group-hover:text-[#E21E25] transition-colors">{practice.title}</h3>
                            <p className="text-gray-500 font-outfit text-sm leading-relaxed mb-8 flex-1">
                                {practice.description}
                            </p>

                            <div className="flex gap-3 pt-6 border-t border-gray-50">
                                <button
                                    onClick={() => handleView(practice)}
                                    className="flex-1 py-4 bg-gray-50 text-[#005382] rounded-2xl text-xs font-bold font-outfit uppercase tracking-widest hover:bg-white border border-transparent hover:border-gray-100 transition-all flex items-center justify-center gap-2"
                                >
                                    Details <Eye size={16} />
                                </button>
                                <button
                                    onClick={() => handleEdit(practice)}
                                    className="p-4 text-blue-600 hover:bg-blue-50 rounded-2xl transition-colors border border-transparent hover:border-blue-100 shadow-sm"
                                >
                                    <Edit2 size={20} />
                                </button>
                                <button
                                    onClick={() => handleDelete(practice.id)}
                                    className="p-4 text-red-600 hover:bg-red-50 rounded-2xl transition-colors border border-transparent hover:border-red-100 shadow-sm"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Practice Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={isEditing ? (selectedPractice?.id ? 'Configure Practice Parameters' : 'Register New Spiritual Niyam') : 'Niyam Strategic Overview'}
            >
                {isEditing ? (
                    <form onSubmit={handleSave} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit ml-1">Niyam Designation</label>
                                <input
                                    name="title"
                                    type="text"
                                    required
                                    className="w-full px-6 py-4 border border-gray-100 rounded-2xl outline-none font-outfit bg-gray-50/30 font-bold focus:bg-white focus:shadow-xl focus:shadow-blue-100 transition-all"
                                    defaultValue={selectedPractice?.title}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit ml-1">Category</label>
                                    <select
                                        name="category"
                                        className="w-full px-5 py-4 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-medium"
                                        defaultValue={selectedPractice?.category}
                                    >
                                        <option>Daily</option>
                                        <option>Night</option>
                                        <option>Mandatory</option>
                                        <option>Special</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit ml-1">Reward Pts</label>
                                    <input
                                        name="points"
                                        type="number"
                                        required
                                        className="w-full px-5 py-4 border border-gray-100 rounded-2xl outline-none font-outfit bg-white font-bold"
                                        defaultValue={selectedPractice?.points}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit ml-1">Impact Description</label>
                            <input
                                name="description"
                                type="text"
                                required
                                className="w-full px-6 py-4 border border-gray-100 rounded-2xl outline-none font-outfit bg-gray-50/30 font-medium"
                                defaultValue={selectedPractice?.description}
                                placeholder="Short explanation of why this is important"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit ml-1">Guided Instructions (One per line)</label>
                                <textarea
                                    name="instructions"
                                    rows={5}
                                    required
                                    className="w-full px-6 py-4 border border-gray-100 rounded-[30px] outline-none resize-none font-outfit bg-gray-50/30"
                                    defaultValue={selectedPractice?.instructions.join('\n')}
                                    placeholder="Step 1: Focus...&#10;Step 2: Breathe..."
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit ml-1">Spiritual Benefit</label>
                                <textarea
                                    name="benefit"
                                    rows={5}
                                    required
                                    className="w-full px-6 py-4 border border-gray-100 rounded-[30px] outline-none resize-none font-outfit bg-gray-50/30"
                                    defaultValue={selectedPractice?.benefit}
                                    placeholder="What is the ultimate spiritual outcome?"
                                />
                            </div>
                        </div>

                        <div className="pt-6 flex justify-end gap-4 border-t border-gray-50">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="px-10 py-4 text-gray-400 font-bold font-outfit hover:text-gray-600 transition-colors uppercase tracking-widest text-[10px]"
                            >
                                Discard Changes
                            </button>
                            <button
                                type="submit"
                                className="px-12 py-4 bg-[#005382] text-white rounded-2xl font-bold hover:bg-[#004269] font-outfit shadow-2xl shadow-blue-100 transition-transform active:scale-95"
                            >
                                {selectedPractice?.id ? 'Synchronize Data' : 'Establish Niyam'}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-12 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar p-2">
                        <div className="relative group p-1">
                            <div className="absolute inset-0 bg-[#005382] rounded-[60px] translate-x-3 translate-y-3 -z-10 opacity-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform shadow-2xl"></div>
                            <div className="bg-white p-12 rounded-[55px] border border-gray-100 flex flex-col items-center text-center shadow-sm">
                                <div className="w-24 h-24 bg-red-50 text-[#E21E25] rounded-[35px] flex items-center justify-center mb-8 shadow-inner shadow-red-100/50">
                                    <Shield size={48} />
                                </div>
                                <span className="px-6 py-2 bg-gray-100 text-gray-500 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                                    {selectedPractice?.category} Practice
                                </span>
                                <h2 className="text-6xl font-katibeh text-[#005382] mb-6 leading-none">
                                    {selectedPractice?.title}
                                </h2>
                                <div className="flex bg-blue-50/50 px-8 py-4 rounded-3xl border border-blue-100/50 gap-4 items-center">
                                    <div className="text-left border-r border-blue-200 pr-6">
                                        <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1">Potential</p>
                                        <p className="text-2xl font-bold text-[#005382] font-outfit">+{selectedPractice?.points} pts</p>
                                    </div>
                                    <div className="text-left pl-2">
                                        <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1">Impact Level</p>
                                        <p className="text-sm font-bold text-[#005382] font-outfit uppercase tracking-wider">High Spirit</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <h4 className="text-[11px] font-bold text-[#005382] uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
                                    <div className="w-8 h-px bg-[#005382]/20"></div> Execution Steps
                                </h4>
                                <div className="space-y-6">
                                    {selectedPractice?.instructions.map((step, i) => (
                                        <div key={i} className="flex gap-6 group/step">
                                            <div className="flex flex-col items-center">
                                                <div className="w-10 h-10 rounded-2xl bg-[#005382] text-white flex items-center justify-center font-bold font-outfit text-sm shadow-lg group-hover/step:scale-110 transition-transform">
                                                    {i + 1}
                                                </div>
                                                {i < selectedPractice.instructions.length - 1 && <div className="w-0.5 flex-1 bg-gray-100 my-2" />}
                                            </div>
                                            <p className="flex-1 text-gray-600 font-outfit pt-1.5 leading-relaxed font-medium">
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-10">
                                <div>
                                    <h4 className="text-[11px] font-bold text-[#E21E25] uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
                                        <div className="w-8 h-px bg-[#E21E25]/20"></div> Spiritual Advantage
                                    </h4>
                                    <div className="p-10 bg-red-50/30 rounded-[45px] border border-red-50 relative group overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                                        <p className="text-gray-700 font-outfit leading-loose text-lg font-medium relative z-10 italic">
                                            "{selectedPractice?.benefit}"
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-6">
                                    <button
                                        onClick={() => selectedPractice && handleEdit(selectedPractice)}
                                        className="flex-1 py-5 bg-[#005382] text-white rounded-3xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-[#004269] transition-all hover:shadow-blue-200"
                                    >
                                        <Edit2 size={24} /> Edit Specification
                                    </button>
                                    <button
                                        onClick={() => selectedPractice && handleDelete(selectedPractice.id)}
                                        className="px-10 py-5 bg-red-50 text-[#E21E25] rounded-3xl font-bold flex items-center justify-center hover:bg-red-100 transition-all border border-red-100"
                                    >
                                        <Trash2 size={24} />
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
