import {
    Users,
    Calendar,
    Video,
    MessageSquare,
    TrendingUp,
    Clock,
    Activity,
    ArrowUpRight,
    MousePointer2,
    Eye,
    Zap,
    Monitor,
    FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stats = [
    { name: 'Total Community', value: '1,234', change: '+12%', icon: Users, color: 'text-[#005382]', bgColor: 'bg-blue-50', trend: 'up' },
    { name: 'Event Registrations', value: '458', change: '+5.4%', icon: Calendar, color: 'text-[#E21E25]', bgColor: 'bg-red-50', trend: 'up' },
    { name: 'Media Library', value: '1.2k', change: '+28', icon: Video, color: 'text-orange-600', bgColor: 'bg-orange-50', trend: 'up' },
];

export default function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <div className="space-y-10 pb-20">
            {/* Dynamic Greeting Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-white p-10 rounded-[50px] border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#005382]/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-green-100 flex items-center gap-2">
                            <Activity size={12} /> System Live
                        </span>
                        <span className="text-gray-400 font-outfit text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <Clock size={14} /> Last Login: 42 mins ago
                        </span>
                    </div>
                    <h1 className="text-5xl font-katibeh text-[#005382] leading-none mb-3">Jai Swaminarayan, Admin</h1>
                    <p className="text-gray-500 font-outfit text-lg max-w-xl leading-relaxed">
                        Control center is fully operational. You have <span className="text-[#E21E25] font-bold">5 pending inquiries</span> and <span className="text-[#005382] font-bold">3 new content drafts</span> awaiting review.
                    </p>
                </div>

                <div className="flex gap-4 shrink-0 relative z-10">
                    <button
                        onClick={() => navigate('/admin/updates')}
                        className="px-8 py-4 bg-[#005382] text-white rounded-3xl font-bold flex items-center gap-3 shadow-xl hover:bg-[#004269] transition-all hover:-translate-y-1 group"
                    >
                        Publish Update
                        <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => navigate('/admin/darshan')}
                        className="px-8 py-4 bg-white text-[#005382] rounded-3xl font-bold flex items-center gap-3 border border-gray-100 shadow-sm hover:border-[#005382]/20 transition-all hover:-translate-y-1"
                    >
                        Daily Darshan
                    </button>
                </div>
            </div>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stats.map((stat) => (
                    <div
                        key={stat.name}
                        className="bg-white p-10 rounded-[50px] border border-gray-100 transition-all hover:shadow-2xl group relative overflow-hidden flex flex-col justify-between"
                        style={{ boxShadow: '10px 10px 0px 0px #005382' }}
                    >
                        <div className="flex items-start justify-between mb-8">
                            <div className={`p-5 rounded-3xl ${stat.bgColor} ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                                <stat.icon size={36} />
                            </div>
                            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-outfit ${stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                <TrendingUp size={12} /> {stat.change}
                            </div>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-gray-900 font-outfit mb-2">{stat.value}</p>
                            <p className="text-gray-400 font-medium font-outfit uppercase tracking-[0.2em] text-[10px]">{stat.name}</p>
                        </div>
                        {/* Fake mini chart using SVG */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-full h-full" preserveAspectRatio="none">
                                <path
                                    d="M0 64 Q 25 20, 50 40 T 100 20 T 150 50 T 200 10 T 250 40 T 300 10 L 300 64 L 0 64 Z"
                                    className={`fill-current ${stat.color}`}
                                />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {/* Advanced Analytics Panel (Simulated with CSS) */}
                <div
                    className="xl:col-span-2 bg-white p-10 rounded-[50px] border border-gray-100 flex flex-col"
                    style={{ boxShadow: '10px 10px 0px 0px #E21E25' }}
                >
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-4xl font-katibeh text-[#005382]">Community Engagement</h2>
                            <p className="text-xs text-gray-400 font-outfit uppercase tracking-widest mt-1">Growth over the last 12 weeks</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-xl text-[10px] font-bold font-outfit text-[#005382]">
                                <div className="w-2 h-2 rounded-full bg-[#005382]" /> Mobile App
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-xl text-[10px] font-bold font-outfit text-[#E21E25]">
                                <div className="w-2 h-2 rounded-full bg-[#E21E25]" /> Web Portal
                            </div>
                        </div>
                    </div>

                    {/* Simulated Bar Chart */}
                    <div className="flex-1 flex items-end justify-between gap-4 h-64 px-4 mb-8">
                        {[45, 65, 35, 85, 45, 95, 75, 55, 65, 85, 95, 100].map((height, i) => (
                            <div key={i} className="flex-1 group/bar relative">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#005382] text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-10">
                                    {height}% active
                                </div>
                                <div className="space-y-1">
                                    <div
                                        style={{ height: `${height * 0.6}%` }}
                                        className="w-full bg-[#005382]/10 group-hover/bar:bg-[#005382] transition-colors rounded-t-xl"
                                    />
                                    <div
                                        style={{ height: `${height * 0.4}%` }}
                                        className="w-full bg-[#E21E25]/10 group-hover/bar:bg-[#E21E25] transition-colors"
                                    />
                                </div>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-300 font-outfit">W{i + 1}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                        <div className="flex gap-8">
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Peak Time</p>
                                <p className="text-sm font-bold text-[#005382] font-outfit italic">18:45 IST (Aarti Time)</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Top Region</p>
                                <p className="text-sm font-bold text-[#005382] font-outfit italic">Gujarat, India</p>
                            </div>
                        </div>
                        <button className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-[#005382] hover:text-white transition-all">
                            <TrendingUp size={20} />
                        </button>
                    </div>
                </div>

                {/* Performance & Status Grid */}
                <div className="space-y-10">
                    {/* Real-time Feed */}
                    <div
                        className="bg-white p-10 rounded-[50px] border border-gray-100 relative overflow-hidden"
                        style={{ boxShadow: '10px 10px 0px 0px #005382' }}
                    >
                        <h2 className="text-3xl font-katibeh text-[#005382] mb-8 flex items-center gap-3">
                            <Zap size={24} className="text-[#E21E25]" /> Stream Feed
                        </h2>
                        <div className="space-y-6">
                            {[
                                { user: 'Rajesh Patel', action: 'joined a seminar', time: '2m' },
                                { user: 'Admin', action: 'uploaded Daily Darshan', time: '14m' },
                                { user: 'System', action: 'Weekly Backup completed', time: '1h' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start relative group cursor-pointer">
                                    <div className="w-1.5 h-10 rounded-full bg-gray-100 group-hover:bg-[#E21E25] transition-colors" />
                                    <div>
                                        <p className="text-sm font-bold text-[#005382] font-outfit">{item.user} <span className="font-medium text-gray-400">{item.action}</span></p>
                                        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mt-1">{item.time} ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 py-4 bg-gray-50 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] font-outfit text-[#005382] hover:bg-gray-100 transition-colors">
                            Full Audit Log
                        </button>
                    </div>

                    {/* Quick Access Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        <div
                            onClick={() => navigate('/admin/inquiries')}
                            className="bg-white p-8 rounded-[40px] border border-gray-100 cursor-pointer group hover:bg-[#005382] transition-all"
                            style={{ boxShadow: '6px 6px 0px 0px #E21E25' }}
                        >
                            <MessageSquare className="text-[#005382] group-hover:text-white mb-4 group-hover:scale-110 transition-transform" size={32} />
                            <h4 className="text-lg font-bold text-[#005382] group-hover:text-white font-outfit mb-1">Inquiries</h4>
                            <p className="text-[10px] text-gray-400 group-hover:text-white/60 font-medium uppercase tracking-widest font-outfit">View Unread</p>
                        </div>
                        <div
                            onClick={() => navigate('/admin/videos')}
                            className="bg-white p-8 rounded-[40px] border border-gray-100 cursor-pointer group hover:bg-[#E21E25] transition-all"
                            style={{ boxShadow: '6px 6px 0px 0px #005382' }}
                        >
                            <Monitor className="text-[#E21E25] group-hover:text-white mb-4 group-hover:scale-110 transition-transform" size={32} />
                            <h4 className="text-lg font-bold text-[#005382] group-hover:text-white font-outfit mb-1">Media TV</h4>
                            <p className="text-[10px] text-gray-400 group-hover:text-white/60 font-medium uppercase tracking-widest font-outfit">Go Live</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row - More Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { label: 'Page Views', value: '45.2K', sub: 'High Engagement', icon: Eye },
                    { label: 'Bounce Rate', value: '12%', sub: 'Healthy Retension', icon: MousePointer2 },
                    { label: 'Server Load', value: '0.42s', sub: 'Optimized', icon: Zap },
                    { label: 'Drafts', value: '3', sub: 'Action Required', icon: FileText }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-[35px] border border-gray-50 flex items-center gap-5 hover:shadow-lg transition-all group">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#005382] group-hover:bg-[#005382] group-hover:text-white transition-all shadow-inner">
                            <item.icon size={24} />
                        </div>
                        <div>
                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                            <p className="text-xl font-bold text-[#005382] font-outfit">{item.value}</p>
                            <p className="text-[8px] text-gray-300 font-medium uppercase tracking-widest italic">{item.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
