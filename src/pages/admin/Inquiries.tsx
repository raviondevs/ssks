import { useState } from 'react';
import { Search, Mail, Calendar, Phone, CheckCircle, Clock, Trash2, User, MessageSquare } from 'lucide-react';
import Modal from '../../components/Modal';
import type { Inquiry } from '../../types/admin';

const mockInquiries: Inquiry[] = [
    {
        id: 1,
        name: 'Rahul Kumar',
        email: 'rahul@example.com',
        phone: '+91 98765 43210',
        subject: 'Regarding volunteering for next event',
        message: 'Jai Swaminarayan. I would like to offer my seva for the upcoming Jal Jhilani event. Please let me know how I can join the volunteer team.',
        date: '2025-03-15T10:30:00',
        status: 'new'
    },
    {
        id: 2,
        name: 'Priya Patel',
        email: 'priya.p@example.com',
        phone: '+91 98765 43211',
        subject: 'Darshan timings inquiry',
        message: 'Can you please confirm the daily darshan timings for the weekend? I plan to visit with my family.',
        date: '2025-01-14T15:45:00',
        status: 'read'
    },
    {
        id: 3,
        name: 'Amit Shah',
        email: 'amit.s@example.com',
        phone: '+91 98765 43212',
        subject: 'Donation Receipt',
        message: 'I made a donation last week but haven\'t received the receipt yet. Transaction ID is 123456.',
        date: '2025-01-13T09:15:00',
        status: 'resolved'
    }
];

export default function Inquiries() {
    const [inquiries, setInquiries] = useState<Inquiry[]>(mockInquiries);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleView = (inquiry: Inquiry) => {
        setSelectedInquiry(inquiry);
        setIsModalOpen(true);
        if (inquiry.status === 'new') {
            updateStatus(inquiry.id, 'read');
        }
    };

    const updateStatus = (id: number, newStatus: string) => {
        setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this inquiry?')) {
            setInquiries(inquiries.filter(inq => inq.id !== id));
            setIsModalOpen(false);
        }
    };

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'new': return 'bg-blue-50 text-blue-600 border-blue-100';
            case 'read': return 'bg-gray-50 text-gray-500 border-gray-100';
            case 'resolved': return 'bg-green-50 text-green-600 border-green-100';
            default: return 'bg-gray-50 text-gray-600';
        }
    };

    const filteredInquiries = inquiries.filter(inq => {
        const matchesSearch = inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inq.subject.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'all' || inq.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-katibeh text-[#005382]">Community Inquiries</h1>
                    <p className="text-gray-500 font-outfit mt-1">Manage contact messages, requests, and support tickets</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setInquiries(inquiries.map(inq => ({ ...inq, status: 'read' })))}
                        className="px-6 py-3 bg-white text-[#005382] border-2 border-[#005382]/10 rounded-2xl hover:bg-gray-50 font-outfit font-bold transition-all"
                    >
                        Mark All Read
                    </button>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-6">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by name, subject, or content..."
                        className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005382]/10 focus:border-[#005382] font-outfit bg-gray-50/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex bg-gray-50/50 p-1.5 rounded-2xl border border-gray-100 overflow-x-auto whitespace-nowrap">
                    {['all', 'new', 'read', 'resolved'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`px-6 py-2 rounded-xl capitalize font-outfit font-bold transition-all text-sm ${filterStatus === status
                                ? 'bg-[#005382] text-white shadow-lg'
                                : 'text-gray-400 hover:text-[#005382]'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* List */}
            <div className="space-y-6">
                {filteredInquiries.map((inquiry) => (
                    <div
                        key={inquiry.id}
                        className={`rounded-[25px] border-2 p-8 hover:shadow-sm transition-all cursor-pointer group 
                                   ${inquiry.status === 'new' ? 'bg-blue-50/30 border-[#005382]' : 'bg-white border-gray-200 hover:border-[#005382]'}`}
                        onClick={() => handleView(inquiry)}
                    >
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Header Info */}
                            <div className="lg:w-1/4 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-[#005382]/5 text-[#005382] flex items-center justify-center font-bold font-outfit text-xl shadow-inner">
                                        {inquiry.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 font-outfit text-lg leading-tight">{inquiry.name}</h3>
                                        <span className={`mt-1.5 inline-flex items-center px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getStatusStyles(inquiry.status)}`}>
                                            {inquiry.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-2.5 text-xs text-gray-400 font-outfit font-medium">
                                    <div className="flex items-center gap-2.5">
                                        <Mail size={14} className="text-[#005382]" />
                                        {inquiry.email}
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Phone size={14} className="text-[#005382]" />
                                        {inquiry.phone}
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Calendar size={14} className="text-[#E21E25]" />
                                        {new Date(inquiry.date).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}
                                        <Clock size={14} className="ml-2 text-[#E21E25]" />
                                        {new Date(inquiry.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                            </div>

                            {/* Message Content */}
                            <div className="flex-1 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-10 relative">
                                <h4 className="text-2xl font-katibeh text-[#005382] mb-3 group-hover:text-[#E21E25] transition-colors">{inquiry.subject}</h4>
                                <p className="text-gray-600 font-outfit leading-relaxed line-clamp-2">
                                    {inquiry.message}
                                </p>

                                <div className="mt-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); window.location.href = `mailto:${inquiry.email}`; }}
                                        className="px-5 py-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold font-outfit hover:bg-blue-100 transition-colors flex items-center gap-2"
                                    >
                                        <Mail size={14} />
                                        Reply via Email
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); updateStatus(inquiry.id, 'resolved'); }}
                                        className="px-5 py-2 bg-green-50 text-green-600 rounded-xl text-xs font-bold font-outfit hover:bg-green-100 transition-colors flex items-center gap-2"
                                    >
                                        <CheckCircle size={14} />
                                        Mark Resolved
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Inquiry Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Message Details"
            >
                <div className="space-y-8">
                    <div className="flex items-center justify-between bg-gray-50 p-8 rounded-[40px] border border-gray-100">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-[30px] bg-[#005382] text-white flex items-center justify-center font-bold font-outfit text-3xl shadow-2xl">
                                {selectedInquiry?.name.charAt(0)}
                            </div>
                            <div>
                                <h2 className="text-3xl font-katibeh text-[#005382] mb-1">{selectedInquiry?.name}</h2>
                                <div className="flex items-center gap-3">
                                    <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getStatusStyles(selectedInquiry?.status || '')}`}>
                                        {selectedInquiry?.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => selectedInquiry && handleDelete(selectedInquiry.id)}
                                className="p-4 bg-red-50 text-[#E21E25] rounded-[24px] hover:bg-red-100 transition-colors"
                            >
                                <Trash2 size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                        <div className="p-6 bg-blue-50/30 rounded-[30px] border border-blue-50/50 space-y-4">
                            <h4 className="text-[#005382] font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                                <User size={14} /> Contact Information
                            </h4>
                            <div className="space-y-3 font-outfit font-medium">
                                <p className="flex items-center gap-3 text-gray-600"><Mail size={16} className="text-[#E21E25]" /> {selectedInquiry?.email}</p>
                                <p className="flex items-center gap-3 text-gray-600"><Phone size={16} className="text-[#E21E25]" /> {selectedInquiry?.phone}</p>
                            </div>
                        </div>
                        <div className="p-6 bg-orange-50/30 rounded-[30px] border border-orange-50/50 space-y-4">
                            <h4 className="text-orange-600 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                                <Clock size={14} /> Submission Time
                            </h4>
                            <div className="space-y-3 font-outfit font-medium">
                                <p className="flex items-center gap-3 text-gray-600"><Calendar size={16} className="text-[#E21E25]" /> {selectedInquiry?.date && new Date(selectedInquiry.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                <p className="flex items-center gap-3 text-gray-600"><Clock size={16} className="text-[#E21E25]" /> {selectedInquiry?.date && new Date(selectedInquiry.date).toLocaleTimeString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 space-y-4">
                        <div className="p-8 bg-gray-50/50 rounded-[40px] border border-gray-100 italic">
                            <h3 className="text-2xl font-katibeh text-[#005382] mb-4 flex items-center gap-3">
                                <MessageSquare size={24} className="text-[#E21E25]" />
                                {selectedInquiry?.subject}
                            </h3>
                            <p className="text-gray-600 font-outfit leading-relaxed text-lg">
                                "{selectedInquiry?.message}"
                            </p>
                        </div>
                    </div>

                    <div className="pt-4 flex gap-4 px-4 pb-4">
                        <button
                            onClick={() => window.location.href = `mailto:${selectedInquiry?.email}`}
                            className="flex-1 py-4 bg-[#005382] text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-[#004269] transition-all"
                        >
                            <Mail size={20} /> Reply via Email
                        </button>
                        {selectedInquiry?.status !== 'resolved' && (
                            <button
                                onClick={() => { selectedInquiry && updateStatus(selectedInquiry.id, 'resolved'); setIsModalOpen(false); }}
                                className="flex-1 py-4 bg-green-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-green-700 transition-all border-b-4 border-green-800"
                            >
                                <CheckCircle size={20} /> Mark as Resolved
                            </button>
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

